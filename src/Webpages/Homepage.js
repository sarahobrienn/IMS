import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';  // Importing the 'Homepage.css' file

function HomePage() {
  return (
    <div className="homepage">
      <h1>Inventory Management System</h1>
      <Link to="/signin">
        <button>Sign-in Page</button>
      </Link>

        <div className="container">
          <h2>
            <p>
              The Inventory Management System is a feature-rich, user-friendly web application that helps businesses streamline operations, 
              manage inventory, and make informed decisions. It enables easy product management, automated purchase generation,
              and real-time sales tracking, ultimately reducing costs and enhancing competitiveness.
            </p>
          </h2>
          <div className="bell">
            <img src="bell.gif" alt="Notification Icon"/>
          </div>
        </div>
      </div>
  );
}

export default HomePage;
