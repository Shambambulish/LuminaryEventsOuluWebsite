import { useState } from "react";
import axios from 'axios';
import "./ConForm.css";
import PhoneInput from "react-phone-number-input/input";
import SendIcon from '@mui/icons-material/Send';
import AcceptTerms from "./tosaccept";
import Alert from '@mui/material/Alert';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fi } from 'date-fns/locale/fi';
registerLocale('fi', fi);




function ConForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [msg, setMsg] = useState("");
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = (dateRange);
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
        if(name.length === 0 || name.length > 35) {
            setAlertMessage("Syötä Nimi.");
            setShowAlert(true);
        }else if(email.length === 0 || email.length > 35 || email.length < 4) {
            setAlertMessage("Syötä hyväksyttävä sähköpostiosoite.");
            setShowAlert(true);
        }else if(tel.length === 0 || tel.length > 13 || tel.length < 7) {
            setAlertMessage("Syötä hyväksyttävä puhelinnumero.");
            setShowAlert(true);
        }else if(msg.length > 300) {
            setAlertMessage("Viestin enimmäispituus on 300 merkkiä.");
            setShowAlert(true);
        }else if(dateRange == [null, null]){
            setAlertMessage("Syötä aikajakso, jona kalustoa tarvitset.");
            setShowAlert(true);
        }else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            const url = process.env.API + "/devices";

            // Jos tarvii muuttaa päiväys pelkäksi päivämääräksi ilman kellonaikaa, startDate.toISOString().substring(0,10) jne tekee sen.
            let alkupv = startDate.toISOString();
            let loppupv = endDate.toISOString();

            const body = {
                "total_price": 1,
                "order_start_date": alkupv,
                "order_length_days": 1,
                "order_end_date": loppupv,
                "payment_due_date": loppupv,
                "customer_name": name,
                "customer_email": email,
                "customer_phone_number": tel,
                "contents": 1
            }

            // alla errori tulee alerttiin, lähinnä muistin varalta ovat tossa
            axios.post(url,body)
                  .then((response) => {
                    // alertin voi poistaa tuotantoon mennessä.
                    alert(response.data)
                    console.log(response.data)
                  }).catch(error => {
                    alert(error)
                    console.log(error)
                  });

        }
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
                                <label htmlFor="pvm">tarveajankohta</label><br/>
                                <DatePicker className="messagefield" locale="fi" selectsRange={true} startDate={startDate} endDate={endDate} onChange={(update) => {setDateRange(update);}} isClearable={true}/>
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