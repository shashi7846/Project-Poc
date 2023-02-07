import React from 'react';
import { Link, Navigate} from "react-router-dom";
import { BiLogIn } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fa';
const Navbar = () => {
  function handleClick() {
    Navigate("/login");
  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
     <a className="navbar-brand text-light" href="/">
    <img src="favicon.ico" width="30" height="30" className="d-inline-block align-top" alt=""/>
    -Loan
  </a>
  {/* <Link className="nav-item nav-link active text-light" to="/">Home</Link> */}
  <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/login"><i className="bi bi-box-arrow-in-right"></i>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/register">Register</Link>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
