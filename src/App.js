import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Emicheck from "./components/emi-check/Emicheck";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/login"
            element={<ProtectedRoute component={<Home />} />}
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
    </>
  );
}

const ProtectedRoute = ({ component }) => {
  return localStorage.getItem("id") ? component : <Login />;
};
console.log(ProtectedRoute);
export default App;
