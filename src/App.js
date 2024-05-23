import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ActiveInfo from './ActiveInfo';
import PassiveInfo from './PassiveInfo';
import homeIcon from './images/home-icon.png'; // Add your home icon image here
import activeIcon from './images/active-icon.png'; // Add your active icon image here
import passiveIcon from './images/passive-icon.png'; // Add your passive icon image here
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Robot Information App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img src={homeIcon} alt="Home" className="nav-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/active">
                  <img src={activeIcon} alt="Active Info" className="nav-icon" /> Active Info
                </Link>
              </li>
              <li>
                <Link to="/passive">
                  <img src={passiveIcon} alt="Passive Info" className="nav-icon" /> Passive Info
                </Link>
              </li>
              {/* Add more buttons here */}
              <li>
                <Link to="/button1">
                  Button 1
                </Link>
              </li>
              <li>
                <Link to="/button2">
                  Button 2
                </Link>
              </li>
              {/* End of additional buttons */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/active" element={<ActiveInfo />} />
            <Route path="/passive" element={<PassiveInfo />} />
            {/* Add routes for additional buttons here */}
            <Route path="/button1" element={<PassiveInfo />} />
            <Route path="/button2" element={<PassiveInfo />} />
            {/* End of additional routes */}
            <Route path="/" element={
              <div className="home-container">
                <div className="card">
                  <img src={activeIcon} alt="Active Info" />
                  <Link to="/active">Active Info</Link>
                </div>
                <div className="card">
                  <img src={passiveIcon} alt="Passive Info" />
                  <Link to="/passive">Passive Info</Link>
                </div>
                {/* Add cards for additional buttons here */}
                <div className="card">
                  <Link to="/button1">ManufacturerProductDesignation</Link>
                </div>
                <div className="card">
                  <Link to="/button2">Button 2</Link>
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
