import React, {useContext, useRef, useState} from 'react';
import "./contact.css";
import Phone from "../../img/icons/phone.png";
import  Email from "../../img/icons/email.png";
import emailjs from '@emailjs/browser';
import {ThemeContext} from "../context";

const Contact = () => {

    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const Swal = require('sweetalert2');
    const [isChecked, setIsChecked] = useState(false);

    const onChangeHandler = (fieldName, value)=>{

        if(fieldName === "name"){
            setName(value);
        }
        else if(fieldName==="email"){
            setEmail(value);
        }
        else if (fieldName === "subject")
        {
            setSubject(value);
        }
        else if (fieldName === "message")
        {
            setMessage(value);
        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="mailto:nana_kabenke@yahoo.fr">send a repport</a>'
            });
        }

    }
    const onSubmitHandler = (e)=> {
        e.preventDefault();
        if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && subject.trim() !== "") {

            if (!isChecked) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Bitte stimmen Sie den Nutzungsbedingungen zu!',
                });
                return;
            }
            else
            {
                setName("");
                setMessage("");
                setSubject("");
                setEmail("");
                setIsChecked(false);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sent',
                    text:'Danke für ihre kontakt wir werden uns freuen mit ihnen zu arbeiten',
                    showConfirmButton: true
                });
            }

        }

        emailjs.sendForm('service_u95xrjw', 'template_ry8jn8j', formRef.current, 'KQdtVp1qxFnW7XLu4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    return (
        <div className="c">
               <div className="c-bg"/>
                    <div className="c-wrapper">
                        <div className="c-left">
                            <h1 className="c-title">
                                Contact me
                            </h1>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <a style={{color: darkMode && "#fff"}} href="tel:+49(0)1788339670">
                                        <img src={Phone} alt="" className="c-icon"/>
                                        click to call me
                                    </a>
                                </div>
                                <div className="c-info-item">
                                    <a style={{color: darkMode && "#fff"}}  href="mailto:nana_kabenke@yahoo.fr">
                                        <img src={Email} alt="" className="c-icon"/>
                                        click to mail me
                                    </a>
                                </div>
                                <div className="c-info-sn">
                                    <ul className="c-info-list">
                                        <li><a style={{color: darkMode && "#fff"}} href="https://www.linkedin.com/in/stephane-ulrich-n-1b3579193" name="linkedIn"> LinkedIn</a></li>
                                        <li><a style={{color: darkMode && "#fff"}} href="https://www.xing.com/profile/StephaneUlrich_NanaKabenke/cv" name="xing"> Xing</a></li>
                                        <li><a style={{color: darkMode && "#fff"}} href="https://www.instagram.com/mr_oreox/" name="instagram"> Instagram</a></li>
                                        <li><a  style={{color: darkMode && "#fff"}} href="https://www.udemy.com/user/stephane-ulrich-nana-kabenke/" name="udemy"> Udemy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="c-rigth">
                            <div className="c-desc">
                                <p>
                                    <b>What about your story </b>
                                    tell me more about you
                                </p>
                            </div>
                            <form  ref={formRef} onSubmit={(e)=>{onSubmitHandler(e)}}>
                                <div className="text-field">
                                    <input  name="name" required style={{backgroundColor: darkMode && "#333"}} type="text" value={name}  onChange={(e)=>{ onChangeHandler("name",e.target.value)}} />
                                    <label className="floating-label">Name</label>
                                </div>
                                <div className="text-field">
                                    <input  name="subject" required style={{backgroundColor: darkMode && "#333"}} type="text" value={subject}  onChange={(e)=>{ onChangeHandler("subject",e.target.value)}} />
                                    <label className="floating-label">Subject</label>
                                </div>
                                <div className="text-field">
                                    <input  name="email" required style={{backgroundColor: darkMode && "#333"}} type="text" value={email}  onChange={(e)=>{ onChangeHandler("email",e.target.value)}} />
                                    <label className="floating-label">Email</label>
                                </div>
                                <textarea name="message"  type="text"  value={message} placeholder="Nachricht..." rows="10"
                                          onChange={(e)=>{ onChangeHandler("message",e.target.value)}} />
                                <div>
                                    <input
                                        type="checkbox"
                                        id="my-checkbox"
                                        aria-label="Select this checkbox to enable the feature"
                                        required
                                        checked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                    />
                                    <label className="check-label" title="
                                    Datenschutzerklärung

            Wir freuen uns, dass Sie unsere Webseite besuchen und bedanken uns für Ihr Interesse an unserem Unternehmen.
            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Personenbezogene Daten sind alle Daten,
            die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.

                                    Verantwortlicher

                                    Verantwortlicher im Sinne der DSGVO ist:

                                        Stephane Kabenke
                                        Musterstraße 1
                                        12345 Musterstadt
                                        Deutschland

                                        Tel.: +49 (0) 123 456789
                                        E-Mail: stephane.kabenke@tu-dortmund.de

                                        Datenschutzbeauftragter

                                        Unseren Datenschutzbeauftragten erreichen Sie wie folgt:

                                        Stephane Mustermann
                                        Musterstraße 1
                                        12345 Musterstadt
                                        Deutschland

                                        Tel.: +49 (0) 123 456789
                                        E-Mail: datenschutz@musterfirma.de

            Zwecke und Rechtsgrundlagen der Datenverarbeitung

            Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen. Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder zur Erfüllung unserer vertraglichen Verpflichtungen (Art. 6 Abs. 1 lit. b DSGVO). Wir verwenden Ihre Daten insbesondere zur Abwicklung von Bestellungen, zur Lieferung von Waren und zur Erbringung von Dienstleistungen.

            Datenweitergabe an Dritte

            Eine Übermittlung Ihrer Daten an Dritte erfolgt nur im Rahmen der gesetzlichen Bestimmungen oder aufgrund Ihrer ausdrücklichen Einwilligung. Eine Weitergabe Ihrer Daten an Dritte zum Zwecke der Werbung oder Markt- und Meinungsforschung erfolgt nicht.

            Dauer der Datenspeicherung

            Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder solange dies gesetzlich vorgeschrieben ist. Nach Wegfall des jeweiligen Zwecks werden Ihre Daten gelöscht oder gesperrt.

            Ihre Rechte als betroffene Person

            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten.

            Beschwerderecht bei der Aufsichtsbehörde

            Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.

            Änderungen der Datenschutzerklärung

            Wir behalten uns vor, diese Datenschutzerklärung jederzeit und ohne Angabe von Gründen zu ändern. Die jeweils aktuelle Version finden Sie auf unserer Webseite.

            Stand: [Datum]

            Ich hoffe, das Beispiel hilft Ihnen weiter! Bitte beachten Sie jedoch, dass eine Datenschutzerklärung immer an die spezifischen Gegebenheiten und Anforderungen der betreff







                                    ">
                                        Ich stimme die <a href="#" id="blocked-link" style={{color: darkMode && "#ffffff"}}>Datenschutzerklärung</a> zu (*)
                                    </label>
                                </div>


                                <div>
                                    <input  required className="c-form-bt"  type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
      );
   };

export default Contact;
