
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DeviceList.css';
import sampleimg from './img/1x1sample.png';

// ord form importit
import "./OrdForm.css";
import PhoneInput from "react-phone-number-input/input";
import SendIcon from '@mui/icons-material/Send';
import AcceptTerms from "./tosaccept";
import Alert from '@mui/material/Alert';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fi } from 'date-fns/locale/fi';
registerLocale('fi', fi);



const DeviceList = () => {

    // syöty ord form koodi alkaa ------------------------------
    // täytettävät yhteystietokentät
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [orderLength, setOrderLength] = useState(1);
    // kalenterielementin käsittely
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = (dateRange);
    //const [Content, setContent] = useState('');
    //const [price, setPrice] = useState('');
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
        // katotaan onhan nimeä syötetty ainaki yks merkki ja korkeintaan 35
        if(name.length === 0 || name.length > 35) {
            setAlertMessage('Syötä Nimi');
            setShowAlert(true);
        // katotaan onhan sähköpostiosoite syötetty, minimipituus 4, maksimipituus 35
        }else if(email.length > 35 || email.length < 4) {
            setAlertMessage('Syötä hyväksyttävä sähköpostiosoite');
            setShowAlert(true);
        // katotaan onhan sähköpostiosoite syötetty, minimipituus 4, maksimipituus 35
        }else if(tel.length > 13 || tel.length < 7) {
            setAlertMessage('Syötä hyväksyttävä puhelinnumero');
            setShowAlert(true);
        // katotaan onko aikajaksoo tilaukselle valittu ollenkaan.
        }else if(endDate === null){
            setAlertMessage("Syötä aikajakso, jona kalustoa tarvitset.");
            setShowAlert(true);
        } else{
            // Tähän pittää laittaa osote, lomake lähettää tiedot axioksella form data payloadissa. Sähköpostiin vaaditut tiedot kulkee siinä myös.
            // tästä calli menee orderssiin, kaikki tilaukset menee orderssiin kait, sinne pitäs ehkä lisätä kenttä viesteille.
            const url = process.env.REACT_APP_API + "/orders";

            // Jos tarvii muuttaa päiväys pelkäksi päivämääräksi ilman kellonaikaa, startDate.toISOString().substring(0,10) jne tekee sen.
            // Jos tän kanssa on ongelmia ja/tai haluaa vain ISO-ajan POSTiin niin poistamalla .substring(0,10) saa sen aikaiseksi.
            // Voivat olla tarpeettomia, mutta meikällä oli ongelmia api callien kaa ja nää jotenki ratkas sen eli dunno,
            // mysql vaa hyväksyy nämä lyhennetyt datet jstk syystä, vaikka käyttää ISO-formaattia, iha vitun tyhmää mutta w/e - Onni
            let alkupv = startDate.toISOString().substring(0,10);
            let loppupv = endDate.toISOString().substring(0,10);

            const contents = prepareContents();
            const totalPrice = getTotalPrice() * orderLength;
            // axioksen http callin json body, menee postina apiin. HINTA, KESTO ja SISÄLTÖ ON PLACEHOLDEREITA
            const body = {
                "total_price": totalPrice,
                "order_start_date": alkupv,
                "order_length_days": orderLength,
                "order_end_date": loppupv,
                "payment_due_date": loppupv,
                "customer_name": name,
                "customer_email": email,
                "customer_phone_number": tel,
                "contents": contents
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
    // syöty ord form koodi loppuu ------------------------------

    const url = process.env.REACT_APP_API;

    const [devices, setDevices] = useState([]);
    const [contents, setContents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('kaikki');
    const [sortedDevices, setSortedDevices] = useState([]);


    const addContents = (device_id, device_name, device_price, device_stock) => {
        console.log('Trying to add device:', device_id, device_name, device_price);
        for (let i = 0; i < contents.length; i++) {
            if(contents[i].id === device_id){
                if (contents[i].count === device_stock){
                    console.log('Device already in cart, but stock is full, cannot add more');
                    return;
                }
                console.log('Device already in cart, adding to count');
                var varcontents = [...contents]
                console.log('Old count:', varcontents[i].count);
                varcontents[i].count = varcontents[i].count + 1;
                console.log('New count:', varcontents[i].count);
                setContents(varcontents);
                return;
            }
        }
        console.log('Device not in cart, adding to cart', device_id, device_name, device_price);
        if(device_stock !== 0){
        setContents(contents.concat({id: device_id, name: device_name, price: device_price, count: 1}));
        } else {
            console.log('Device out of stock, cannot add to cart');
        }
    }

    const removeContents = (device_id) => {
        console.log('Trying to remove device:', device_id);
        for (let i = 0; i < contents.length; i++) {
            if(contents[i].id === device_id){
                console.log('Device found in cart, reducing count');
                const varcontents = [...contents]
                varcontents[i].count = varcontents[i].count - 1;
                if (varcontents[i].count === 0){
                    console.log('Count 0, removing from cart');
                    varcontents.splice(i, 1);
                }
                setContents(varcontents);
                return;
            }
        }
        console.log('Device not in cart, nothing to remove');
    }

    const checkCount = (device_id) => {
        for (let i = 0; i < contents.length; i++) {
            if(contents[i].id === device_id){
                return contents[i].count;
            }
        }
        return 0;
    }

    const getTotalPrice = () => {
        var total = 0;
        for (let i = 0; i < contents.length; i++) {
            total = total + (contents[i].price * contents[i].count);
        }
        return total;
    
    }

    const getOrderLength = ([date_a, date_b]) => {
        console.log('in order length function')
        if (date_a === null || date_b === null){setOrderLength(1);return;}
        console.log('setting order date')
        let msDay = 24 * 60 * 60 * 1000; // milliseconds per day
        const days = Math.round(Math.abs(date_a.getTime() - date_b.getTime()) / msDay) + 1;
        setOrderLength(days);
    }

    const swapCategory = (device_type) => {

        const newSortedDevices = []

        console.log('Swapping category');
        setSortedDevices(null)
        console.log('Emptied sorted devices:', sortedDevices)
        if (device_type === 'kaikki'){
            console.log('Selected category is all devices');
            setSortedDevices(devices);
            return;
        }
        for (let i = 0; i < devices.length; i++) {
            if(devices[i].type === device_type){
                console.log('Found device with category:', device_type);
                
                newSortedDevices.push(devices[i]);
            }
        }
        setSortedDevices(newSortedDevices);
        console.log('New sorted devices:', sortedDevices);
    }

    const prepareContents = () => {
        console.log('Preparing contents');
        const preparedContents = [];
        for (let i = 0; i < contents.length; i++) {
            preparedContents.push({device_id: contents[i].id, count: contents[i].count});
        }
        console.log('Prepared contents:', preparedContents);
        return preparedContents;
    }

    const getImage = (device_name) => {
        const img = require(`./img/${device_name}.jpg`);
        return img || sampleimg;
    }



    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get(`${url}/devices`);
                setDevices(response.data);
                console.log('Devices fetched:', response.data)
                setSortedDevices(response.data)
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        };

        if(devices.length === 0){
            fetchDevices();
        }
    }, [contents]);

    return (
        <div>
        <div class="text-container" style={{width: '70vw'}}>

            
        <div class="category-grid">
            <button autoFocus onClick={() => swapCategory('kaikki')}>Kaikki</button>
            <button onClick={() => swapCategory('ylä-ääni')}>Ylä-äänet</button>
            <button onClick={() => swapCategory('sub')}>Subwooferit</button>
            <button onClick={() => swapCategory('dj')}>DJ-pöydät</button>
            <button onClick={() => swapCategory('lavatekniikka')}>Lavatekniikka</button>
        </div>

        <div style={{height: '60vh', overflow: 'scroll'}}>
            {sortedDevices.map(device => (
                <div class="grid-container">
                <div class="grid-item grid-item-1" key={`${device.id}-1`}><button onClick={() => addContents(device.id, device.name, device.price_per_day, device.current_stock)}>+</button>{checkCount(device.id)}<button onClick={() => removeContents(device.id)}>-</button></div>
                <div class="grid-item grid-item-2" key={`${device.id}-2`}><img src={require(`./img/devices/${device.name}.jpg`) || sampleimg} width="150" height="150"></img></div>
                <div class="grid-item grid-item-3" key={`${device.id}-3`}>{device.name}</div>
                <div class="grid-item grid-item-4" key={`${device.id}-4`}>{device.description}</div>
                <div class="grid-item grid-item-5" key={`${device.id}-5`}><p>{device.price_per_day}€/vrk</p></div>
                <div class="grid-item grid-item-6" key={`${device.id}-6`}>Varastossa: {device.current_stock}</div>
                </div>
            ))}
            </div>
        </div>
        <div class="text-container" style={{width: '70vw'}}>
        
            {contents.length > 0 ? <div style={{"border-bottom": "1px solid white"}}> <div class="grid2-container">
                <div class="grid2-item grid2-item-1" key={`content-1`}>Määrä</div>
                <div class="grid2-item grid2-item-2" key={`content-2`}>Nimi</div>
                <div class="grid2-item grid2-item-3" key={`content-3`}>€/vrk</div>
                </div></div> : ""}
            
        {contents.map(content => (
                <div class="grid2-container">
                <div class="grid2-item grid2-item-4" key={`content-4`}>{content.count}</div>
                <div class="grid2-item grid2-item-5" key={`content-5`}>{content.name}</div>
                <div class="grid2-item grid2-item-6" key={`content-6`}>{content.price * content.count}</div>
                </div>
                ))}
            {contents.length > 0 ? <div style={{"border-top": "1px solid white"}}>
                <div class="grid2-container">
                <div class="grid2-item grid2-item-7" key={`content-7`}><button onClick={() => setContents([])}>Tyhjennä kori</button></div>
                <div class="grid2-item grid2-item-8" key={`content-8`}><p>Yhteensä: &nbsp;&nbsp;&nbsp;{getTotalPrice()}€ / vrk</p></div>
                </div>
            </div> : ""}
            </div>

            <div class="text-container">
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
                    </div> 
                    <div className="ordrightbox">
                        <div className="items">
                            <label htmlFor="pvm">Tarveajankohta</label><br/>
                                <DatePicker className="messagefield" locale="fi" selectsRange={true} startDate={startDate} endDate={endDate} onChange={(update) => {console.log("updating daterange", startDate);setDateRange(update); getOrderLength(update)}} isClearable={true}/>
                            <label htmlFor="length">Tilauksen kesto (päiviä):</label>
                            <label htmlFor="length" name="length" id="length">{orderLength}</label>
                            <label htmlFor="price">Tilauksen hinta:</label>
                            <label htmlFor="price" name="price" id="price">{getTotalPrice() * orderLength}€</label>
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
            </div>

        </div>
    );
};

export default DeviceList;