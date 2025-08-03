import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="home">
        <div className="home-content">
          <p className="home-subtitle">Next-Gen Tennis Intelligence</p>
          <h1 className="home-title">VolleyVision</h1>
          <p className="home-description">
            Unlock the power of predictive analytics in tennis. Our AI-driven platform 
            analyzes team performance, player statistics, and match dynamics to deliver 
            precise forecasts that give you the competitive edge.
          </p>
          
          <div className="home-btn-container">
            <Link to="/predict" className="home-btn">
              Start Predicting
            </Link>
            <Link to="/about" className="home-btn secondary">
               Explore Features
            </Link>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Home;