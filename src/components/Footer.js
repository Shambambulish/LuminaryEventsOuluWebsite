import React from "react";
import "./footer.css";
import logo from "./img/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => (
    <div className="topspace">
    <footer className="footer">
        <div className="leftedge">
        <img src={logo} alt="Luminary Events logo" className="logo"/>
        <div className="needtomove">
            <p>Luminary Events Oulu | Y-tunnus: 3392013-7</p>
            
            <div className="grammy">
            <a href="https://www.instagram.com/luminaryevents_oulu/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: '#4CC6FF', fontSize: 30, marginTop: 1}} />
            </a>
            <p> Luminary Events Oulu</p>
            </div> 
            </div>
        </div>
        
        <div className="rightedge">
            <div className="line"/>
                <div className="location">
                    <a href="https://maps.app.goo.gl/h5vDmSf5kV2YP3ka7" target="_blank" rel="noopener noreferrer">
                    <PlaceIcon sx={{ color: '#4CC6FF', fontSize: 35}} />
                    </a>
                </div>
                
                <div className="contact">
                    <p>Liusketie 7</p>
                    <p>90620, Oulu</p>
                    <p>+ 358 45 983 1112</p>
                </div>
        </div>
    </footer>
    </div>
);

export default Footer;