import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';  // Importing the 'Homepage.css' file

function HomePage() {
  return (
    <div className="homepage">

      <h1>Inventory Management System</h1>

            <div className="container">
          
          <div className="bell">
            <img src="bell.gif" alt="Notification Icon"/>
            <Link to="/notification">
        <button>Notifications Page</button>
      </Link>
          </div>

          <div className="summary">
            <img src="summary.gif" alt="Summary Icon"/>
            <Link to="/summary">
        <button>Summary Page</button>
      </Link>
          </div>

          <div className="inventory">
            <img src="inventory.gif" alt="Inventory Icon"/>
            <Link to="/inventory">
        <button>Inventory</button>
      </Link>
          </div>

          <div className="signin">
          <img src="signin.gif" alt="Signin Icon"/>
          <Link to="/signin">
        <button>Sign-in Page</button>
      </Link>
      </div>
        </div>
        <p>
              The Inventory Management System is a feature-rich, user-friendly web application that helps businesses streamline operations, 
              manage inventory, and make informed decisions. It enables easy product management, automated purchase generation,
              and real-time sales tracking, ultimately reducing costs and enhancing competitiveness.
            </p>
      </div>
  );
}

export default HomePage;