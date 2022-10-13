import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import "./Courses.css";

const CreateCourse = () => {
  return (
    <div className="bg-color ">
      <Container>
        <h1 className="fw-bold text-center text-white py-3">কোর্স যোগ করুন</h1>
        <div className="row py-4">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-12">
            <Card className="course-add-card text-white">
              <Card.Body>
                <Form style={{ width: "80%", margin: "auto" }}>
                  <Form.Group className="mb-3" controlId="formBasictitle">
                    <Form.Label>কোর্সের নাম</Form.Label>
                    <Form.Control type="text" placeholder="কোর্সের নাম" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictitle">
                    <Form.Label>কোর্সের ছবি</Form.Label>
                    <Form.Control type="text" placeholder="কোর্সের ছবির লিংক" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>কোর্সের বর্ণনা</Form.Label>
                    <Form.Control type="text" placeholder="কোর্সের বর্ণনা" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>কোর্স ফি</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="শুধু মাত্র টাকার পরিমান যেমন- ২০০০"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>কোর্সের সময়কাল</Form.Label>
                    <Form.Control type="text" placeholder="কোর্স কত দিন চলবে" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>ক্লাস সংখ্যা</Form.Label>
                    <Form.Control type="text" placeholder="ক্লাস সংখ্যা" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>প্রজেক্ট সংখ্যা</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="আনুমানিক কয়টা প্রজেক্ট করানো হবে"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>ইন্সট্রাক্টরের নাম</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ইন্সট্রাক্টরের নাম"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>কোর্স কারিকুলাম</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="কোর্সে কি কি শিখানো হবে?"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Add Course
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

export default CreateCourse;
