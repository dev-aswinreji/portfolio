import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.css";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const linkedn = import.meta.env.VITE_LINKEDN_USERNAME
    const github_username = import.meta.env.VITE_GITHUB_USERNAME


    // Load the initial theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark-mode");
        }
    }, []);

    // Handle theme toggle
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    };

    const handleScrollToSection = (id: string) => {

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar" style={{ position: "sticky" }}>
            <div className="nav-left">Aswin Reji</div>
            <div className="nav-right">
                <a onClick={() => handleScrollToSection("about")} className="nav-icon">About</a>
                <a onClick={() => handleScrollToSection("contact")} className="nav-icon">Contact</a>
                <a
                    href={`https://github.com/${github_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-icon"
                >
                    <FaGithub />
                </a>
                <a
                    href={`https://linkedin.com/in/${linkedn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-icon"
                >
                    <FaLinkedin />
                </a>
                <button className="dark-mode-icon" onClick={toggleDarkMode} style={darkMode ? { color: "white" } : { color: "black" }}>
                    {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>
            </div>
        </nav>
    );
}

