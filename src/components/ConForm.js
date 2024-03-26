import { useState } from "react";
import axios from 'axios';
import "./ConForm.css";
import PhoneInput from "react-phone-number-input/input";
import SendIcon from '@mui/icons-material/Send';


function ConForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = () => {
        if(name.length === 0 || name.length > 35) {
            alert("Syötä Nimi")
        }else if(email.length === 0 || email.length > 35 || email.length < 4) {
            alert("Syötä hyväksyttävä sähköpostiosoite")
        }else if(tel.length === 0 || tel.length > 13 || tel.length < 7) {
            alert("Syötä hyväksyttävä puhelinnumero")
        }else if(msg.length === 0 || msg.length > 300) {
            alert("Syötä korkeintaan 300 merkkiä sisältävä viesti")
        } else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            const url ="API TAI KANTA TÄHÄ TÄNNE LÄHTEE DATA";

            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('tel', tel);
            fData.append('msg', msg);
            

            // alla errori tulee alerttiin, lähinnä muistin varalta ovat tossa
            axios.post(url,fData)
                  .then((response) => {
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