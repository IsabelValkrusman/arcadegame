import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice'; // Importi logout action

const Header = () => {
    const { userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch(); // Hook useDispatch

    const logoutHandler = () => {
        dispatch(logout()); // Dispatchi logout action
    };

    return (
        <header style={{ backgroundColor: "#ffeb3b" }}>
            <Navbar style={{ backgroundColor: "#f4f4f4", border: "none" }} variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">VideoGames</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <LinkContainer to='/'>
                                <Nav.Link>
                                    Esileht
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/price'>
                                <Nav.Link>
                                    Hinnad
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/food'>
                                <Nav.Link>
                                    Toitlustus
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/rules'>
                                <Nav.Link>
                                    Reeglid
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/party'>
                                <Nav.Link>
                                    Üritused
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav className='ms-auto'>
                            {userInfo ? (
                                <>
                                    <p>Sisse logitud: {userInfo.name}</p>
                                    <Button onClick={logoutHandler} variant="outline-dark">
                                        Logi välja
                                    </Button>
                                </>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link href='/login'>
                                        <FaUser /> Logi Sisse
                                    </Nav.Link>
                                </LinkContainer>
                            )}

                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <FaShoppingCart /> Korv
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
