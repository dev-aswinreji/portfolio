import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import "./contact.css";

export default function Contact() {
    return (
        <div id="contact" className="contact-section">
            <h1 className="contact-heading">Contact Me</h1>
            <p className="contact-subheading">I'd love to hear from you!</p>
            <div className="contact-info">
                <div className="contact-item">
                    <MdMail className="contact-icon" />
                    <a href="" className="contact-link">
                    </a>
                </div>
                <div className="contact-item">
                    <MdPhone className="contact-icon" />
                    <a href="tel:" className="contact-link">
                        {import.meta.env.VITE_PHONENUMBER}
                    </a>
                </div>
                {/* <div className="contact-item">
                    <MdLocationOn className="contact-icon" />
                    <span className="contact-text">City, Country</span>
                </div> */}
            </div>
        </div>
    );
}
