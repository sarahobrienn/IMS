import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotificationPage.css';

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const generateNotification = () => {
      const titles = ['Summary Changed', 'Inventory Changed', 'Sales Increased'];
      const items = ['Item A', 'Item B', 'Item C', 'Item D', 'Item E', /* ... add more items */];
      const messages = [
        `The Summary page has been updated.`,
        `${items[Math.floor(Math.random() * items.length)]} has been added to the inventory.`,
        `Sales have increased by ${Math.floor(Math.random() * 20)}% this month.`,
        `Item ${items[Math.floor(Math.random() * items.length)]} has been removed from the inventory.`,
        `Sales have decreased by ${Math.floor(Math.random() * 20)}% this week.`
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
        generateNotification(),
        ...prevNotifications
      ]);
    }, 2000); // 2 minutes interval

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
