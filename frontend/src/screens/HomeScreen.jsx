import { useEffect, useState } from 'react';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios'
import '../assets/styles/shrift/shrift1.ttf'; // Impordime stiilifaili




import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=> {
        const fetchProducts = async () => {
            const {data} = await axios.get('http://localhost:5000/api/products');
            setProducts(data)
        }
        fetchProducts();
    }, []);
    

    return (
        <>
            <div className="container text-center">
                <Row className="justify-content-center">
                    <Col md={12}>
                        <img src="/images/pic21.jpg" alt="Header Image" className="header-image" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                    <div className="info-box" style={{ backgroundColor: "#000", fontFamily: 'shrif1', padding: "20px", borderRadius: "10px", color: "#fff" }}>
                            <h3>Estonia Arcade</h3>
                            <p>Estonia Arcade on juhtiv mängukeskuste ja meelelahutusasutuste ettevõte Eestis, pakkudes laia valikut lõbusaid ja interaktiivseid mänge ning meelelahutust kogu perele. Firma eesmärk on luua unustamatuid kogemusi oma klientidele, pakkudes kvaliteetset teenindust ja mänguelamusi. Estonia Arcade'i mängukeskused on varustatud kaasaegsete mänguautomaatide, videomängude ja atraktsioonidega, mis sobivad igas vanuses külastajatele. Lisaks on ettevõte pühendunud turvalisusele ja keskkonnasõbralikkusele, tagades meelelahutuse ohutuse ja jätkusuutlikkuse. Meie mängukeskustes on rohkem kui 150 mänguautomaati, mis pakuvad põnevaid kogemusi kõigile külastajatele.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                    <div className="info-box" style={{ backgroundColor: "#000", fontFamily: 'shrif1', padding: "20px", borderRadius: "10px", color: "#fff" }}>
                            <h3></h3>
                            <p>Sega Rally Daytona 2 , Chase H . Q . Arcade ,  Atari Hydra Arcade 1990 , Old FRG Kiddie Rides</p>
                            <p>Old USSR Kiddie ride Horse , USSR Arcade Sniper , Bally Games Show pinballs , Beast Busters 1</p>
                            <p>UFO Catcher DX 2 , Lucky & Wild , Pierrot by FDEK Fuji Denshi  Kogyo , Godzilla Wars Jr . Namco </p>
                        </div>
                    </Col>
                </Row>
                
            </div>

            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={4} lg={4} xl={4}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
