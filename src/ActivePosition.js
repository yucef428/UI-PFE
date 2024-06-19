import React, { useState, useEffect } from 'react';
import axios from 'axios';
import activeIcon from './images/robot.png';

const JointData = () => {
  const [torqueData, setTorqueData] = useState({ data1: '', data2: '', data3: '', data4: '', data5: '', data6: '', data7: '' });
  const [positionData, setPositionData] = useState({ data1: '', data2: '', data3: '', data4: '', data5: '', data6: '', data7: '' });
  const [cartesianData, setCartesianData] = useState({ A: '', B: '', C: '', X: '', Y: '', Z: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTorqueData = async () => {
    try {
      const response1 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_torques/submodel/submodelElements/A1/value');
      const response2 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_torques/submodel/submodelElements/A2/value');
      const response3 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_torques/submodel/submodelElements/A3/value');
      const response4 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_torques/submodel/submodelElements/A4/value');
      const response5 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_torques/submodel/submodelElements/A5/value');
      const response6 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_torques/submodel/submodelElements/A6/value');
      const response7 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_torques/submodel/submodelElements/A7/value');
      setTorqueData({
        data1: response1.data,
        data2: response2.data,
        data3: response3.data,
        data4: response4.data,
        data5: response5.data,
        data6: response6.data,
        data7: response7.data,
      });
    } catch (err) {
      setError('Error fetching torque data');
    }
  };

  const fetchPositionData = async () => {
    try {
      const response1 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A1/value');
      const response2 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A2/value');
      const response3 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A3/value');
      const response4 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A4/value');
      const response5 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A5/value');
      const response6 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A6/value');
      const response7 = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/joint_position/submodel/submodelElements/A7/value');
      setPositionData({
        data1: response1.data,
        data2: response2.data,
        data3: response3.data,
        data4: response4.data,
        data5: response5.data,
        data6: response6.data,
        data7: response7.data,
      });
    } catch (err) {
      setError('Error fetching position data');
    }
  };

  const fetchCartesianData = async () => {
    try {
      const responseA = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/Positions_Cartesiennes/submodel/submodelElements/A/value');
      const responseB = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/Positions_Cartesiennes/submodel/submodelElements/B/value');
      const responseC = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/Positions_Cartesiennes/submodel/submodelElements/C/value');
      const responseX = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/Positions_Cartesiennes/submodel/submodelElements/X/value');
      const responseY = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/Positions_Cartesiennes/submodel/submodelElements/Y/value');
      const responseZ = await axios.get('http://192.168.1.37:8081/aasServer/shells/AAS_LBR_iiwa_7_R800/aas/submodels/Positions_Cartesiennes/submodel/submodelElements/Z/value');
      setCartesianData({
        A: responseA.data,
        B: responseB.data,
        C: responseC.data,
        X: responseX.data,
        Y: responseY.data,
        Z: responseZ.data,
      });
    } catch (err) {
      setError('Error fetching cartesian position data');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError('');
    await Promise.all([fetchTorqueData(), fetchPositionData(), fetchCartesianData()]);
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
     <div className="postition-container">
     <div className="data-column">
    <h3>&emsp; &emsp;  Joint Positions  &emsp; &emsp;         </h3>
    <ul>
      <li><strong>A1:</strong> {positionData.data1}</li>
      <li><strong>A2:</strong> {positionData.data2}</li>
      <li><strong>A3:</strong> {positionData.data3}</li>
      <li><strong>A4:</strong> {positionData.data4}</li>
      <li><strong>A5:</strong> {positionData.data5}</li>
      <li><strong>A6:</strong> {positionData.data6}</li>
      <li><strong>A7:</strong> {positionData.data7}</li>
    </ul>
  </div>
  
  
  
  <div className="data-column">
    <h3>     &emsp; &emsp;  Joint Torques       &emsp; &emsp;     </h3>
    <ul>
      <li><strong>A1:</strong> {torqueData.data1}</li>
      <li><strong>A2:</strong> {torqueData.data2}</li>
      <li><strong>A3:</strong> {torqueData.data3}</li>
      <li><strong>A4:</strong> {torqueData.data4}</li>
      <li><strong>A5:</strong> {torqueData.data5}</li>
      <li><strong>A6:</strong> {torqueData.data6}</li>
      <li><strong>A7:</strong> {torqueData.data7}</li>
    </ul>
  </div>
  
  <div className="data-column">
    <h3> &emsp; &emsp;  Positions Cartésiennes &emsp; &emsp;  </h3>
    <ul>
      <li><strong>A:</strong> {cartesianData.A}</li>
      <li><strong>B:</strong> {cartesianData.B}</li>
      <li><strong>C:</strong> {cartesianData.C}</li>
      <li><strong>X:</strong> {cartesianData.X}</li>
      <li><strong>Y:</strong> {cartesianData.Y}</li>
      <li><strong>Z:</strong> {cartesianData.Z}</li>
    </ul>
  </div>
</div>
</div>
    </div>
  );
};

export default JointData;
