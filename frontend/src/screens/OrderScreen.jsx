import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useGetPaypalClientIdQuery, usePayOrderMutation } from '../slices/ordersApiSlice';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import EmptyPayPalButtons from '../components/EmptyPayPalButtons';

const OrderScreen = () => {
  const { id: orderId } = useParams();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const { data: paypal, isLoading: loadingPayPal, error: errorPayPal } = useGetPaypalClientIdQuery();
  const [payOrder] = usePayOrderMutation();
  const [paymentProcessing, setPaymentProcessing] = useState(false); 

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal?.clientId) {
        const loadPayPalScript = async () => {
            paypalDispatch({
              type: 'resetOptions',
              value: {
                'client-id': process.env.PAYPAL_CLIENT_ID,
                currency: 'USD',
              },
            });
            paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
            console.log("PayPal script loaded successfully!");
          };
          
      if (!window.paypal) {
        loadPayPalScript();
      }
    }
  }, [paypal, paypalDispatch, loadingPayPal, errorPayPal]);

  const onApprove = async (data, actions) => {
    try {
      setPaymentProcessing(true); 
      setTimeout(async () => {
        const details = await actions.order.capture();
        await payOrder({ orderId, details });
        toast.success('Payment successful');
        setPaymentProcessing(false); 
      }, 2000); 
    } catch (err) {
      toast.error(err?.data?.message || err.message);
      setPaymentProcessing(false); 
    }
  };

  const onApproveTest = async () => {
    try {
      setPaymentProcessing(true); 
      setTimeout(async () => {
        await payOrder({ orderId, details: { payer: {} } });
        toast.success('Makse sooritatud');
        setPaymentProcessing(false); 
      }, 2000); 
    } catch (err) {
      toast.error(err?.data?.message || err.message);
      setPaymentProcessing(false); 
    }
  };

  const onError = (err) => {
    toast.error(err.message);
  };

  const createOrder = () => {
    // Kui tellimust ei salvestata andmebaasi, siis ei ole vaja ka createOrder meetodit
    // Seda funktsiooni saab jätta tühjaks või eemaldada
  };

  const handleTestPayment = async () => {
    try {
      await onApproveTest();
    } catch (error) {
      console.error('Error processing test payment:', error);
    }
  };

  return (
    <>
      <ListGroup.Item>
        {loadingPayPal && <Loader />}
        {isPending ? (
          <Loader />
        ) : (
          <div>
            <Button disabled={paymentProcessing} onClick={handleTestPayment} style={{ marginBottom: '10px' }}>
              Test makse
            </Button>
            <div>
              <PayPalButtons
                disabled={paymentProcessing}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
                style={{ layout: 'horizontal', color: 'gold', shape: 'rect', label: 'pay', tagline: false }}
              ></PayPalButtons>
               <div>
              <EmptyPayPalButtons />
            </div>
            </div>
          </div>
        )}
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Powered by PayPal</p>
      </ListGroup.Item>
    </>
  );
};

export default OrderScreen;
