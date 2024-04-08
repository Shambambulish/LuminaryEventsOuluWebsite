import Header from "./Header";
import Footer from "./Footer";
import "./Frontpage.css";
import ConForm from "./ConForm";
import React from "react";


const LargeEquipment = () => {
    //!!! banner grid not working quite as intended !!!
    return (
        <div className="background">
            <Header/>
            <br/>
            <div className="text-container">
                <ConForm/>
            </div>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Esimerkkipaketti pienille tapahtumille:</div>
                    <br/>
                    <div className="textblock">Ipsum Lorem
                    </div>
                    <br/>
                    <div className="subquestion">Paketin mukana sisältyvät laitteet</div>
                    <br/>
                    <div className="textblock">vastaus tähän

                    </div>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä paketti sisältää?
                    </div>
                    <br/>
                    <div className="textblock">vastaus tähän</div>
                </div>
                <div className="image-container">
                    <img src="https://placehold.co/500x500" alt="dj" className="LargeEquipmentImage"/>
                </div>
            </div>
            <br/>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Esimerkkipaketti keskikokoisille tapahtumille:</div>
                    <br/>
                    <div className="textblock">Ipsum Lorem
                    </div>
                    <br/>
                    <div className="subquestion">Paketin mukana sisältyvät laitteet</div>
                    <br/>
                    <div className="textblock">vastaus tähän

                    </div>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä paketti sisältää?
                    </div>
                    <br/>
                    <div className="textblock">vastaus tähän</div>
                </div>
                <div className="image-container">
                    <img src="https://placehold.co/500x500" alt="dj" className="LargeEquipmentImage"/>
                </div>
            </div>
            <br/>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Esimerkkipaketti suurille tapahtumille:</div>
                    <br/>
                    <div className="textblock">Ipsum Lorem
                    </div>
                    <br/>
                    <div className="subquestion">Paketin mukana sisältyvät laitteet</div>
                    <br/>
                    <div className="textblock">vastaus tähän

                    </div>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä paketti sisältää?
                    </div>
                    <br/>
                    <div className="textblock">vastaus tähän</div>
                </div>
                <div className="image-container">
                    <img src="https://placehold.co/500x500" alt="dj" className="LargeEquipmentImage"/>
                </div>
            </div>
            <div className="text-container">
            </div>
            <Footer/>
        </div>
    );
};

export default LargeEquipment;
