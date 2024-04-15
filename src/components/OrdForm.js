import { useState } from "react";
import axios from 'axios';
import "./OrdForm.css";
import PhoneInput from "react-phone-number-input/input";
import SendIcon from '@mui/icons-material/Send';
import AcceptTerms from "./tosaccept";
import Alert from '@mui/material/Alert';



function OrdForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    //const [Content, setContent] = useState('');
    //const [price, setPrice] = useState('');



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
            setAlertMessage('Syötä Nimi');
            setShowAlert(true);
        }else if(email.length === 0 || email.length > 35 || email.length < 4) {
            setAlertMessage('Syötä hyväksyttävä sähköpostiosoite');
            setShowAlert(true);
        }else if(tel.length === 0 || tel.length > 13 || tel.length < 7) {
            setAlertMessage('Syötä hyväksyttävä puhelinnumero');
            setShowAlert(true);
        }else if(startdate === "") {
            setAlertMessage('Syötä aloituspäivämäärä');
            setShowAlert(true);
        }else if(enddate === "") {
            setAlertMessage("Syötä lopetuspäivämäärä")
            setShowAlert(true);
        } else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            const url =process.env.API + "/orders";

            const body = {
                "total_price": 1,
                "order_start_date": startdate,
                "order_length_days": 1,
                "order_end_date": enddate,
                "payment_due_date": enddate,
                "customer_name": name,
                "customer_email": email,
                "customer_phone_number": tel,
                "contents": 1
            }
            

            // alla errori tulee alerttiin, lähinnä muistin varalta ovat tossa
            axios.post(url,body)
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
            {showAlert && <Alert severity="error">{alertMessage}</Alert>}
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
                        <button className="ordnappi" onClick={handleClick}>
                        <SendIcon sx={{ color: '#F2F3F5', fontSize: 35}} />
                        </button>
                        {showAcceptTerms && <AcceptTerms handleClose={handleClose} handleSubmit={handleSubmit}/>}
                        </div>
                        <div>
        </div>
            </form>
        </div>
    )
}

export default OrdForm