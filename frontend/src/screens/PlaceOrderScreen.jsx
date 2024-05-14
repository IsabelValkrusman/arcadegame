import React, { useState } from 'react';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { removeFromCart } from '../slices/cartSlice';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import OrderScreen from './OrderScreen';

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false); // Uus olek muutuja tellimuse esitamise jälgimiseks

  const payOrder = () => {}; // Funktsioon, mis töötleb makse

  // Funktsioon, mis saadab makse andmed PayPali poole
  const createOrder = () => {
    // Arvutage tulumaksu summa
    const taxAmount = 1.00;
    // Arvutage kogusumma, lisades tulumaksu
    const totalAmount = (parseFloat(cart.totalPrice) + taxAmount).toFixed(2);
    return {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: totalAmount, // Kokku summa koos tulumaksuga
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: cart.itemsPrice.toFixed(2), // Pileti hind
              },
              tax_total: {
                currency_code: 'USD',
                value: taxAmount.toFixed(2), // Tulumaksu summa
              },
            },
          },
          items: cart.cartItems.map(item => {
            return {
              name: item.name,
              quantity: item.qty,
              category: 'PHYSICAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: item.price.toFixed(2),
              },
            }
          }),
        },
      ],
    };
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      await payOrder({ orderId: '123', details });
      toast.success('Payment successful');
      setOrderPlaced(true); // Määrake tellimus edukalt esitatuks
    } catch (err) {
      toast.error(err?.data?.message || err.message);
    }
  };

  const onError = (err) => {
    toast.error(err.message);
  };

  const handleTestButton = () => {
    // Eemaldage tooted korvist
    cart.cartItems.forEach(item => dispatch(removeFromCart(item._id)));
    // Märkige makse edukalt lõpule viiduks
    setPaymentCompleted(true);
    // Lisage vaikimisi paus siin
    setTimeout(() => {
      // Kinnitage makse edukalt lõpule viiduks
      toast.success('Test makse sooritatud edukalt!');
    }, 2000); // 2 sekundit
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Makse meetod</h2>
              <strong>Meetod: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Tellimus</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Korv on tühi</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col></Col>
                        <Col md={4}>
                          {item.price !== undefined && item.qty !== undefined ? (
                            <>
                              {item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}
                            </>
                          ) : (
                            <p>Hinna teave pole saadaval</p>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Tellimus kokku</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Pileti hind</Col>
                  <Col>${parseFloat(cart.itemsPrice).toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tulumaks</Col>
                  <Col>$1.00</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Kokku</Col>
                  <Col>${(parseFloat(cart.totalPrice) + 1).toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
        
            <PayPalButtons
              style={{ layout: 'horizontal', color: 'gold', shape: 'rect', label: 'pay', tagline: false }}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
            <Button onClick={handleTestButton}>Test makse</Button>
            {/* Kui tellimus on esitatud, kuvatakse siin OrderScreen komponent */}
            {orderPlaced && <OrderScreen />}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
