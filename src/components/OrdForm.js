import { useState } from "react";
import axios from 'axios';
import "./OrdForm.css";
import PhoneInput from "react-phone-number-input/input";
import SendIcon from '@mui/icons-material/Send';


function OrdForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    //const [Content, setContent] = useState('');
    //const [price, setPrice] = useState('');

    const handleSubmit = () => {
        if(name.length === 0 || name.length > 35) {
            alert("Syötä Nimi")
        }else if(email.length === 0 || email.length > 35 || email.length < 4) {
            alert("Syötä hyväksyttävä sähköpostiosoite")
        }else if(tel.length === 0 || tel.length > 13 || tel.length < 7) {
            alert("Syötä hyväksyttävä puhelinnumero")
        } else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            const url ="API TAI KANTA TÄHÄ TÄNNE LÄHTEE DATA";

            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('tel', tel);
            fData.append('startdate', startdate);
            fData.append('enddate', enddate);
            //fData.append('content', content);
            //fData.append('price', price);
            

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
        <div className="ordconformbg">
            <form className="order-form">
                <div className="ordtextbox">
                        <label htmlFor="name">Nimi</label>
                    <input className= "ordtextfield" type="text" placeholder="Etunimi sukunimi..." name="name" id="name" value={name} onChange={(e) =>setName(e.target.value)}/>
                        <label htmlFor="email">Sähköposti</label>
                    <input className= "ordtextfield" type="email" placeholder="esim. gmail..." name="email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                        <label htmlFor="tel">Puhelinnumero</label>
                        <PhoneInput className= "ordtextfield" country="FI" placeholder="+358..."  name="tel" id="tel" value={tel} onChange={setTel} />
                        <label htmlFor="startdate">Aloituspvm.</label>
                        <input className= "ordtextfield" type="date"  name="startdate" id="startdate" value={startdate} onChange={(e) =>setStartdate(e.target.value)} />
                    </div> 
                    <div className="ordrightbox">
                        <div className="items">
                        <label htmlFor="content">Lista vuokrattavista tavaroista:</label>
                        <label htmlFor="content" name="content" id="content"/>
                        <label htmlFor="price">Hinta:</label>
                        <label htmlFor="price" name="price" id="price"/>
                        </div>
                        <div className="rightdate">
                        <label htmlFor="enddate">Lopetuspvm.</label>
                        <input className= "ordtextfield" type="date"  name="enddate" id="enddate" value={enddate} onChange={(e) =>setEnddate(e.target.value)} />
                        </div>
                        </div>
                        <div className="ordbuttonbox">
                        <button type="submit" className="ordnappi" name="submit" id="submit" onClick={handleSubmit}>
                        <SendIcon sx={{ color: '#F2F3F5', fontSize: 35}} />
                        </button>
                        </div>
            </form>
        </div>
    )
}

export default OrdForm