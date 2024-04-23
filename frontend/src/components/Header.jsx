import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
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
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <FaUser /> Logi Sisse
                                </Nav.Link>
                            </LinkContainer>
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
