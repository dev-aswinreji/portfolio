import { FaGithub, FaLinkedin } from "react-icons/fa"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">Aswin Reji</div>
            <div className="nav-right">
                <a href="#about" className="nav-icon">About</a>
                <a href="#contact" className="nav-icon">Contact</a>
                <a href="https://github.com/dev-aswinreji" target="_blank" className="nav-icon">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/dev-aswinreji" target="_blank" className="nav-icon">
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    )
}