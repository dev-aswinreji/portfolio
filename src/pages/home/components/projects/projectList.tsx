import ProjectCard from "./projectCard";

export default function ProjectList() {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'A e-commerce website',
            githubLink: 'https://github.com/dev-aswinreji/buzzbrewsandchills',
            liveDemo: 'http://localhost:3000',
            techStack: ['Nodejs', 'Expressjs', 'CSS', 'Embeddedjs'],
            imageUrl: './project-images/home.png', // Optional
        },
        {
            title: 'Chat Application',
            description: 'Real-time chat app with WebSocket.',
            githubLink: 'https://github.com/username/chat-app',
            liveDemo: 'https://chat-app-demo.com',
            techStack: ['Node.js', 'Express', 'WebSocket'],
            imageUrl: './project-images/alya.png'
        }, {
            title: "Portfolio Website",
            description: "A personal portfolio to showcase my work.",
            githubLink: "https://github.com/username/portfolio",
            liveDemo: "https://portfolio-demo.com",
            techStack: ["React", "TypeScript", "CSS"],
            imageUrl: './project-images/home.png', // Optional
        },
        {
            title: "Chat Application",
            description: "Real-time chat app with WebSocket.",
            githubLink: "https://github.com/username/chat-app",
            liveDemo: "https://chat-app-demo.com",
            techStack: ["Node.js", "Express", "WebSocket"],
            imageUrl: './project-images/home.png', // Optional
        },
        {
            title: "E-Commerce Website",
            description: "A fully functional e-commerce platform.",
            githubLink: "https://github.com/username/e-commerce",
            liveDemo: "https://ecommerce-demo.com",
            techStack: ["Next.js", "GraphQL", "Tailwind"],
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
            <div className="project-grid">
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