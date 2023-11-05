import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotificationPage.css';

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const generateNotification = () => {
      const titles = ['Summary Changed', 'Inventory Changed', 'Sales Increased'];
      const messages = [
        'The Summary page has been updated.',
        'Item XYZ has been added to the inventory.',
        'Sales have increased by ..% this month.',
        'Item XYZ has been removed in the inventory',
        'Sales have decreased by ..% this week'
      ];

      const index = Math.floor(Math.random() * titles.length);

      return {
        id: notifications.length + 1,
        title: titles[index],
        message: messages[index],
        timestamp: new Date().toLocaleString()
      };
    };

    const interval = setInterval(() => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        generateNotification()
      ]);
    }, 200000); // 2 minutes interval

    return () => clearInterval(interval);
  }, [notifications.length]); 

  return (
    <div className="notification-page">
      <h1>Welcome to the Notification Page</h1>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <h2>{notification.title}</h2>
            <p>{notification.message}</p>
            <span className="timestamp">{notification.timestamp}</span>
          </div>
        ))}
      </div>
      <Link to="/signin">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default NotificationPage;
