import React, { useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://api.example.com/data'); // Replace with your API URL
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
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p>{error}</p>}
      <div>
        <p>Data 1: {data.data1}</p>
        <p>Data 2: {data.data2}</p>
        <p>Data 3: {data.data3}</p>
      </div>
    </div>
  );
};

export default DataFetcher;
