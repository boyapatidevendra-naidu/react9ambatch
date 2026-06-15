import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <a href="./HomePage.jsx">Home</a>
      <a href="./Profile.jsx">Profile</a>
      <a href="./Contact.jsx">Contact</a> */}
      <Link to="/home">Home </Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Navbar;
