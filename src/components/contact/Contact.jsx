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

            setName("");
            setMessage("");
            setSubject("");
            setEmail("");
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sent',
                showConfirmButton: false,
                timer: 1789
            });
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
               <div className="c-bg"></div>
                    <div className="c-wrapper">
                        <div className="c-left">
                            <h1 className="c-title">
                                Contact me
                            </h1>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <a style={{color: !darkMode && "#fff"}} href="tel:+49(0)1788339670">
                                        <img src={Phone} alt="" className="c-icon"/>
                                        click to call me
                                    </a>
                                </div>
                                <div className="c-info-item">
                                    <a style={{color: !darkMode && "#fff"}}  href="mailto:nana_kabenke@yahoo.fr">
                                        <img src={Email} alt="" className="c-icon"/>
                                        click to mail me
                                    </a>
                                </div>
                                <div className="c-info-sn">
                                    <ul>
                                        <li><a style={{color: !darkMode && "#fff"}} href="https://www.linkedin.com/in/stephane-ulrich-n-1b3579193" name="linkedIn"> LinkedIn</a></li>
                                        <li><a style={{color: !darkMode && "#fff"}} href="https://www.xing.com/profile/StephaneUlrich_NanaKabenke/cv" name="xing"> Xing</a></li>
                                        <li><a style={{color: !darkMode && "#fff"}} href="https://www.instagram.com/mr_oreox/" name="instagram"> Instagram</a></li>
                                        <li><a  style={{color: !darkMode && "#fff"}}href="https://www.udemy.com/user/stephane-ulrich-nana-kabenke/" name="udemy"> Udemy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="c-rigth">
                            <div className="c-desc">
                                <p>
                                    <b>What about your story </b>
                                    tell me more about you
                                </p>
                            </div>
                            <form  ref={formRef} onSubmit={(e)=>{onSubmitHandler(e)}}>
                                <input  name="name" required style={{backgroundColor: !darkMode && "#333"}} type="text" value={name} placeholder="Name "
                                       onChange={(e)=>{ onChangeHandler("name",e.target.value)}} />
                                <input name="subject" required style={{backgroundColor: !darkMode && "#333"}} type="text" value={subject} placeholder="Subject "
                                       onChange={(e)=>{ onChangeHandler("subject",e.target.value)}} />
                                <input name="email"  style={{backgroundColor: !darkMode && "#333"}} type="email"  value={email} placeholder="Email "
                                       onChange={(e)=>{ onChangeHandler("email",e.target.value)}} />
                                <textarea name="message"  type="text"  value={message} placeholder="Message" rows="10"
                                       onChange={(e)=>{ onChangeHandler("message",e.target.value)}} />
                                <input required className="c-form-bt"  type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
        </div>
      );
   };

export default Contact;
