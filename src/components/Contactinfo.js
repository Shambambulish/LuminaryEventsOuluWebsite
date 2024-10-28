import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import "./Contactinfo.css";
import logo from "./img/logo.png";

const Contactinfo = () => {

    return (
        <div className="background">
            <Header/>
            <div className="contacttext-container">
                <div className="contacttext-container-grid">
                    <div className="contactslogan">Yhteystiedot</div>
                    <div className="contacttextblock">
                        <p>Kontaktihenkilö: Keni Kokkola</p>
                        <p>Sähköposti: contact@luminaryevents.fi</p>
                        <p>Puhelinnumero: +358 45 893 1112</p>
                        <p>Osoite: Liusketie 7, 90620 OULU </p>
                    </div>
                </div>
                <div className="logobox">
                    <img src={logo} alt="Luminary Events logo" className="contactlogo"/>
                    </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Contactinfo;
