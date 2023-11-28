import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Line, Pie } from 'react-chartjs-2';  // Correctly import Pie here
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './SummaryPage.css';

Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

function SummaryPage() {
  const [barData, setBarData] = useState({ labels: [], datasets: [] });
  const [pieData, setPieData] = useState({ labels: [], datasets: [] });
  const [lineData, setLineData] = useState({ labels: [], datasets: [] }); // New state for line data

  useEffect(() => {
    const generateData = () => {
      const barChartData = {
        labels: ['White', 'Black', 'Grey', 'Blue', 'Red', 'Orange'],
        datasets: [{
          label: 'Color Options',
          data: [12, 19, 3, 5, 2, 3].map(() => Math.floor(Math.random() * 25)),
          backgroundColor: [
            'rgba(25, 25, 112, 0.8)',    // Dark Blue
            'rgba(25, 25, 112, 0.7)',    // Midnight Blue
            'rgba(70, 130, 180, 0.8)',   // Steel Blue
            'rgba(106, 90, 205, 0.8)',   // Slate Blue
            'rgba(65, 105, 225, 0.8)',   // Royal Blue
            'rgba(135, 206, 235, 0.8)'   // Sky Blue
          ],
          borderColor: [
            'rgba(25, 25, 112, 1)',
            'rgba(25, 25, 112, 1)',
            'rgba(70, 130, 180, 1)',
            'rgba(106, 90, 205, 1)',
            'rgba(65, 105, 225, 1)',
            'rgba(135, 206, 235, 1)'
          ],
          borderWidth: 1
        }]
      };

      const pieChartData = {
        labels: ['Clothing', 'Shoes', 'Accessories'],
        datasets: [{
          data: [12, 19, 3].map(() => Math.floor(Math.random() * 25)),
          backgroundColor: [
            'rgba(25, 25, 112, 0.8)',
            'rgba(70, 130, 180, 0.8)',
            'rgba(106, 90, 205, 0.8)'
          ],
          borderColor: [
            'rgba(25, 25, 112, 1)',
            'rgba(70, 130, 180, 1)',
            'rgba(106, 90, 205, 1)'
          ],
          borderWidth: 1
        }]
      };

      // New Data for Stock Availability (Line Chart)
      const stockLineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'In Stock',
            data: [12, 19, 3, 5, 2, 3, 1, 3, 4, 8, 10, 13].map(() => Math.floor(Math.random() * 100)),
            borderColor: 'rgba(70, 130, 180, 0.8)',
            backgroundColor: 'rgba(106, 90, 205, 0.8)',
          },
          {
            label: 'Out of Stock',
            data: [7, 11, 5, 8, 3, 7, 11, 10, 9, 1, 9, 2, 4].map(() => Math.floor(Math.random() * 100)),
            borderColor: 'rgba(25, 25, 112, 0.8)',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          }
        ]
      };

      setBarData(barChartData);
      setPieData(pieChartData);
      setLineData(stockLineChartData); // Set the new line data
    };

    generateData();

    const interval = setInterval(generateData, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="summary-page">
      <h1>Welcome to the Summary Page</h1>
      <div className="chart-container">
        {barData.labels.length > 0 && <Bar data={barData} options={{ responsive: true }} />}
      </div>
      <div className="chart-container">
        {pieData.labels.length > 0 && <Pie data={pieData} options={{ responsive: true }} />}
      </div>
      <div className="chart-container">
        {lineData.labels.length > 0 && <Line data={lineData} options={{ responsive: true }} />}
      </div>
      <Link to="/signin">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default SummaryPage;
