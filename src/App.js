import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import PhotoGallary from "./components/PhotoGallary/PhotoGallary";
import Result from "./components/Result/Result";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Notify from "./Const/Notify/Notify";
import CreateCourse from "./components/Courses/CreateCourse";
import AddResult from "./components/Result/AddResult";
import CourseDetails from "./components/Courses/CourseDetails";
import Confirm from "./components/Courses/Confirm";
import UpdateCourse from "./components/Courses/UpdateCourse";
import Edit from "./components/Courses/Edit";

function App() {
  return (
    <div className="bg-color">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/details/:id" element={<CourseDetails />} />
        <Route path="/course/confirm" element={<Confirm />} />
        <Route path="/course/create" element={<CreateCourse />} />
        <Route path="/course/edit/:id" element={<Edit />} />
        <Route path="/course/update" element={<UpdateCourse />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result/add" element={<AddResult />} />
        <Route path="/photo" element={<PhotoGallary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Notify />
    </div>
  );
}

export default App;
