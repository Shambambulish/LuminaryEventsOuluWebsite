import Header from "./Header";
import Footer from "./Footer";
import DeviceList from "./DeviceList";
import "./Frontpage.css";

const SmallEquipment = () => {
    //!!! banner grid not working quite as intended !!!
    return (
        <div className="background">
            <Header/>
            <div className="banner">
                <div className="textblock">
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
            </div>
            <div>
                <div>
                    <DeviceList/>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default SmallEquipment;
