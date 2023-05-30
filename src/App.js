import React from "react";
import puppy1 from "./german sherpard.jpeg";
import puppy2 from "./poodle.jpeg";
import puppy3 from "./serbian husky.jpeg";
import puppy4 from "./bulldog.jpeg";
import puppy5 from "./chichuahua.jpeg";
import puppy6 from "./golden retiever.jpeg";
import puppy7 from "./border collies.jpeg";
import { Link } from "react-router-dom";





const dogs = [
  { name: 'Max', image: '' },
  { name: 'Bella', image: 'path/to/bella.jpg' },
  { name: 'Charlie', image: 'path/to/charlie.jpg' },
];


const PuppyFinder = () => {
  return (
    <div className="container">
      <nav className="nav">
        <ul className="nav-list">
          
          <li className='nav-item'>
            Home
          </li>
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
            <h1> Our Puppy Finder </h1>
            <p>
              I am thrilled to introduce you to our brand new puppy finder app,
              designed to bring joy and companionship into your life. Here
              puppies get to find their brothers and sister.
            </p>
          </div>
        </div>
      </heading>
      <div className="section">
      {/* <div className="">
      {dogs.map((dog, index) => (
        <DogCard key={index} imageUrl={dog.image} dogName={dog.name} />
      ))}
    </div> */}
        {/* <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
         */}
         
        <div className="menu-column">
          <div className="single-menu">
          <Link to="/DogDetail">
            <img src={puppy1} alt="a picture of German Shepherd" />
            </Link>
            <div className="menu-content">
            
              <h4>
                German Shepherd  
              </h4>
            </div>
          </div>
          <div className="single-menu">
            <img src={puppy2} alt="a picture of poodle" />
            <div className="menu-content">
              <h4>
                poodle 
              </h4>
            </div>
          </div>
          <div className="single-menu">
            <img src={puppy3} alt="a picture of a Siberian Husky" />
            <div className="menu-content">
              <h4>
                Siberian Husky 
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="menu-column">
            <div className="single-menu">
              <img src={puppy4} alt="a picture of a Bulldog" />
              <div className="menu-content">
                <h4>
                  Bulldog 
                </h4>
              </div>
            </div>
            <div className="single-menu">
              <img src={puppy5} alt="a picture of Chihuahua" />
              <div className="menu-content">
                <h4>
                  Chihuahua 
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="menu-column">
            <div className="single-menu">
              <img src={puppy6} alt="a picture of a Golden Retriever" />
              <div className="menu-content">
                <h4>
                  Golden Retriever 
                </h4>
              </div>
            </div>
            <div className="single-menu">
              <img src={puppy7} alt="a picture of a Border Collie" />
              <div className="menu-content">
                <h4>
                  Border Collie 
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



  

   <div style={{
    width: '150',
    height: '150px',
    backgroundImage: 'url(${require("./background.jpeg")})',
   }}></div>
  

export default PuppyFinder;
