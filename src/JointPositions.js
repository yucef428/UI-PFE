import React, { useState, useEffect } from 'react';
import axios from 'axios';
import activeIcon from './images/robot.png';

const JointPositions = () => {
  const [data, setData] = useState({ data1: '', data2: '', data3: '' , data4: '', data5: '', data6: '', data7:'' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response1 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A1/value');
      const response2 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A2/value');
      const response3 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A3/value');
      const response4 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A4/value');
      const response5 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A5/value');
      const response6 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A6/value');
      const response7 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A7/value');
      setData({
        data1: response1.data,
        data2: response2.data,
        data3: response3.data,
        data4: response4.data,
        data5: response5.data,
        data6: response6.data,
        data7: response7.data,
      });
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, 2000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="info-container">
      <img src={activeIcon} alt="DigitalNamePlate Icon" className="icon" />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="data-display">
        <p><strong>A1:</strong> {data.data1} </p>
        <p><strong>A2:</strong> {data.data2}</p>
        <p><strong>A3:</strong> {data.data3}</p>
        <p><strong>A4:</strong> {data.data4}</p>
        <p><strong>A5:</strong> {data.data5}</p>
        <p><strong>A6:</strong> {data.data6}</p>
        <p><strong>A7:</strong> {data.data7}</p>
      </div>
    </div>
  );
};

export default JointPositions;
