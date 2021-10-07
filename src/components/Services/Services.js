import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch()
        .then(res => res.json())
        // .then(data => console.log(data))
    }, [])
    // const {img, title, desc, price, time} = service;
    console.log(services);

    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                
                    <Col>
                    <Card>
                        <img src={services.img} alt="" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                
                </Row>
        </div>
    );
};

export default Services;