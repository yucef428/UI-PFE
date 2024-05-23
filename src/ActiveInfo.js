import React, { useState } from 'react';
import axios from 'axios';
import activeIcon from './images/active-icon.png'; // Add your active icon image here

const ActiveInfo = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://api.example.com/active'); // Replace with your API URL
      setData({
        data1: response.data.data1,
        data2: response.data.data2,
        data3: response.data.data3
      });
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  return (
    <div className="info-container">
      <img src={activeIcon} alt="Active Icon" className="icon" />
      <button className="fetch-button" onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Active Data'}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="data-display">
        <p><strong>Data 1:</strong> {data.data1}</p>
        <p><strong>Data 2:</strong> {data.data2}</p>
        <p><strong>Data 3:</strong> {data.data3}</p>
      </div>
    </div>
  );
};

export default ActiveInfo;
