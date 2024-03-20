import './App.css';
import React from "react"
import Frontpage from './components/Frontpage.js';
import LargeEquipment from './components/LargeEquipment.js';
import SmallEquipment from './components/SmallEquipment.js';
import DjServices from './components/DjServices.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

 return (
        <Router>
          <Routes>
            <Route path="/" element={<Frontpage/>} />
            <Route path="/Pientavarat" element={<SmallEquipment/>} />
            <Route path="/Suurtavarat" element={<LargeEquipment/>} />
            <Route path="/DJ-Palvelut" element={<DjServices/>} />
          </Routes>
        </Router>
  );
};

export default App;