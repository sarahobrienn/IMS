import React from 'react';
import { Link } from 'react-router-dom';

function SigninPage() {
  return (
    <div>
      <h1>Welcome to the Sign-in Page</h1>
      <Link to="/notification">
        <button>Notifications</button>
      </Link>
      <Link to="/inventory">
        <button>Inventory</button>
      </Link>
      <Link to="/summary">
        <button>Summary</button>
      </Link>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default SigninPage;

