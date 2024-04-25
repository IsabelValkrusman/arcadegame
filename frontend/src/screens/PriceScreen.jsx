import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'; // Muudetud siin
import { addToCart } from '../slices/cartSlice'; // Muudetud siin

const PriceScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Muudetud siin

  // Esimese toote koguse seotud seisund ja funktsioon
  const [quantity1, setQuantity1] = useState(1);
  const handleQuantityChange1 = (e) => {
    setQuantity1(e.target.value);
  };

  // Teise toote koguse seotud seisund ja funktsioon
  const [quantity2, setQuantity2] = useState(1);
  const handleQuantityChange2 = (e) => {
    setQuantity2(e.target.value);
  };

  const addToCartHandler1 = () => {
    const item = {
      id: 'toode1_' + Date.now(), // Unikaalne ID esimesele tootele
      name: 'Toode1', // Muuda toote nimi vastavalt tegelikule tootele
      price: 10,
      qty: parseInt(quantity1),
    };
    dispatch(addToCart(item)); // Muudetud siin
    navigate('/cart');
  };

  const addToCartHandler2 = () => {
    const item = {
      id: 'toode2_' + Date.now(), // Unikaalne ID teisele tootele
      name: 'Toode2', // Muuda toote nimi vastavalt tegelikule tootele
      price: 15,
      qty: parseInt(quantity2),
    };
    dispatch(addToCart(item)); // Muudetud siin
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
