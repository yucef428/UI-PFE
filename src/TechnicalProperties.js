import React, { useState } from 'react';
import axios from 'axios';
import activeIcon from './images/passive-icon.jpg'; 

const TechnicalProperties = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '' , data4: '', data5: '', data6: '',  data7: '', data8: '',  data9: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response1 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/number_of_axes/value'); // Replace with your API URL
      const response2 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/number_of_controlled_axes/value'); // Replace with your API URL
      const response3 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/volume_of_working_envelope/value'); // Replace with your API URL
      const response4 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/Weight/value'); // Replace with your API URL
      const response5 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/MaximumPayload/value'); // Replace with your API URL
      const response6 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/rated_payload/value'); // Replace with your API URL
      const response7 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/maximum_reach/value'); // Replace with your API URL
      const response8 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/protection_rating/value'); // Replace with your API URL
      const response9 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/TechnicalData/submodel/submodelElements/TechnicalPropreties/Protection_rating_in_Line_wrist/value'); // Replace with your API URL
      setData({
        data1: response1.data,
        data2: response2.data,
        data3: response3.data,
        data4: response4.data,
        data5: response5.data,
        data6: response6.data,
        data7: response7.data,
        data8: response8.data,
        data9: response9.data,
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
        {loading ? 'Loading...' : 'Fetch TechnicalProperties Data'}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="data-display">
        <p><strong>Number of axes:</strong> {data.data1}</p>
        <p><strong>Number of controlled axes:</strong> {data.data2}</p>
         <p><strong>Volume of working envelope:</strong>{data.data3}</p>
         <p><strong>Weight:</strong>{data.data4}</p>
         <p><strong>Maximum Payload:</strong>{data.data5}</p>
         <p><strong>rated payload: </strong>{data.data6}</p>
         <p><strong>maximum reach: </strong>{data.data7}</p>
         <p><strong>protection rating: </strong>{data.data8}</p>
         <p><strong>Protection rating in Line wrist: </strong>{data.data8}</p>
      </div>
    </div>
  );
};

export default TechnicalProperties;
