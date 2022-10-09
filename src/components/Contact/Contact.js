import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="bg-color">
      <Container className="text-white">
        <div className="row py-5">
          <div className="col-md-6">
            <h1>Get In Touch</h1>
            <p>Fill All Section</p>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Control type="text" placeholder="Address" />
              <br />

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                />
              </FloatingLabel>
            </Form>
            <Button
              className="mt-2 px-4 fs-2 rounded fw-bold"
              style={{
                color: "White",
                backgroundColor: "#0BC560",
                border: "none",
              }}
            >
              Submit
            </Button>
          </div>
          <div className="col-md-6">
            <h1>Contact Info</h1>
            <p style={{ width: "500px" }}>
              We denounce with righteous indignation in and dislike men who are
              so beguiled and to demo realized by the charms of pleasure moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound.
            </p>
            <ul>
              <li>In front of RPI Gate, Sopura, Rajshahi</li>
              <li>+8801797336604</li>
              <li>+8801719132276</li>
              <li>varendraitltd@gmail.com</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
