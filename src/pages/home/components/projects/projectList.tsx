import ProjectCard from "./projectCard";

export default function ProjectList() {
    const github_username = import.meta.env.VITE_GITHUB_USERNAME
    const github_link = `https://github.com/${github_username}`
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'A e-commerce website',
            github_repo: 'buzzbrewsandchills',
            liveDemo: 'http://localhost:3000',
            techStack: ['Nodejs', 'Expressjs', 'Embeddedjs'],
            imageUrl: ['/buzzbrewsandchills/buzz-home.png']
            // , '/buzzbrewsandchills/buzz-cart.png', '/buzzbrewsandchills/buzz-name-change.png', '/buzzbrewsandchills/buzz-profile.png', '/buzzbrewsandchills/buzz-orderlist.png'], // Optional
        },
        {
            title: 'Netflix Website Clone',
            description: 'Real-time chat app with WebSocket.',
            github_repo: 'netflix-clone',
            liveDemo: 'https://github.io/dev-aswinreji/netflix-clone',
            techStack: ['Vite', 'TypeScript', 'React'],
            imageUrl: ['/netflix/netflix-home.png',]
            //  '/netflix/netflix-signup.png', '/netflix/netflix-movie-list.png', '/netflix/netflix-signin.png']
        }, {
            title: "OLX Website Clone",
            description: "A personal portfolio to showcase my work.",
            github_repo: "olx-clone",
            liveDemo: "https://portfolio-demo.com",
            techStack: ["React", "TypeScript", "Firebase"],
            imageUrl: ['/olx/olx-home.png',]
            //  '/olx/olx-signin.png', '/olx/olx-sell.png', '/olx/olx-signup.png']
        },
        {
            title: "Youtube Application Clone",
            description: "Real-time chat app with WebSocket.",
            github_repo: "youtube-clone",
            liveDemo: "https://chat-app-demo.com",
            techStack: ["Vite", "React", "TypeScript"],
            imageUrl: ['/saitama.png']
        },
        {
            title: "Todo App",
            description: "A weather app using public APIs.",
            github_repo: "todo-app",
            liveDemo: "https://weather-demo.com",
            techStack: ["React", "OpenWeatherAPI", "Bootstrap"],
            imageUrl: ["/saitama.png", "/saitama.png"]
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
                            githublink={`${github_link}/${project.github_repo}`}
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