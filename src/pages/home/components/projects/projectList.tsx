import ProjectCard from "./projectCard";

export default function ProjectList() {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'A e-commerce website',
            githubLink: 'https://github.com/dev-aswinreji/buzzbrewsandchills',
            liveDemo: 'http://localhost:3000',
            techStack: ['Nodejs', 'Expressjs', 'Embeddedjs'],
            imageUrl: ['/buzzbrewsandchills/buzz-home.png', '/buzzbrewsandchills/buzz-cart.png', '/buzzbrewsandchills/buzz-name-change.png', '/buzzbrewsandchills/buzz-profile.png', '/buzzbrewsandchills/buzz-orderlist.png'], // Optional
        },
        {
            title: 'Netflix Website Clone',
            description: 'Real-time chat app with WebSocket.',
            githubLink: 'https://github.com/dev-aswinreji/netflix-clone',
            liveDemo: 'https://chat-app-demo.com',
            techStack: ['Vite', 'TypeScript', 'React'],
            imageUrl: ['/netflix/netflix-home.png', '/netflix/netflix-signup.png', '/netflix/netflix-movie-list.png', '/netflix/netflix-signin.png']
        }, {
            title: "OLX Website Clone",
            description: "A personal portfolio to showcase my work.",
            githubLink: "https://github.com/username/portfolio",
            liveDemo: "https://portfolio-demo.com",
            techStack: ["React", "TypeScript", "Firebase"],
            imageUrl: ['/olx/olx-home.png', '/olx/olx-signin.png', '/olx/olx-sell.png', '/olx/olx-signup.png']
        },
        {
            title: "Youtube Application Clone",
            description: "Real-time chat app with WebSocket.",
            githubLink: "https://github.com/dev-aswinreji/youtube-clone",
            liveDemo: "https://chat-app-demo.com",
            techStack: ["Vite", "React", "TypeScript"],
            imageUrl: []
        },
        {
            title: "Todo App",
            description: "A weather app using public APIs.",
            githubLink: "https://github.com/dev-aswinreji/weather-app",
            liveDemo: "https://weather-demo.com",
            techStack: ["React", "OpenWeatherAPI", "Bootstrap"],
            imageUrl: []
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