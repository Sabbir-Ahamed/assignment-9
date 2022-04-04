import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <div className="home-style">
          <div className="home-text">
            <h1 className="home-text-header">Your Next Laptop</h1>
            <h1 className="home-text-header color-green">Your Best Laptop</h1>
            <p className="home-text-paragraph">
              We provide world class laptop with amazing features. If you buy
              our laptop you can get 3 years guarantee and unlimited support
              from us. we will provide any configurational Laptop. So, Buy our
              Laptop and Introduce smart people by buying Our Laptop.
            </p>
            <button>Know More</button>
          </div>
          <div className="home-img">
            <img
              src="https://i.ibb.co/TkyGvLs/rm391-pf-s73-08-mockup.jpg"
              alt="home-img"
            />
          </div>
        </div>
    );
};

export default Home;