import React from 'react';
import { Link } from 'react-router-dom';

function InventoryPage() {
  return (
    <div>
      <h1>Welcome to the Inventory Page</h1>
      <Link to="/summary">
        <button>Summary Page</button>
      </Link>
      <Link to="/signin">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default InventoryPage;

