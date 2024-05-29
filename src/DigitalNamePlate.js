import React, { useState } from 'react';
import axios from 'axios';
import activeIcon from './images/active-icon.png'; // Add your active icon image here
import { useNavigate } from 'react-router-dom';

const DigitalNamePlate = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '' , data4: '', data5: '', data6: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response1 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/GeneralInformation/ManufactureName/value'); // Replace with your API URL
      const response2 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/ManufacturerProductDesignation/value'); // Replace with your API URL
      const response3 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/SerialNumber/value'); // Replace with your API URL
      const response4 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/YearOfConstruction/value'); // Replace with your API URL
      const response5 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/CountryOfOrigin/value'); // Replace with your API URL
      const response6 = await axios.get('http://localhost:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/DigitalNameplate/submodel/submodelElements/CompanyLogo/value'); // Replace with your API URL
      setData({
        data1: response1.data,
        data2: response2.data,
        data3: response3.data,
        data4: response4.data,
        data5: response5.data,
        data6: response6.data,
      });
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  const navigateToAnotherPage = () => {
    navigate('/physical')
  };

  return (
    <div className="info-container">
      <img src={activeIcon} alt="DigitalNamePlate Icon" className="icon" />
      <button className="fetch-button" onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch DigitalNamePlate Data'}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="data-display">
       <p><strong>Manufacter Name:</strong> {data.data1}</p>
        <p><strong>Manufacter Product Designation:</strong> {data.data2}</p>
        <p><strong>Serial Number:</strong> {data.data3}</p>
        <p><strong>Year of construction:</strong> {data.data4}</p>
        <p><strong>Country of origin:</strong> {data.data5}</p>
         <p><strong>Company logo:</strong></p>
        {data.data6 && <img src={data.data6} alt="Company Logo" className="company-logo" />}
      </div>
      <button className="fetch-button" onClick={navigateToAnotherPage}>Physical address</button>
    </div>
  );
};

export default DigitalNamePlate;
