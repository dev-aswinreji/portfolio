import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import "./contact.css";

export default function Contact() {
    const phonenumber = import.meta.env.VITE_PHONENUMBER
    const email = import.meta.env.VITE_EMAIL
    return (
        <div id="contact" className="contact-section">
            <h1 className="contact-heading">Contact Me</h1>
            <p className="contact-subheading">I'd love to hear from you!</p>
            <div className="contact-info">
                <div className="contact-item">
                    <MdMail className="contact-icon" />
                    <a href={`mailto:${email}`} className="contact-link">
                        {email}
                    </a>
                </div>
                <div className="contact-item">
                    <MdPhone className="contact-icon" />
                    <a href={`tel:${phonenumber}`} className="contact-link">
                        {phonenumber}
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
