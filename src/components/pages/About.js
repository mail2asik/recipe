import React from 'react';

import aboutImg from '../../assets/images/about.jpg';

const About = () => {
  return (
    <>
      <h1>About</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={aboutImg} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-6">
          <p className="lead">
          Welcome to our culinary corner! We're passionate food enthusiasts dedicated to bringing you the best home-cooked recipes. Our mission is to inspire and empower everyone to create delicious meals, regardless of their skill level. From traditional favorites to modern twists, our curated collection has something for every taste. Join us on this flavorful journey, share your creations, and be part of our vibrant community. Let's make every meal an experience to remember! 🍲🍴🥗
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
