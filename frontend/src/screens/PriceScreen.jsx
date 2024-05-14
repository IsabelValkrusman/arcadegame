import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const PriceScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity1, setQuantity1] = useState(1);
  const handleQuantityChange1 = (e) => {
    setQuantity1(parseInt(e.target.value));
  };

  const [quantity2, setQuantity2] = useState(1);
  const handleQuantityChange2 = (e) => {
    setQuantity2(parseInt(e.target.value));
  };

  const addToCartHandler1 = () => {
    const item = {
      id: 'toode1_' + Date.now(),
      name: 'Täisksvanu pilet südaööni',
      price: 10, // Hind 10 eurot
      qty: quantity1,
    };
    dispatch(addToCart(item));
    navigate('/cart');
  };

  const addToCartHandler2 = () => {
    const item = {
      id: 'toode2_' + Date.now(),
      name: 'Täisksvanu pilet pärast südaööt',
      price: 15, // Hind 15 eurot
      qty: quantity2,
    };
    dispatch(addToCart(item));
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
                  onClick={addToCartHandler1}
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
                  onClick={addToCartHandler2}
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
