import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Card, Button, Container, Form } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import Loader from "../../../Const/Loader/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    setLoading(true);
    axios
      .post("https://varendra-it.onrender.com/api/v1/vit/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
          toast.success("Login SuccessFully Done!");
          setLoading(false);
          navigate("/");
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
              Login
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmitHandler)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter email"
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
                <Link style={{ textDecoration: "none" }} to="/register">
                  New User? Please Register
                </Link>{" "}
                <br />
                <Button variant="primary" type="submit">
                  Login
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

export default Login;
