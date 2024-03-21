import { useState } from "react";
import axios from 'axios';
import "./ConForm.css";

function ConForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = () => {
        if(name.length ===0) {
            //alert("Syötä Nimi")
        }else if(email.length ===0) {
            //alert("Syötä säpö")
        }else if(tel.length ===0) {
            //alert("Syötä numero")
        }else if(msg.length ===0) {
            //alert("Syötä viesti")
        } else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            const url ="API TAI KANTA TÄHÄ TÄNNE LÄHTEE DATA";

            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('tel', tel);
            fData.append('msg', msg);

            axios.post(url, fData)
            .then(response=> alert(response.data))
            .catch(error=> alert(error));
        }
    }

    return(
        <div className="conformbg">
            <form className="contact-form">
                <h2>Ota yhteyttä!</h2>
                <td>
                    <tr>
                        <label htmlFor="name">Nimi</label><br/>
                        <input className= "field" type="text" name="name" id="name" value={name} onChange={(e) =>setName(e.target.value)}/>
                    </tr>
                    <tr>
                        <label htmlFor="email">Sähköposti</label><br/>
                        <input className= "field" type="email" name="email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                    </tr>
                    <tr>
                        <label htmlFor="tel">Puhelinnumero</label><br/>
                        <input className= "field" type="text"  name="tel" id="tel" value={tel} onChange={(e) =>setTel(e.target.value)} />
                    </tr>
                </td>
                <td>
                        <label htmlFor="msg">Viesti</label><br/>
                        <textarea  className= "field" name="msg" id="msg" value={msg} onChange={(e) =>setMsg(e.target.value)} rows="10"/>
                </td>
                <td>
                    <input type="button"  className= "nappi" name="submit" id="submit" value=">" onClick={handleSubmit}/>
                </td>
            </form>
        </div>
    )
}

export default ConForm