import React from "react";
import "./footer.css";
import logo from "./img/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => (
    <footer className="footer">
        <div className="leftedge">
        <img src={logo} alt="Luminary Events logo" className="logo"/>
        <div>
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
                    <a href="https://www.google.fi/maps/place/Liusketie+7,+90620+Oulu/@65.0517538,25.536211,17z/data=!3m1!4b1!4m6!3m5!1s0x46802d2cf2eb49b7:0xe94c581e0b15b9c2!8m2!3d65.0517516!4d25.5387859!16s%2Fg%2F11c2gx73j0?entry=ttu" target="_blank" rel="noopener noreferrer">
                    <PlaceIcon sx={{ color: '#4CC6FF', fontSize: 35}} />
                    </a>
                </div>
                
                <div className="contact">
                    <p>Liusketie 7</p>
                    <br/>
                    <p>90620 Oulu</p>
                </div>
        </div>
    </footer>
);

export default Footer;