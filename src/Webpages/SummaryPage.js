import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './SummaryPage.css';  // Ensure you've imported the CSS

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

function SummaryPage() {
  const [barData, setBarData] = useState({ labels: [], datasets: [] });
  const [pieData, setPieData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const generateData = () => {
      const barChartData = {
        labels: ['Dark Blue', 'Midnight Blue', 'Steel Blue', 'Slate Blue', 'Royal Blue', 'Sky Blue'],
        datasets: [{
          label: '# of Votes',
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
        labels: ['Dark Blue', 'Steel Blue', 'Slate Blue'],
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

      setBarData(barChartData);
      setPieData(pieChartData);
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
      <Link to="/signin">
        <button>Back</button>
      </Link>
    </div>
);
}

export default SummaryPage;