import { useState } from "react";
import axios from 'axios';
import "./ConForm.css";
import PhoneInput from "react-phone-number-input/input";
import SendIcon from '@mui/icons-material/Send';
import AcceptTerms from "./tosaccept";
import Alert from '@mui/material/Alert';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import { fi } from 'date-fns/locale/fi';
registerLocale('fi', fi);


function ConForm(){
    // täytettävät yhteystietokentät
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [orderLength, setOrderLength] = useState(1);
    const [msg, setMsg] = useState("");
    // kalenterielementin käsittely
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = (dateRange);
    // Popup, errorit ja ilmoitukset
    const [showAcceptTerms, setShowAcceptTerms] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setShowAcceptTerms(true);
    };

    const handleClose = () => {
        setShowAcceptTerms(false);
    };


    const handleSubmit = () => {
        // katotaan onhan nimeä syötetty ainaki yks merkki ja korkeintaan 35.
        if(name.length === 0 || name.length > 35) {
            setAlertMessage("Syötä Nimi.");
            setShowAlert(true);
        // katotaan onhan sähköpostiosoite syötetty, minimipituus 4, maksimipituus 35.
        }else if(email.length > 35 || email.length < 4) {
            setAlertMessage("Syötä hyväksyttävä sähköpostiosoite.");
            setShowAlert(true);
        // Katotaan onko puh.num. syötetty, minimimitta 7, maksimimitta 13. 
        }else if(tel.length > 13 || tel.length < 7) {
            setAlertMessage("Syötä hyväksyttävä puhelinnumero.");
            setShowAlert(true);
        }else if(msg.length > 300) {
            setAlertMessage("Viestin enimmäispituus on 300 merkkiä.");
            setShowAlert(true);
        // katotaan onko aikajaksoo tilaukselle valittu ollenkaan.
        }else if(endDate === null){
            setAlertMessage("Syötä aikajakso, jona kalustoa tarvitset.");
            setShowAlert(true);
        }else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            // tästä calli menee orderssiin, kaikki tilaukset menee orderssiin kait, sinne pitäs ehkä lisätä kenttä viesteille.
            const url = process.env.REACT_APP_API + "/orders";

            // Jos tarvii muuttaa päiväys pelkäksi päivämääräksi ilman kellonaikaa, startDate.toISOString().substring(0,10) jne tekee sen.
            // Jos tän kanssa on ongelmia ja/tai haluaa vain ISO-ajan POSTiin niin poistamalla .substring(0,10) saa sen aikaiseksi.
            // Voivat olla tarpeettomia, mutta meikällä oli ongelmia api callien kaa ja nää jotenki ratkas sen eli dunno, 
            // mysql vaa hyväksyy nämä lyhennetyt datet jstk syystä, vaikka käyttää ISO-formaattia, iha vitun tyhmää mutta w/e - Onni
            let alkupv = startDate.toISOString().substring(0,10);
            let loppupv = endDate.toISOString().substring(0,10);

            // axioksen http callin json body, menee postina apiin. HINTA, KESTO ja SISÄLTÖ ON PLACEHOLDEREITA
            const body = {
                "total_price": 0,
                "order_start_date": alkupv,
                "order_length_days": orderLength,
                "order_end_date": loppupv,
                "payment_due_date": loppupv,
                "customer_name": name,
                "customer_email": email,
                "customer_phone_number": tel,
                "contents": 0,
                "order_status": "contact",
                "message": msg,
            }

            // alla errori tulee alerttiin, lähinnä muistin varalta ovat tossa
            axios.post(url,body)
                  .then((response) => {
                    alert(response.data)
                    console.log(response.data)
                    console.log(response.status);
                    if(response.status == 201){
                        emailjs.init({
                            publicKey: process.env.REACT_APP_PUBLIC_KEY,
                            // Do not allow headless browsers
                            blockHeadless: true,
                            blockList: {
                                // Block the suspended emails
                                list: ['foo@emailjs.com', 'bar@emailjs.com'],
                                // The variable contains the email address
                                watchVariable: 'userEmail',
                                },
                            limitRate: {
                                // Set the limit rate for the application
                                id: 'app',
                                // Allow 1 request per 10s
                                throttle: 10000,
                            },
                        });
                        emailjs.send(
                            process.env.REACT_APP_SERVICE_ID,
                            process.env.REACT_APP_CONTEMPLATE_ID,
                            body,
                            process.env.REACT_APP_PUBLIC_KEY
                        )
                        .then((result) => {
                            console.log(result);
                        }, (error) => {
                            console.log(error);
                        });
                }
                  }).catch(error => {
                    alert(error)
                    console.log(error)
                  });

        }
    }

    const getOrderLength = ([date_a, date_b]) => {
        console.log('in order length function')
        if (date_a === null || date_b === null){setOrderLength(1);return;}
        console.log('setting order date')
        let msDay = 24 * 60 * 60 * 1000; // milliseconds per day
        const days = Math.round(Math.abs(date_a.getTime() - date_b.getTime()) / msDay) + 1;
        setOrderLength(days);
    }

    return(
        <div className="conformbg">
            {showAlert && <Alert severity="error">{alertMessage}</Alert>}
            <form className="contact-form">
                        <div className="textbox">
                        <h2 className="head">Ota yhteyttä!</h2>
                                <label htmlFor="name">Nimi</label><br/>
                                <input className= "textfield" type="text" placeholder="Etunimi Sukunimi" name="name" id="name" value={name} onChange={(e) =>setName(e.target.value)}/>
                                <label htmlFor="email">Sähköposti</label><br/>
                                <input className= "textfield" type="email" placeholder="Matti.Meikalainen@gmail.com" name="email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                                <label htmlFor="tel">Puhelinnumero</label><br/>
                                <PhoneInput className= "textfield" country="FI" placeholder="+358..."  name="tel" id="tel" value={tel} onChange={setTel} />
                            </div>    
                            <div className="messagebox">
                                <label htmlFor="pvm">Tarveajankohta</label><br/>
                                <DatePicker className="datefield" locale="fi" minDate={new Date()} selectsRange={true} startDate={startDate} endDate={endDate} onChange={(update) => {console.log("updating daterange", startDate);setDateRange(update); getOrderLength(update)}} isClearable={true}/>
                                <label htmlFor="msg">Viesti</label><br/>
                                <textarea  className= "messagefield" placeholder="Mitä asiasi koskee..." name="msg" id="msg" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                            </div>
                            <div className="buttonbox">
                                <button className="nappi" onClick={handleClick}>
                                <SendIcon sx={{ color: '#F2F3F5', fontSize: 35}} />
                                </button>
                                {showAcceptTerms && <AcceptTerms handleClose={handleClose} handleSubmit={handleSubmit}/>}
                            </div>

            </form>
        </div>
    )
}

export default ConForm