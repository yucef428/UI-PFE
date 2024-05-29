import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DigitalNamePlate from './DigitalNamePlate';
import TechnicalData from './TechnicalData';
import homeIcon from './images/home-icon.png'; // Add your home icon image here
import activeIcon from './images/active-icon.png'; // Add your active icon image here
import passiveIcon from './images/passive-icon.png'; // Add your passive icon image here
import GeneralInformation  from './GeneralInformation';
import TechnicalProperties from './TechnicalProperties';
import PhysicalAddress from './PhysicalAddress';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>LBR KUKA</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img src={homeIcon} alt="Home" className="nav-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/digital">
                  <img src={activeIcon} alt="Active Info" className="nav-icon" /> DigitalNamePlate
                </Link>
              </li>
              <li>
                <Link to="/datatech">
                  <img src={passiveIcon} alt="Passive Info" className="nav-icon" /> Technical data
                </Link>
              </li>
              {/* Add more buttons here */}
              {/* End of additional buttons */}
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
            {/* End of additional routes */}
            <Route path="/" element={
              <div className="home-container">
                <div className="card">
                  <img src={activeIcon} alt="Active Info" />
                  <Link to="/digital">DigitalNamePlate</Link>
                </div>
                <div className="card">
                  <img src={passiveIcon} alt="Passive Info" />
                  <Link to="/datatech">Technical data</Link>
                </div>
                {/* End of additional cards */}
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
