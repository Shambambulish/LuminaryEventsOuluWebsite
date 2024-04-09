import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./tosaccept.css";

export default function AcceptTerms(props) {
  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
    props.handleClose();
  };


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Vuokraehdot"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            VUOKRAUSEHDOT
            <br></br>
            Palveleva audiotalo Luminary Events Oulu soveltaa laitevuokrausalan yleisiä sopimusehtoja.
            Vuokraustoiminta ja siihen mahdollisesti liittyvä kuljetus- ja muut palvelut tapahtuvat aina erillisen
            sopimuksen mukaan.
            <br></br><br></br>
            1. Sopijaosapuolet ja soveltamisala
            <br></br>
            Näitä sopimusehtoja sovelletaan laitevuokraamoliikkeen (myöhemmin ”Vuokralleantaja”) sekä
            Vuokralleottajan (myöhemmin ”Vuokralleottaja”) välillä, ellei osapuolten kesken ole kirjallisesti toisin
            sovittu. Näillä ehdoilla ei vähennetä kuluttajasuojalainsäädännön mukaisia kuluttajan oikeuksia.
            <br></br><br></br>
            2. Vuokrauksen kohde
            <br></br>
            Vuokrauksen kohteena on Vuokralleantajan ja Vuokralleottajan sopima kalusto sellaisenaan ja niine
            tarvikkeineen ja lisälaitteineen kuin vuokralleantaja on vuokrasopimusta tehtäessä kirjallisesti
            yksilöinyt. Vuokralleottaja on velvollinen kalustoa vastaanottaessaan tarkastamaan kaluston määrän,
            laadun ja kunnon. Mikäli kalusto antaa aihetta huomautuksiin, Vuokralleottajan on tehtävä siitä
            ilmoitus Vuokralleantajalle viipymättä. Mahdollinen vuokrahyvitys lasketaan siitä hetkestä, jolloin
            Vuokralleantaja saa kyseisen ilmoituksen.
            <br></br><br></br>
            3. Vuokra-aika
            <br></br>
            Vuokra-aika alkaa päivästä, jolloin kalusto noudetaan tai on ollut sovitusti noudettavissa
            Vuokralleantajan varastosta tai jolloin se sopimuksen mukaan lähetetään Vuokralleottajalle.
            Vuokra-aika päättyy päivänä, jolloin kalusto palautetaan kaikkine vuokrattuine tarvikkeineen
            Vuokralleantajalle. Vuokra-aikaan luetaan edellä mainitut nouto- ja palautuspäivät, ellei osapuolten
            välillä ole kirjallisesti toisin sovittu. Minimivuokra-aika on 1 päivä. Uusi vuokrapäivä alkaa kello 9.00.
            <br></br><br></br>
            4. Vuokrauskaluston luovuttaminen
            <br></br>
            Kalusto luovutetaan Vuokralleottajalle tai hänen valtuuttamalleen henkilölle sopimuksen mukaisena
            Vuokralleantajan varastosta, ellei osapuolten välillä ole sovittu kaluston kuljetuspalvelusta tai toisesta
            luovutuspaikasta. Vuokralleottaja vastaa kuljetuskustannuksista, ellei osapuolten välillä ole
            kirjallisesti toisin sovittu.
            <br></br><br></br>
            5. Vuokrauskaluston käyttö
            <br></br>
            Vuokralleottajan on tutustuttava laitteen vaatimuksiin ja pyydettäessä vuokralleantajan tarjoamiin
            turvaohjeisiin. Vuokralleottajan tulee käyttää kalustoa huolellisesti vain sille tarkoitettuun
            tavanomaiseen käyttöön, käyttää laitteita käyttöohjeiden mukaisesti ja puhdistaa kalusto käytön
            jälkeen. Tavanomaisia hoito- ja ylläpitotoimenpiteitä lukuun ottamatta Vuokralleottaja ei saa korjata
            tai kolmannella osapuolella korjauttaa vuokrakalustoa ilman Vuokralleantajan antamaa suostumusta.
            Vuokralleottajan tulee käyttää vuokraamaansa kalustoa vuokrasopimuksen mukaisessa kohteessa.
            Vuokralleottaja ei saa kuljettaa kalustoa omatoimisesti uusiin kohteisiin ilman uutta kirjallista
            sopimusta.
            <br></br><br></br>
            6. Vuokrauskaluston palauttaminen
            <br></br>
            Vuokralleottajan tulee palauttaa vuokrakalusto välittömästi vuokrakauden päättyessä puhdistettuna
            ja muutoin samassa kunnossa kuin se oli vuokralle luovutettaessa. Kalusto tulee palauttaa samaan
            varastoon, jossa vuokraus on tapahtunut, ellei osapuolten välillä ole sovittu kaluston
            kuljetuspalvelusta tai toisesta luovutuspaikasta. Vuokralleottaja vastaa kuljetuskustannuksista, ellei
            osapuolten välillä ole kirjallisesti toisin sovittu.
            <br></br><br></br>
            7. Vuokralleottajan vastuu
            <br></br>
            Vuokralleottaja on velvollinen noudattamaan kaluston turvallisuus- ja käyttöohjeita. Vuokralleottaja
            vastaa omalla kustannuksellaan työturvallisuus- ja muiden määräysten noudattamisesta.
            Vuokralleottaja on velvollinen korvaamaan vuokrakalustolle vuokra-aikana huolimattomasta
            käsittelystä ja puutteellisesta huollosta aiheutuneet vahingot ja kustannukset. Vuokralleottaja on
            velvollinen korvaamaan vuokra-aikana tuhoutuneen, kadonneen tai muuten palauttamatta jääneen
            kaluston sen uushankinta-arvoon ja on vastuussa Vuokralleantajalle aiheuttamastaan välillisestä ja
            välittömästä vahingosta. Vuokralleottajan tulee palauttaa vuokrauskalusto Vuokralleantajalle siinä
            kunnossa kuin se luovutettiin Vuokralleottajan käyttöön. Mikäli näin ei tapahdu, Vuokralleantajalla on
            oikeus periä Vuokralleottajalta vuokrakaluston puhdistus- ja kunnostuskustannukset.
            <br></br><br></br>
            8. Vuokralleantajan vastuu
            <br></br>
            Vuokralleantaja vastaa kaluston normaalista kulumisesta aiheutuvista korjauskustannuksista.
            Vuokralleantaja ei vastaa kaluston käytöstä tai rikkoutumisesta Vuokralleottajalle mahdollisesti
            aiheutuvista välillisistä tai välittömistä kustannuksista tai vahingoista.
            <br></br><br></br>
            9. Vakuutukset
            <br></br>
            Kalustoa ei ole Vuokralleantajan toimesta vakuutettu. Vakuutussuojaa halutessaan Vuokralleottajan
            tulee itse huolehtia kaluston asianmukaisesta vakuuttamisesta koko vuokra-ajalta, mahdolliset

            kuljetukset mukaan lukien. Mikäli Vuokralleantaja suorittaa kaluston kuljetuksen tai lähetyksen
            Vuokralleottajan lukuun, Vuokralleantajalla on oikeus vaatia, että Vuokralleottaja ottaa kalustolle
            kuljetusvakuutuksen.
            <br></br><br></br>
            10. Sopimusrikkomus
            <br></br>
            Mikäli Vuokralleottaja laiminlyö erääntyneiden vuokrien maksamisen tai muutoin olennaisesti rikkoo
            näitä ehtoja tai vuokrasopimuksen sisältöä, Vuokralleantajalla on oikeus heti purkaa vuokrasopimus ja
            ottaa vuokrakalusto takaisin haltuunsa Vuokralleottajaa kuulematta. Samanlainen oikeus
            Vuokralleantajalla on, jos Vuokralleottajan toiminta tai hänen taloudelliset olonsa osoittautuvat
            sellaisiksi, että on painavia syitä olettaa hänen laiminlyövän maksuvelvollisuutensa tai muuten
            jättävän sopimusvelvollisuutensa olennaisilta osilta täyttämättä. Vuokralleottaja on velvollinen
            korvaamaan vuokrasopimuksen purkamisesta Vuokralleantajalle syntyneet kustannukset.
            <br></br><br></br>
            11. Ylivoimainen este
            <br></br>
            Vuokralleantaja ei ole velvollinen täyttämään sopimusta, jos luonnoneste, tulipalo, vaurio tai siihen
            verrattava häiriö, lakko, työsulku, sota, liikekannallepano, vienti- tai tuontikielto, kuljetusvälineiden
            puute, valmistuksen lopettaminen, liikennehäiriö tai muu sellainen este, jota Vuokralleantaja ei voi
            voittaa, estää kaluston tai sen osan toimittamisen. Myös silloin, kun sopimuksen täyttäminen
            edellyttäisi uhrauksia, jotka ovat kohtuuttomia verrattuna Vuokralleottajalle siitä koituvaan etuun,
            Vuokralleantaja ei ole velvollinen täyttämään sopimusta. Vuokralleantaja ei ole velvollinen
            korvaamaan ylivoimaisesta esteestä Vuokralleottajalle sopimuksen täyttämättä jättämisestä
            aiheutunutta vahinkoa.
            <br></br><br></br>
            12. Vuokrasopimuksen siirtäminen
            <br></br>
            Vuokralleottajalla ei ole oikeutta siirtää vuokrasopimusta eikä luovuttaa vuokrakalustoa osaksikaan
            kolmannelle osapuolelle ilman Vuokralleantajan kirjallista suostumusta.
            <br></br><br></br>
            13. Riitaisuudet
            <br></br>
            Vuokralleottajan ollessa elinkeinonharjoittaja vuokrasopimuksesta johtuvat riitaisuudet ratkaistaan
            Vuokralleantajan kotipaikan alioikeudessa tai osapuolten niin halutessa ns. välimiesmenettelyä
            käyttäen. Vuokralleottajan ollessa yksityishenkilö riidat ratkaistaan kuluttajariitalautakunnassa tai
            vuokralleottajan kotipaikan alioikeudessa.
            <br></br><br></br>
            14. Veloitusperusteet
            <br></br>
            Perusvuokra on ensimmäisen päivän vuokra. Seuraavilta päiviltä peritään seuraavien päivien
            päivävuokra tai viikonloppuvuokra. Kaluston vuokrausperusteena pidetään pääsääntöisesti
            vuokrapäivää (24h), ellei vuokrasopimuksessa ole toisin sovittu. Vuokrasopimuksessa voidaan sopia
            erikseen kuukausivuokrasta, jolloin veloitusperusteena on kalenterikuukausi. Vuokralleottaja voi
            pyytää kuukausivuokraan siirtymistä myös vuokrasopimuksen syntymisen jälkeen, jolloin
            kalustovuokrauksesta tulee tehdä uusi kirjallinen sopimus. Uusi sopimus astuu voimaan sovitusta
            päivästä eteenpäin. Kuukausivuokraan siirtymistä ei voida toteuttaa jälkikäteen eikä
            laskutuskäytäntöä voida muuttaa taannehtivasti, ellei osapuolten välillä ole kirjallisesti toisin sovittu.
            Laskutamme vuokrasumman varauspäivänä, jonka maksuaika on 14vrk ellei osapuolten välillä ole
            kirjallisesti toisin sovittu. Mikäli Vuokralleottaja ei maksa palauta tuotetta määräaikana, maksetaan
            yliajalta todellista vuokra-aikaa vastaava lisäsumma tuotetta palautettaessa. Jos Vuokralleottajaksi
            ilmoitettu henkilö tai yhteisö ei suorita vuokraa, sopimuksen allekirjoittanut henkilö on vastuussa
            vuokran maksamisesta. Vuokralleantajalla on viivästyskoron lisäksi oikeus periä kohtuulliset
            perintäkulut.
            <br></br><br></br>
            15. Muut ehdot
            <br></br>
            Vuokralleottajan on todistettava henkilöllisyytensä. Vuokralleottaja antaa luvan luottotietojen
            kysymiseen. Vuokrakaluston kuljetuskustannukset eivät sisälly vuokraan.
            Tavanomaisessa vuokrauksessa vuokrasovintoon liittyvä sähköposti, tekstiviesti, tai muu kirjallinen
            viesti- tai viestiketju pätee osapuolten välisenä sovintona, mikäli se on selvästi todennettavissa. Mikäli
            sovinto on todennettavissa allekirjoituksella tai edellämainitulla tavalla,
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
