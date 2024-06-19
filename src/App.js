import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DigitalNamePlate from './DigitalNamePlate';
import TechnicalData from './TechnicalData';
import homeIcon from './images/home-icon.png';
import activeIcon from './images/active-icon.png';
import passiveIcon from './images/passive-icon.jpg';
import GeneralInformation from './GeneralInformation';
import TechnicalProperties from './TechnicalProperties';
import PhysicalAddress from './PhysicalAddress';
import ActivePosition from './ActivePosition';
import JointPositions from './JointPositions';
import JointTorques from './JointTorques';
import cdtalogo from './images/cdtalogo.png';
import usthb from './images/usthb.png';
import robot from './images/robot.png';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-logos">
            <img src={usthb} alt="USTHB Logo" className="App-logo" />
             <h1>LBR KUKA</h1>
            <img src={cdtalogo} alt="CDTA Logo" className="App-logo" />
           </div>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img src={homeIcon} alt="Home" className="nav-icon" /> home
                </Link>
              </li>
              <li>
                <Link to="/digital">
                  <img src={activeIcon} alt="Active Info" className="nav-icon" /> Digital Name Plate
                </Link>
              </li>
              <li>
                <Link to="/datatech">
                  <img src={passiveIcon} alt="Passive Info" className="nav-icon" /> Technical data
                </Link>
              </li>
              <li>
                <Link to="/activeposition">
                  <img src={robot} alt="robot" className="nav-icon" /> live robot position
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/digital" element={<DigitalNamePlate />} />
            <Route path="/datatech" element={<TechnicalData />} />
            <Route path="/general" element={<GeneralInformation />} />
            <Route path="/technical" element={<TechnicalProperties />} />
            <Route path="/physical" element={<PhysicalAddress />} />
            <Route path="/activeposition" element={<ActivePosition />} />
            <Route path="/JointPositions" element={<JointPositions />} />
            <Route path="/Jointtorques" element={<JointTorques />} />
            <Route
              path="/"
              element={
                <div className="home-container">
                  <div className="card">
                    <img src={activeIcon} alt="Active Info" />
                    <Link to="/digital">Digital Name Plate</Link>
                  </div>
                  <div className="card">
                    <img src={passiveIcon} alt="robot" />
                    <Link to="/datatech">Technical data</Link>
                  </div>
                  <div className="card">
                    <img src={robot} alt="live robot position" />
                    <Link to="/activeposition">live robot position</Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
