import Header from "./Header";
import Footer from "./Footer";
import "./Frontpage.css";
import ConForm from "./ConForm";
import React from "react";
import pak1 from "./img/pak1.jpg";
import pak2 from "./img/pak2.jpg";


const LargeEquipment = () => {
    //!!! banner grid not working quite as intended !!!
    return (
        <div className="background">
            <Header/>
            <br/>
            <div className="text-container">
            </div>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Esimerkkipaketti Pienille Tapahtumille</div>
                    <br/>
                    <div className="textblock">Pro112 Kokoäänet 2 kpl | 50€/vrk
                    <br/>
                    <br/>
                    Proel115 Subwoofer 1 kpl | 15€/vrk
                    <br/>
                    <br/>
                    Kaijuttimen tolpat | 75€/vrk 
                    <br/>
                    <br/>
                    Asennus | 50€
                    </div>
                    <br/>
                    <div className="subquestion">Paketin mukana sisältyvät myös valoja tarvittaessa lisähintaan </div>
                    <br/>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä paketti sisältää?
                    </div>
                    <br/>
                    <div className="textblock">vastaus tähän</div>
                </div>
                <div className="image-container">
                    <img src={pak1} width="700" alt="dj" className="LargeEquipmentImage"/>
                </div>
            </div>
            <br/>
            <div className="dj-grid">
                <div className="text-container-grid">
                <div className="slogan">Esimerkkipaketti Keskikokoisille Tapahtumille</div>
                    <br/>
                    <div className="textblock">Pro112 Kokoäänet 2 kpl | 50€/vrk
                    <br/>
                    <br/>
                    Passive18 Subwoofer 2 kpl | 50€/vrk
                    <br/>
                    <br/>
                    Kaijuttimen tolpat | 120€/vrk 
                    <br/>
                    <br/>
                    Behringer 6000D Vahvistin 1kpl | Lisää Hinta tähän
                    <br/>
                    <br/>
                    Asennus | 50€
                    </div>
                    <br/>
                    <div className="subquestion">Paketin mukana sisältyvät myös valoja tarvittaessa lisähintaan </div>
                    <br/>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä paketti sisältää?
                    </div>
                    <br/>
                    <div className="textblock">Ei kuulu sinulle</div>
                </div>
                <div className="image-container">
                    <img src={pak2} width="500" alt="dj" className="LargeEquipmentImage"/>
                </div>
            </div>
            <br/>
            <div className="text-container">
            <br/>
            Jos ylläolevat paketit ei ole riittäviä tapahtumasi tarpeisiin ota yhteyttä alla olevalla lomakkeella!    
            <ConForm/>
            </div>
           
            <Footer/>
        </div>
    );
};

export default LargeEquipment;
