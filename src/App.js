import './App.css';
import React from "react"
import Footer from "./components/Footer.js";
import Header from './components/Header.js';
import Frontpage from './components/Frontpage.js';


const App = () => (
 <div className="App">
  <Header/>
  <Frontpage/>
  <Footer />
 </div>
  );
export default App;
