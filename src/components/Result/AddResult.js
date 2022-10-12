import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";

const AddResult = () => {
  return (
    <div className="bg-color ">
      <Container>
        <h1 className="fw-bold text-center text-white py-3">
          রেজাল্ট যোগ করুন
        </h1>
        <div className="row py-4">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-12">
            <Card className="course-add-card text-white">
              <Card.Body>
                <Form style={{ width: "80%", margin: "auto" }}>
                  <Form.Group className="mb-3" controlId="formBasictitle">
                    <Form.Label>রেজাল্ট ফাইল</Form.Label>
                    <Form.Control type="file" placeholder="কোর্সের নাম" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Add Result
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2"></div>
        </div>
      </Container>
    </div>
  );
};

export default AddResult;
