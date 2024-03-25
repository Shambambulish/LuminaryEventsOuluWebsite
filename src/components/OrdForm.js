import { useState } from "react";
import axios from 'axios';
import "./OrdForm.css";
import PhoneInput from "react-phone-number-input/input";


function OrdForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
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
        <div className="conformbg">
            <form className="contact-form">
                <tr>
                    <td>
                        <label htmlFor="name">Nimi</label>
                    </td>
                    <input className= "field" type="text" placeHolder="Etunimi sukunimi..." name="name" id="name" value={name} onChange={(e) =>setName(e.target.value)}/>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="email">Sähköposti</label>
                    </td>
                    <input className= "field" type="email" placeHolder="esim. gmail..." name="email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                </tr>
                <tr>
                    <td>
                        <label htmlFor="tel">Puhelinnumero</label>
                    </td>
                    <PhoneInput className= "field" country="FI" placeHolder="+358..."  name="tel" id="tel" value={tel} onChange={setTel} />
                </tr>
                <tr>
                    <td>
                        <label htmlFor="content">Lista vuokrattavista tavaroista:</label>
                    </td>
                    <td>
                        <label htmlFor="content" name="content" id="content"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="price">Hinta:</label>
                    </td>
                    <td>
                        <label htmlFor="price" name="price" id="price"/>
                    </td>
                </tr>
                <tr>
                    <input type="button"  className= "nappi" name="submit" id="submit" value=">" onClick={handleSubmit}/>
                </tr>
                
            </form>
        </div>
    )
}

export default OrdForm