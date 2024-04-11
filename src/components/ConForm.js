import { useState } from "react";
import axios from 'axios';
import "./ConForm.css";
import PhoneInput from "react-phone-number-input/input";
import SendIcon from '@mui/icons-material/Send';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fi } from 'date-fns/locale/fi';
registerLocale('fi', fi);



function ConForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [msg, setMsg] = useState("");
    const [rng, newRng] = useState([null, null]);
    const [alPvm, loPvm] = rng;


    const handleSubmit = () => {
        if(name.length === 0 || name.length > 35) {
            alert("Syötä Nimi")
        }else if(email.length === 0 || email.length > 35 || email.length < 4) {
            alert("Syötä hyväksyttävä sähköpostiosoite")
        }else if(tel.length === 0 || tel.length > 13 || tel.length < 7) {
            alert("Syötä hyväksyttävä puhelinnumero")
        }else if(msg.length === 0 || msg.length > 300) {
            alert("Syötä korkeintaan 300 merkkiä sisältävä viesti")
        }else if(rng == [null,null]) {
            alert("Syötä aikahaarukka vuokralle")
        } else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            const url = process.env.API + "/devices";

            let fData = new FormData();
            fData.append("total_price", 1);
            fData.append("order_start_date", alPvm);
            fData.append("order_length_days", 1);
            fData.append("order_end_date", loPvm);
            fData.append("payment_due_date", loPvm);
            fData.append("customer_name", name);
            fData.append("customer_email", email);
            fData.append("customer_phone_number", tel);
            fData.append("contents", 1);

            const body = {
                "total_price": 1,
                "order_start_date": alPvm,
                "order_length_days": 1,
                "order_end_date": loPvm,
                "payment_due_date": loPvm,
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
                                <DatePicker className="messagefield" locale="fi"  selectsRange={true} startDate={alPvm} endDate={loPvm} onChange={(pvt) => {newRng(pvt)}} isClearable={true}/>
                                <label htmlFor="msg">Viesti</label><br/>
                                <textarea  className= "messagefield" placeholder="Mitä asiasi koskee..." name="msg" id="msg" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                            </div>
                            <div className="buttonbox">
                                <button type="submit" className="nappi" name="submit" id="submit" onClick={handleSubmit}>
                                <SendIcon sx={{ color: '#F2F3F5', fontSize: 35}} />
                                </button>
                            </div>

            </form>
        </div>
    )
}

export default ConForm