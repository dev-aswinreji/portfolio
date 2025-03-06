import { MdMail, MdPhone } from "react-icons/md";
import "./contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const phonenumber = import.meta.env.VITE_PHONENUMBER
    const email = import.meta.env.VITE_EMAIL
    const github_username = import.meta.env.VITE_GITHUB_USERNAME
    const linkedn_username = import.meta.env.VITE_LINKEDN_USERNAME
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
                    <a href={`https://linkedin.com/in/${linkedn_username}`} target="_blank" className="contact-link">
                        LinkedIn
                    </a>
                    <FaGithub className="contact-icon" />
                    <a href={`https://github.com/${github_username}`} target="_blank" className="contact-link">
                        GitHub
                    </a>
                </div>
                <div className="contact-item">
                    <a href="resume_01.pdf" target="_blank" className="contact-link">
                        View Resume
                    </a>
                </div>
                <div className="contact-item">
                    <a href="resume_01.pdf" download={"resume_01.pdf"} className="contact-link">
                        Download Resume
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
