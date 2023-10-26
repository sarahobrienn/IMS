import React from 'react';
import { Link } from 'react-router-dom';

function NotificationPage() {
  return (
    <div>
      <h1>Welcome to the Notification Page</h1>
      <Link to="/signin">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default NotificationPage;

