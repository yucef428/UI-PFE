import React, { useState } from 'react';
import axios from 'axios';
import activeIcon from './images/active-icon.png'; // Add your active icon image here

const PhysicalAddress = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '' , data4: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response1 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/physicalAdress01/CountryCode/value'); // Replace with your API URL
      const response2 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/physicalAdress01/Street/value'); // Replace with your API URL
      const response3 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/physicalAdress01/Postalcode/value'); // Replace with your API URL
      const response4 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/physicalAdress01/City/value'); // Replace with your API URL
      setData({
        data1: response1.data,
        data2: response2.data,
        data3: response3.data,
        data4: response4.data,
      });
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };


  return (
    <div className="info-container">
      <img src={activeIcon} alt="DigitalNamePlate Icon" className="icon" />
      <button className="fetch-button" onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Physical Adress Data'}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="data-display">
        <p><strong>Country Code:</strong> {data.data1}</p>
        <p><strong>Street:</strong> {data.data2}</p>
         <p><strong>Postal Code:</strong>{data.data3}</p>
         <p><strong>City:</strong>{data.data4}</p>
      </div>
    </div>
  );
};

export default PhysicalAddress;
