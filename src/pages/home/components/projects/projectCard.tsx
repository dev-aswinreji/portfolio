import { useEffect, useState } from "react";
import { ProjectProps } from "../../../../types/project-interface";

import "./projectCard.css"

export default function ProjectCard({ title, description, githublink, liveDemo, techStack, imageUrl }: ProjectProps): JSX.Element {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [imageUrl.length]);

    return (
        <div className="project-card">
            {/* <div className="project-image-container"> */}
            <img src={"./project-images" + imageUrl[currentImageIndex]?.toString()}
                alt={`${title} screenshot`}
                className="project-image"
            />
            {/* </div> */}
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-description">{description}</p>
            <div className="tech-stack">
                {techStack.map((tech, index: number) => {
                    if (tech === 'Expressjs') {
                        return <a key={index} href={`https://${tech}.com`} className="tech-item" target="_blank">
                            {tech}
                        </a>
                    } else if (tech === 'Embeddedjs') {
                        return <a key={index} href={`https://ejs.co`} className="tech-item" target="_blank">
                            {tech}
                        </a>
                    } else if (tech === 'Firebase') {
                        return <a key={index} href={`https://${tech}.google.com`} className="tech-item" target="_blank">
                            {tech}
                        </a>
                    } else if (tech === "Bootstrap") {
                        return <a key={index} href={`https://getbootstrap.com`} target="_blank" className="tech-item">
                            {tech}
                        </a>
                    }
                    return <a key={index} href={`https://${tech}.dev`} target="_blank" className="tech-item">
                        {tech}
                    </a>
                })}
            </div>
            <div className="project-links">
                <a href={githublink.toString()} target="_blank" rel="noopener noreferrer" className="project-card-link">GitHub</a>
                <a href={liveDemo.toString()} target="_blank" rel="noopener noreferrer" className="project-card-link">Live Demo</a>
            </div>
        </div>
    )
}