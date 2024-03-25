import Header from "./Header";
import Footer from "./Footer";
import "./Frontpage.css";
import ConForm from "./ConForm";
import React from "react";
import PlaceIcon from '@mui/icons-material/Place';


const LargeEquipment = () => {
    //!!! banner grid not working quite as intended !!!
    return (
        <div className="background">
            <Header/>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Esine 1</div>
                    <br/>
                    <div className="textblock">Ipsum Lorem
                    </div>
                    <br/>
                    <div className="subquestion">Lisätietoja esineestä</div>
                    <br/>
                    <div className="textblock">lisätietoja: ei ole

                    </div>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä tarvitsee?
                    </div>
                    <br/>
                    <div className="textblock">lisätietoja: ei ole</div>
                    <br/>
                    <div className="textblock">saatavilla x kappaletta</div>
                </div>
                <div className="image-container">
                    <img src={PlaceIcon} alt="dj" className="dj"/>
                </div>
            </div>
            <br/>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Esine 2</div>
                    <br/>
                    <div className="textblock">Lorem ipsum
                    </div>
                    <br/>
                    <div className="subquestion">Lisätietoja esineestä</div>
                    <br/>
                    <div className="textblock">lisätietoja: ei ole

                    </div>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä tarvitsee?
                    </div>
                    <br/>
                    <div className="textblock">lisätietoja: ei ole</div>
                    <br/>
                    <div className="textblock">saatavilla x kappaletta</div>
                </div>
                <div className="image-container">
                    <img src={PlaceIcon} alt="dj" className="dj"/>
                </div>
            </div>
            <br/>
            <div className="dj-grid">
                <div className="text-container-grid">
                    <div className="slogan">Esine 3</div>
                    <br/>
                    <div className="textblock">musip meroL
                    </div>
                    <br/>
                    <div className="subquestion">Lisätietoja esineestä</div>
                    <br/>
                    <div className="textblock">lisätietoja: ei ole

                    </div>
                    <br/>
                    <div className="subquestion">Mitä lisälaitteita/kaapeleita/ym tämä tarvitsee?
                    </div>
                    <br/>
                    <div className="textblock">lisätietoja: ei ole</div>
                    <br/>
                    <div className="textblock">saatavilla x kappaletta</div>
                </div>
                <div className="image-container">
                    <img src={PlaceIcon} alt="dj" className="dj"/>
                </div>
            </div>
            <div className="text-container">
                    <ConForm/>
                </div>
            <Footer/>
        </div>
    );
};

export default LargeEquipment;
