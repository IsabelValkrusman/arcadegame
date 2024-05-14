import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const PartyScreen = () => {
    return (
        
        <div className="container text-center">

            
            <Row className="justify-content-center">
            <Col md={6}>
                    <img src="/images/pic30.jpg" alt="Party Image" className="party-image" />
                </Col>
                <Col md={6}>
                    <div className="info-box" style={{ backgroundColor: "#000", fontFamily: 'shrift1', padding: "20px", borderRadius: "10px", color: "#fff" }}>
                        <h3>Peod ja Sündmused</h3>
                        <p>
                         Siia tulevad üritused.
                        </p>
                        <p>
                            Võtke meiega ühendust ja korraldame koos teie unistuste peo!
                        </p>
                    </div>
                </Col>
               
            </Row>
            <Row className="justify-content-center">
            <Col md={6}>
                    <img src="/images/pic17.jpg" alt="Party Image" className="party-image" />
                </Col>
                <Col md={6}>
                    <div className="info-box" style={{ backgroundColor: "#000", fontFamily: 'shrift1', padding: "20px", borderRadius: "10px", color: "#fff" }}>
                        <h3>Peod ja Sündmused</h3>
                        <p>
                           Siia tulevad üritused.
                        </p>
                        <p>
                            Võtke meiega ühendust ja korraldame koos teie unistuste peo!
                        </p>
                    </div>
                </Col>
               
            </Row>
            <Row className="justify-content-center">
            <Col md={6}>
                    <img src="/images/pic18.jpg" alt="Party Image" className="party-image" />
                </Col>
                <Col md={6}>
                    <div className="info-box" style={{ backgroundColor: "#000", fontFamily: 'shrift1', padding: "20px", borderRadius: "10px", color: "#fff" }}>
                        <h3>Peod ja Sündmused</h3>
                        <p>
                          Siia tulevad üritused.
                        </p>
                        <p>
                            Võtke meiega ühendust ja korraldame koos teie unistuste peo!
                        </p>
                    </div>
                </Col>
               
            </Row>
        </div>
    );
};

export default PartyScreen;
