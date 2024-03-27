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
                    <div className="textblock">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis nisi in molestie posuere. Phasellus arcu libero, hendrerit nec velit porta, condimentum luctus arcu. Cras vehicula accumsan rhoncus. Vestibulum et hendrerit lectus, sodales varius dolor. Aenean in tincidunt velit. Nunc vitae erat ac velit semper auctor. Vestibulum porttitor, erat vitae porta molestie, libero nisl tincidunt ex, sed interdum enim libero vel lectus. Aenean sollicitudin finibus sem nec commodo. Aenean vehicula nisl quis tempor suscipit. Proin commodo lacus in sem feugiat, vitae mattis quam fringilla. Suspendisse dui ante, pretium eu ultrices at, pulvinar vitae neque. Etiam condimentum eros tincidunt diam bibendum varius. Suspendisse potenti. Donec feugiat vitae arcu ac tempor.

                        Integer ornare tellus magna, non consequat arcu sagittis feugiat. Nam vitae luctus mi. Nulla eu sem congue, consequat velit et, venenatis odio. Aenean maximus eu velit ut auctor. Etiam vulputate porttitor ex, ac venenatis enim cursus vitae. Maecenas eu cursus nulla, nec finibus magna. Pellentesque massa nunc, condimentum vel magna non, cursus rutrum ex. Aliquam congue enim vitae nisl efficitur pretium. Etiam ac feugiat diam, ut hendrerit dui. Donec commodo in turpis at dapibus. Mauris tincidunt enim id tristique mollis. Pellentesque nec lorem ac justo commodo tempus.

                        Curabitur porta ligula magna, faucibus venenatis nisi efficitur feugiat. Nulla vitae aliquet mauris. Mauris semper id metus id cursus. Duis ac convallis massa. Aenean cursus augue tortor, ut dignissim odio ullamcorper ac. Morbi non lectus volutpat, iaculis enim a, viverra magna. Etiam finibus sem dolor, dignissim tempus ipsum consequat id. Ut ipsum enim, lobortis eu ex a, efficitur malesuada dui. Mauris iaculis ipsum volutpat massa tristique, eget pulvinar est sagittis. Pellentesque rhoncus felis vel quam dictum, sit amet molestie orci mollis. Nunc mollis, turpis ac fringilla molestie, quam tortor tincidunt turpis, dictum facilisis libero orci a nunc. Pellentesque finibus elit sit amet sem lobortis facilisis. Nulla a faucibus leo.
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
