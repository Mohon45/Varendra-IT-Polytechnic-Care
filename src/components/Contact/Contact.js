import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="my-5">
                        <h1>Get In Touch</h1>
                        <p>Fill All Section</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Control type="text" placeholder="Address" />
                            <br />

                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                placeholder="Leave a comment here"
                                style={{ height: '200px' }}
                                />
                            </FloatingLabel>
                        </Form>
                        <Button className="mt-2 px-4 fs-2 rounded fw-bold" style={{color: "White", backgroundColor: "#0BC560", border: "none"}}>Submit</Button>
                    </Col>
                    <Col className="my-5 ms-5">
                        <h1>Contact Info</h1>
                        <p style={{width: "500px"}}>We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>

                        <ul>
                            <li>1207 Salbagan, Sopura, Rajshahi</li>
                            <li>(+880)1782638193</li>
                            <li>info@varendrait.com</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Contact;