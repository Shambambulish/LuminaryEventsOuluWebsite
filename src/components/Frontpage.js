import Header from "./Header";
import Footer from "./Footer";
import "./Frontpage.css";
import logo from "./img/logo.png";
import logo2 from "./img/Logo2.png";
import ConForm from "./ConForm";


const Frontpage = () => {
                //!!! banner grid not working quite as intended !!!
    return (
        <div className="background">
            <Header/>
            <div className="banner">
                    <div className="textblock">Mainospuhe: mallia super epic</div>
            </div>
            <div>
                <div className="text-container">
                    <div className="slogan">Luminary Events Oulu, se täyden palvelun monipuolinen audiotalo.</div>
                    <br/>
                    <div className="textblock">Meiltä joustavat ratkaisut kaikenlaisiin tapahtumiin tarvitset sitten
                        DJ:tä,
                        Bändin ääniteknikkoa tai Kaiutin- / valovuokrausta.
                    </div>
                    <br/>
                    <div className="subquestion">Miksi valita meidät?</div>
                    <br/>
                    <div className="textblock">Jokaiseen tarjoukseen kuuluu kuljetus, asennus ja koko tapahtuma-ajan
                        voimassa
                        oleva tekninen tuki, jolla voit olla varma tapahtumasi onnistumisesta.
                    </div>
                    <br/>
                    <div className="textblock">Lisäksi tarjolla myös edullista ja helppoa yksittäislaitevuokrausta.
                        Kymmenen vuoden kokemuksella, Luminary Events. Kysy ilmainen tarjous nyt!
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
                <div className="text-container">
                    <ConForm/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Frontpage;
