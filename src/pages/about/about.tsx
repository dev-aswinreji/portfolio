import './about.css'

export default function About() {
    return (
<div className="about-container">
    <h2 id='about' className="about-heading">About Me</h2>
    <div className="education-container">
        <div className="education-item">
            <div className="education-item-content">
                <h3>Bacherlor of Science in Physics</h3>
                <p>Kuriakose Gregorious College,Kerala</p>
                <p>India</p>
            </div>
        </div>
        <div className="education-item">
            <div className="education-item-content">
                <h3>Higher Secondary (Science)</h3>
                <p>PVS Higher Secondary School,Kerala</p>
                <p>India</p>
            </div>
        </div>
    </div>
</div>
    )
}
