import "./footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const github_username = import.meta.env.VITE_GITHUB_USERNAME
    const linkedn_username = import.meta.env.VITE_LINKEDN_USERNAME
    const twitter_username = import.meta.env.VITE_TWITTER_USERNAME
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-tagline">Crafted using ChatGPT</p>
                <div className="footer-icons">
                    <a
                        href={`https://github.com/${github_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="footer-icon-link"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={`https://linkedin.com/in/${linkedn_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="footer-icon-link"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="footer-icon-link"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Aswin Reji. All rights reserved.
            </p>
        </footer>
    );
}
