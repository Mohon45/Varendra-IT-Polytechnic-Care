import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {img, title, desc, price, time} = props.service;
    return (
        <div>
            <Col className="card-style">
                <Card>
                    <Card.Img className="service-img" variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc.slice(0,150)}
                        </Card.Text>
                        <h4>Course Fee: {price} Taka</h4>
                        <h4>Duration: {time}</h4>
                        <Button style={{
                            backgroundColor: "#0bc560",
                            color: "white",
                            padding: "5px 20px 5px 20px",
                            border: "none",
                            fontSize: "1.5rem",
                            borderRadius: "10px"
                            }}>Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;