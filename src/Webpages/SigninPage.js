import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SigninPage.css';

function SigninPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signin-container">
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

      <div className="login-box">
        <input 
          type="text" 
          placeholder="Username" 
          className="input-field" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input-field" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <button className="submit-button">Login</button>
      </div>
    </div>
  );
}

export default SigninPage;
