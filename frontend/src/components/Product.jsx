import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' style={{ backgroundColor: "#000", fontFamily: 'shrift1', padding: "20px", borderRadius: "10px", color: "#fff" }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.description}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;