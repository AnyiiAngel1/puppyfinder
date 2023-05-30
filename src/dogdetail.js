import React from "react";
import { Link } from "react-router-dom";



const DogDetail = () => {
  return (
    <div className="container">
      <nav className="nav">
        <ul className="nav-list">
        <Link to="/">
          <li className='nav-item'>
            Home
          </li>
          </Link>
          <li nav-item>
            Blog
          </li>
          <li nav-item>
            Contact
          </li>
          <li nav-item>
            Help
          </li>
        </ul>
      </nav>
      <heading>
        <div className="main">
          <div className="section-title">
            <h1> Puppy Detail Info </h1>
            <p>
              This page shows details on puppies
            </p>
          </div>
        </div>
      </heading>
      
    </div>
  );
};



  

   <div style={{
    width: '150',
    height: '150px',
    backgroundImage: 'url(${require("./background.jpeg")})',
   }}></div>
  

export default DogDetail;
