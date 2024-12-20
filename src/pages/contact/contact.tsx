import { MdMail } from "react-icons/md"

export default function Contact() {
    return (

        <div className="#contact" style={{ textAlign: "center" }}>
            <h1>Contact Me</h1>
            <span style={{display:"block"}}>
                <MdMail />
            </span>
            <a target="_blank" style={{ textDecoration: "none" }} href="mailto:aswinreji.004@gmail.com">aswinreji.004@gmail.com</a>
        </div>
    )
}