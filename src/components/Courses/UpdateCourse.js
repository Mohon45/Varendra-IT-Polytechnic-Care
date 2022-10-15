import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import submitNotify from "../../Const/ConfirmationAlert/ConfirmationAlert";
import Loader from "../../Const/Loader/Loader";

const UpdateCourse = () => {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/v1/vit/all-course", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setLoading(false);
        setRows(res.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, []);

  const onDeleteHandler = (id) => {
    setSelectedId(id);
    submitNotify(onDeleteSubmit);
  };

  const onDeleteSubmit = () => {
    setLoading(true);
    axios
      .post(`http://localhost:5000/api/v1/vit/course/delete/${selectedId}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          const updateRows = [...rows];
          setLoading(false);
          setSelectedId(null);
          setRows(updateRows.filter((x) => console.log(x.id)));
          toast.success("Course SuccessFully Deleted!");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something Wrong! Try Again Letter");
      });
  };

  return (
    <div className="bg-color text-white">
      <Container>
        {!loading ? (
          <div className="py-3">
            <h1 className="text-center">Update Section</h1>
            <div>
              <Table className="text-white" bordered>
                <thead className="text-center">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Instructor Name</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {rows.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.instructorName}</td>
                      <td>{item.price}</td>
                      <td>{item.courseDuration}</td>
                      <td>
                        <div className="d-flex justify-content-around align-items-center">
                          <p>
                            <Button
                              onClick={() =>
                                navigate(`/course/edit/${item._id}`)
                              }
                            >
                              Edit
                            </Button>
                          </p>
                          <p>
                            <Button onClick={() => onDeleteHandler(item._id)}>
                              Delete
                            </Button>
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

export default UpdateCourse;
