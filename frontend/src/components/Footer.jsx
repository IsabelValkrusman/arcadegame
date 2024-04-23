import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={6} className='text-center text-md-left py-3'>
            <p>Estonia Arcades &copy; {currentYear}</p>
          </Col>
          <Col xs={12} md={6} className='text-center text-md-right py-3'>
            <p>Kontakt: retroarcade@gmail.com | Telefon: +123456789</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
