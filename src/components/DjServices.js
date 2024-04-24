import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import dj from "./img/luminarydj.jpg"
import "./DjServices.css";

const DjServices = () => {

    return (
        <div className="background">
            <Header/>
            <div className="dj-grid">
                <div className="dj-text-container-grid">
                    <div className="slogan">DJ hakusessa tapahtumiin?</div>
                    <br/>
                    <div className="textblock">
                        Luminary Events Oulu tarjoaa ammattitasoista DJ-palvelua erilaisiin tapahtumiin tarvitsit sitten DJ:n, äänimiehen tai valomiehen.
                    </div>
                    <div className="slogan">DJ-tarjonta</div>
                    <br/>
                    <div className="textblock">
                    DJ palvelua hoitavat DJ Luminary ja halutessaan vinyyli DJ 2VN.<br/><br/>
                    Luminary on DJ-tuottaja, joka on tunnettu elektronisen musiikin tuottajana ja DJ:nä jo kuuden vuoden ajan.<br/><br/>
                    Luminaryn matkassa tanssilattia on pakattu oli se sitten nopean elektronisen musiikin
                    tai kevyen popin tahtiin. <br/><br/>
                    Luminary on heittänyt keikkoja opiskelijatapahtumista
                    UG-skeneen ympäri Suomen. Vuonna 2023 hän esiintyi myös Hurmos-festareilla.
                    </div>
                </div>
                <div className="image-container">
                    <img src={dj} alt="dj" className="dj"/>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default DjServices;
