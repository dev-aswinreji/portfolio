import ProjectCard from "./projectCard";

export default function ProjectList() {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'A e-commerce website',
            githubLink: 'https://github.com/dev-aswinreji/buzzbrewsandchills',
            liveDemo: 'http://localhost:3000',
            techStack: ['Nodejs', 'Expressjs', 'Embeddedjs'],
            imageUrl: './project-images/home.png', // Optional
        },
        {
            title: 'Netflix Website Clone',
            description: 'Real-time chat app with WebSocket.',
            githubLink: 'https://github.com/dev-aswinreji/netflix-clone',
            liveDemo: 'https://chat-app-demo.com',
            techStack: ['Vite', 'TypeScript', 'React'],
            imageUrl: './project-images/netflix/netflix-home.png'
        }, {
            title: "OLX Website Clone",
            description: "A personal portfolio to showcase my work.",
            githubLink: "https://github.com/username/portfolio",
            liveDemo: "https://portfolio-demo.com",
            techStack: ["React", "TypeScript", "Firebase"],
            imageUrl: './project-images/home.png', // Optional
        },
        {
            title: "Youtube Application Clone",
            description: "Real-time chat app with WebSocket.",
            githubLink: "https://github.com/dev-aswinreji/youtube-clone",
            liveDemo: "https://chat-app-demo.com",
            techStack: ["", "React", "WebSocket"],
            imageUrl: './project-images/home.png', // Optional
        },
        {
            title: "Weather App",
            description: "A weather app using public APIs.",
            githubLink: "https://github.com/username/weather-app",
            liveDemo: "https://weather-demo.com",
            techStack: ["React", "OpenWeatherAPI", "Bootstrap"],
            imageUrl: './project-images/home.png', // Optional
        },
    ];
    return (
        <>
            <h1 className="project-heading" style={{ textAlign: "center" }}>Projects</h1>
            <div className="project-container">
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            githublink={project.githubLink}
                            liveDemo={project.liveDemo}
                            techStack={project.techStack}
                            imageUrl={project.imageUrl}
                        />
                    ))
                }
            </div>
        </>
    )
}