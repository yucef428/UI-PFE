import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import passiveIcon from './images/passive-icon.png'; // Add your passive icon image here

const TechnicalData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchData1 = async () => {
    navigate('/general')
  };

  const fetchData2 = async () => {
    navigate('/technical')
  };

  return (
    <div className="info-container">
      <img src={passiveIcon} alt="Passive Icon" className="icon" />
      {error && <p className="error">{error}</p>}
      <div className="data-display">
      <button className="fetch-button" onClick={fetchData1} disabled={loading}>
        {loading ? 'Loading...' : 'General Information'}
      </button>
      <br></br>
      <button className="fetch-button" onClick={fetchData2} disabled={loading}>
        {loading ? 'Loading...' : 'Technical Properties'}
      </button>
      </div>
    </div>
  );
};

export default TechnicalData;
