import axios from "axios";
import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Const/Loader/Loader";
import "./Courses.css";

const CreateCourse = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    const newData = {
      title: data.title,
      description: data.description,
      image: data.image[0],
      price: data.price,
      courseDuration: data.courseDuration,
      class: data.class,
      projects: data.projects,
      instructorName: data.instructorName,
      courseCuricullam: data.courseCuricullam,
    };
    setLoading(true);
    axios
      .post("https://varendra-it.onrender.com/api/v1/vit/course", newData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Course Create SuccessFully Done!");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something Wrong! Try Again latter!");
        setLoading(false);
      });
  };

  return (
    <div className="bg-color ">
      {!loading ? (
        <Container>
          <h1 className="fw-bold text-center text-white pt-3">
            কোর্স যোগ করুন
          </h1>

          <p className="text-white text-center">
            <Link to="/course/update"> Course update</Link>
          </p>

          <div className="row py-4">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <Card className="course-add-card text-white">
                <Card.Body>
                  <Form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <Form.Group className="mb-3" controlId="formBasictitle">
                      <Form.Label>কোর্সের নাম</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("title", { required: true })}
                        placeholder="কোর্সের নাম"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictitle">
                      <Form.Label>কোর্সের ছবি</Form.Label>
                      <Form.Control
                        type="file"
                        {...register("image", { required: true })}
                        placeholder="কোর্সের ছবির লিংক"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicDescription"
                    >
                      <Form.Label>কোর্সের বর্ণনা</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("description", { required: true })}
                        placeholder="কোর্সের বর্ণনা"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicDescription"
                    >
                      <Form.Label>কোর্স ফি</Form.Label>
                      <Form.Control
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="শুধু মাত্র টাকার পরিমান যেমন- ২০০০"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicDescription"
                    >
                      <Form.Label>কোর্সের সময়কাল</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("courseDuration", { required: true })}
                        placeholder="কোর্স কত দিন চলবে"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicDescription"
                    >
                      <Form.Label>ক্লাস সংখ্যা</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("class", { required: true })}
                        placeholder="ক্লাস সংখ্যা"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicDescription"
                    >
                      <Form.Label>প্রজেক্ট সংখ্যা</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("projects", { required: true })}
                        placeholder="আনুমানিক কয়টা প্রজেক্ট করানো হবে"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicDescription"
                    >
                      <Form.Label>ইন্সট্রাক্টরের নাম</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("instructorName", { required: true })}
                        placeholder="ইন্সট্রাক্টরের নাম"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicDescription"
                    >
                      <Form.Label>কোর্স কারিকুলাম</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("courseCuricullam", { required: true })}
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CreateCourse;
