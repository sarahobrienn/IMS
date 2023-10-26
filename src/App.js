import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import SummaryPage from './Webpages/SummaryPage';
import SigninPage from './Webpages/SigninPage';
import NotificationPage from './Webpages/NotificationPage';
import InventoryPage from './Webpages/InventoryPage';


function App() {
  return (
    <Router>
      <div>
        {/* Navigation or header can go here */}
        
        {/* Define your routes */}
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/notification" element={<NotificationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// home
// sign in
// inventory 
// backend database
// notification 
// summary