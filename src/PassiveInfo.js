import React, { useState } from 'react';
import axios from 'axios';
import passiveIcon from './images/passive-icon.png'; // Add your passive icon image here

const PassiveInfo = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      console.log('chmisi')
      const response = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/ManufacturerProductDesignation/value'); // Replace with your API URL
      setData({
        data1: response.data,
        
      });
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  return (
    <div className="info-container">
      <img src={passiveIcon} alt="Passive Icon" className="icon" />
      <button className="fetch-button" onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Passive Data'}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="data-display">
       <p><strong>manu facturie Name:</strong> {data.data1}</p>
        <p><strong>Data 2:</strong> {data.data2}</p>
        <p><strong>Data 3:</strong> {data.data3}</p>
      </div>
    </div>
  );
};

export default PassiveInfo;
