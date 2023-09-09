import React from "react";
import Gits from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Gits} alt="GITS" />
        </div>
        <div className="content">
            <h1>Group of IT Students</h1>
        </div>
      </div>
      <div className="header">
        <h2>TECHNITUDE 2023</h2>
        <p>
        Datta Meghe College of Engineering's annual extravaganza that fuses knowledge, creativity, and passion. This event unites students from diverse disciplines to celebrate intellect and innovation. Among the many captivating events curated by our dedicated college committees, we are particularly excited to present to you the innovative events held by GITS. Join us for an extraordinary journey of knowledge, innovation, and endless inspiration at Technitude 23!
        </p>
      </div>
    </>
  );
};

export default NavBar;
