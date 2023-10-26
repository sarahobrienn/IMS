import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link to="/signin">
        <button>Sign-in Page</button>
      </Link>
    </div>
  );
}

export default HomePage;

