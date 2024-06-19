import React, { useState } from 'react';
import axios from 'axios';
import activeIcon from './images/passive-icon.jpg'; // Add your active icon image here

const GeneralInformation = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '', data4: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response1 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/GeneralInformation/ManufactureName/value'); // Replace with your API URL
      const response2 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/GeneralInformation/ManufactureOrderCode/value'); // Replace with your API URL
      const response3 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/GeneralInformation/ProductImage01/value'); // Replace with your API URL
      const response4 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/GeneralInformation/Company_logo/value'); // Replace with your API URL
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
        {loading ? 'Loading...' : 'Fetch GeneralInformation Data'}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="data-display">
        <p><strong>Manufacture Name:</strong> {data.data1}</p>
        <p><strong>Manufacture Order Code:</strong> {data.data2}</p>
        <p><strong>Product Image:</strong></p>
        {data.data3 && <img src={data.data3} alt="Product" className="product-image" />}
        <p><strong>Company Logo:</strong></p>
        {data.data4 && <img src={data.data4} alt="Company Logo" className="company-logo" />}
      </div>
    </div>
  );
};

export default GeneralInformation;
