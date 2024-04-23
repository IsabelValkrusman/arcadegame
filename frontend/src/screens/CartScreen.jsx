import React, { useContext } from 'react';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import { CartContext } from '../CartContext'; // Oluline on importida CartContext

const CartScreen = () => {
    const { cartState, removeFromCart, updateCartItem } = useContext(CartContext); // Hangime oleku ja vajalikud funktsioonid kontekstist
    const { cartItems } = cartState; // Hangime ostukorvi esemed olekust

    const removeFromCartHandler = (id) => {
        removeFromCart(id); // Kutsu funktsiooni, et eemaldada toode ostukorvist
    };

    const updateCartHandler = (id, qty) => {
        updateCartItem(id, qty); // Kutsu funktsiooni, et värskendada toote kogust ostukorvis
    };

    const checkoutHandler = () => {
        // Kui soovite kassasse minna, saate siin juhtida kasutaja vastavale lehele või teha vajalikud toimingud
        console.log('Kassasse minek');
    };

    return (
        <Row>
            <Col md={8}>
                <h1>Ostukorv</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Sinu ostukorv on tühi <Link to='/'>Mine tagasi</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                   
                                    <Col md={2}>{item.price}€</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as='input' // Muudame vormielemendi sisendiks
                                            type='number' // Tüüp on number, et saaks kasutaja sisestada koguse
                                            min={1} // Miinimumkogus on 1
                                            value={item.qty}
                                            onChange={(e) => updateCartHandler(item.id, parseInt(e.target.value))}
                                        />
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() => removeFromCartHandler(item.id)}
                                        >
                                            <FaTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Kokku ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) toodet</h2>
                            {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}€
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block'
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Mine kassasse
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
