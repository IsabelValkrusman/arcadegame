import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useCart } from '../CartContext';

const PriceScreen = () => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();

  // Esimese hinnaga seotud seisund ja funktsioon
  const [quantity1, setQuantity1] = useState(1);
  const handleQuantityChange1 = (e) => {
    setQuantity1(e.target.value);
  };

  const addToCartHandler1 = (price) => {
    const item = {
      id: Date.now(),
      name: 'Toode',
      price: price,
      qty: parseInt(quantity1),
    };
    cartDispatch({ type: 'ADD_TO_CART', payload: item });
    navigate('/cart');
  };

  // Teise hinnaga seotud seisund ja funktsioon
  const [quantity2, setQuantity2] = useState(1);
  const handleQuantityChange2 = (e) => {
    setQuantity2(e.target.value);
  };

  const addToCartHandler2 = (price) => {
    const item = {
      id: Date.now(),
      name: 'Toode',
      price: price,
      qty: parseInt(quantity2),
    };
    cartDispatch({ type: 'ADD_TO_CART', payload: item });
    navigate('/cart');
  };

  return (
    <div className='container text-center'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='info-box'>
            <h1>Hinnad</h1>
            <div className='info-container'>
              <p>
                <strong>Kuni südaööni:</strong>
                <br />
                - Täiskasvanud: 10€
                <Form.Control
                  as='input'
                  type='number'
                  min={1}
                  value={quantity1}
                  onChange={handleQuantityChange1}
                />
                <Button
                  className='btn-block mt-2'
                  type='button'
                  onClick={() => addToCartHandler1(10)}
                >
                  Osta pilet ({quantity1}tk)
                </Button>
                <br />
              </p>
            </div>
            <div className='info-container'>
              <p>
                <strong>Pärast südaöö:</strong>
                <br />
                - Täiskasvanud: 15€
                <Form.Control
                  as='input'
                  type='number'
                  min={1}
                  value={quantity2}
                  onChange={handleQuantityChange2}
                />
                <Button
                  className='btn-block mt-2'
                  type='button'
                  onClick={() => addToCartHandler2(15)}
                >
                  Osta pilet ({quantity2}tk)
                </Button>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceScreen;
