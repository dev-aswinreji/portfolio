import { MdMail, MdPhone } from "react-icons/md";
import "./contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const phonenumber = import.meta.env.VITE_PHONENUMBER
    const email = import.meta.env.VITE_EMAIL
    const github = import.meta.env.VITE_GITHUB
    const linkedn = import.meta.env.VITE_LINKEDN
    return (
        <div id="contact" className="contact-section">
            <h1 className="contact-heading">Contact Me</h1>
            <p className="contact-subheading">I'd love to hear from you!</p>
            <div className="contact-info">
                <div className="contact-item">
                    <MdMail className="contact-icon" />
                    <a href={`mailto:${email}`} target="_blank" className="contact-link">
                        {email}
                    </a>
                </div>
                <div className="contact-item">
                    <MdPhone className="contact-icon" />
                    <a href={`tel:${phonenumber}`} target="_blank" className="contact-link">
                        {phonenumber}
                    </a>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <a href={`${linkedn}`} target="_blank" className="contact-link">
                        Linkedn
                    </a>
                    <FaGithub className="contact-icon" />
                    <a href={`${github}`} target="_blank" className="contact-link">
                        GitHub
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
