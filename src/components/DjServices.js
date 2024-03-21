import Header from "./Header";
import Footer from "./Footer";
import logo from "./img/logo.png";
import React from "react";
import dj from "./img/luminarydj.jpg"
import "./Frontpage.css";

const DjServices = () => {

    return (
        <div className="background">
            <Header/>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Luminary Events Oulu, se täyden palvelun monipuolinen audiotalo.</div>
                    <br/>
                    <div className="textblock">Luminary Events Oulu tarjoaa myös tapahtumia yritys- sekä
                        yksityistilaisuuksiin Oulun ja Pohjois-Pohjanmaan alueella.
                    </div>
                    <br/>
                    <div className="subquestion">Miksi valita meidät?</div>
                    <br/>
                    <div className="textblock">Meiltä löydät esimerkiksi esitystekniikan ratkaisut, ammattilaistason
                        audioratkaisut ja DJ sekä ääni- / valomiespalvelut.

                    </div>
                    <br/>
                    <div className="textblock">Järjestelmiä on eri kokoisiin tapahtumiin ja tarpeisiin. Saatavilla on
                        myös DJ-laitteistoa

                    </div>
                    <br/>
                    <div className="slogan">Kymmenen vuoden kokemuksella, Luminary Events.</div>
                    <div className="contactinfo">
                        <br/>
                        Sähköposti: contact@luminaryevents.fi
                        Puhelinnumero: +358 45 893 1112
                        <br/>
                    </div>
                </div>
                <div className="image-container">
                    <img src={dj} alt="dj" className="dj"/>
                </div>
            </div>
            <br/>
            <div className="text-container">
                    to be added: media of dj concerts
                </div>
            <Footer/>
        </div>

    );
};

export default DjServices;
