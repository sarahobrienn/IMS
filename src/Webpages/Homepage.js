import React from 'react';
import { Link } from 'react-router-dom';

<link rel="HomepageCSS" href="styles.css"/>

function HomePage() {
  return (
    <div class = "Homepage">
      <h1>Inventory Management System</h1>
      <Link to="/signin">
        <button>Sign-in Page</button>
      </Link>

      <div class = "Container">
      <h2>
        <p>
        The Inventory Management System is a feature-rich, user-friendly web application that helps businesses streamline operations, 
        manage inventory, and make informed decisions. It enables easy product management, automated purchase generation,
        and real-time sales tracking, ultimately reducing costs and enhancing competitiveness.</p>
      </h2>
        <div class = "bell"><img src="bell.gif" alt="Notification Icon"/>
    </div>
    <div class = "pic">
    </div>
    <div class = "pic">
    </div>
    <div class = "pic">
    </div>

</div>
</div>
    );
}
