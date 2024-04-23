import React from "react";
import {useState, useEffect} from 'react'
import {  useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import axios from "axios";

const ProductScreen = () => {
    const [product, setProduct] = useState({});


    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProducts = async () =>{
        const{ data } = await axios.get(`http://localhost:5000/api/products/${productId}`);
        setProduct(data);
        }
        fetchProducts();
    }, [productId]);

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Tagasi
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
