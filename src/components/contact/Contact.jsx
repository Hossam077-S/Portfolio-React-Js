import { useState } from "react";
import "./contact.scss";
import "../rubberband/rubberband.css";
import RubberbandContact from "./RubberbandContact";

const Contact = () => {
    const [meesage, setMeesage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMeesage(true);
    }

    const handleSendMessage = () => {
        alert("Message Send :) ");
    }
    
    return (
        <div className="contact" id="contact">
            <RubberbandContact />
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2 className="con1" id="con1">Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input id="con2" type="text" placeholder="Email" />
                    <textarea id="con3" placeholder="Message"></textarea>
                    <a href={handleSendMessage}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>

                    {meesage && <span>Thanks, I'll reply ASAP :) </span>}
                </form>
            </div>
        </div>
    );
}

export default Contact
