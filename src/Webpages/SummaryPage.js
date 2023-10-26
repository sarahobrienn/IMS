import React from 'react';
import { Link } from 'react-router-dom';

function SummaryPage() {
  return (
    <div>
      <h1>Welcome to the Summary Page</h1>
      <Link to="/signin">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default SummaryPage;

