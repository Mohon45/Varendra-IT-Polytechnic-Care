import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../Const/Loader/Loader";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = (data) => {
    console.log(data);
    setLoading(true);

    axios
      .post("https://varendra-it.onrender.com/api/v1/vit/signup", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Registration SuccessFully Done!");
          setLoading(false);
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something Wrong! Try Again latter!");
        setLoading(false);
      });
  };
  return (
    <div className="bg-color text-white">
      {!loading ? (
        <Container className="py-5">
          <Card className="auth-card-custom">
            <Card.Title
              className="text-center mt-4"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Register
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmitHandler)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter Your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Text className="text-muted">
                    Password must be small letter, capital letter, number and
                    symbol included!
                  </Form.Text>
                </Form.Group>
                <Link style={{ textDecoration: "none" }} to="/login">
                  Already Registered? Please Login
                </Link>{" "}
                <br />
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Register;
