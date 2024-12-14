import { ProjectProps } from "../../../../types/project-interface";
import "./projectCard.css"

export default function ProjectCard({ title, description, githublink, liveDemo, techStack, imageUrl }: ProjectProps): JSX.Element {
    return (
        <div className="project-container">
            <div className="project-card">
                {imageUrl && <img src={imageUrl.toString()} alt={title.toString()} className="project-image" />}
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <div className="tech-stack">
                    {techStack.map((tech, index: number) => {
                        return <span key={index} className="tech-item">
                            {tech}
                        </span>
                    })}
                </div>
                <div className="project-links">
                    <a href={githublink.toString()} target="_blank" rel="noopener noreferrer" className="project-card-link">GitHub</a>
                    <a href={liveDemo.toString()} target="_blank" rel="noopener noreferrer" className="project-card-link">Live Demo</a>
                </div>
            </div>
        </div>
    )
}