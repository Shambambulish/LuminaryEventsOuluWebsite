import Header from "./Header";
import Footer from "./Footer";
import "./Frontpage.css";
import logo from "./img/logo.png";
import logo2 from "./img/Logo2.png";
import ConForm from "./ConForm";
import carousel1 from "./img/carousel/carousel1.JPG";
import carousel2 from "./img/carousel/carousel2.JPG";
import carousel3 from "./img/carousel/carousel3.jpg";
import carousel4 from "./img/carousel/carousel4.jpg";
import carousel5 from "./img/carousel/carousel5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Frontpage = () => {

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
            <div className="carousel-container">
            <Carousel className="carousel" dynamicHeight={false} infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false} autoPlay={true} interval={7000} transitionTime={500}>
                <div>
                    <img src={carousel1} />
                </div>
                <div>
                    <img src={carousel2} />
                </div>
                <div>
                    <img src={carousel3} />
                </div>
                <div>
                    <img src={carousel4} />
                </div>
                <div>
                    <img src={carousel5} />
                </div>
            </Carousel>
            </div>
            <div>
                <div className="text-container">
                    <ConForm/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Frontpage;
