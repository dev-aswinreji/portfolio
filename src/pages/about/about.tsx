import './about.css'

export default function About() {
    return (
        <div className="about-container">
            {/* <a className='resume' href="./file.pdf" download="aswinreji-resume.pdf">Download</a> */}
            <h2 id='about' className="about-heading">About Me</h2>
            <div className="education-container">
                <div className="education-item">
                    <div className="education-item-content">
                        <h3>Web Development</h3>
                        <p>Brototype, Bangalore</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-item-content">
                        <h3>Bachelor of Science in Physics</h3>
                        <p>Kuriakose Gregorious College, Kerala</p>
                        <p>India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
