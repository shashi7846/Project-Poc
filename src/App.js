import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Emicheck from "./components/emi-check/Emicheck";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Howtoapply from "./components/Howtoapply/Howtoapply";
import Contactus from "./components/ContactUs/Contactus";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container min-vh-100 my-5 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/howtoapply" element={<Howtoapply />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/login"
            element={<ProtectedRoute component={<Home />} />}
          />
          <Route
            path="/contactus"
            element={<ProtectedRoute component={<Contactus />} />}
          />
          <Route
            path="/emicheck"
            element={<ProtectedRoute component={<Emicheck />} />}
          />
          <Route
            path="/Propertydetails"
            element={<ProtectedRoute component={<PropertyDetails />} />}
          />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

const ProtectedRoute = ({ component }) => {
  return localStorage.getItem("id") ? component : <Login />;
};

export default App;
