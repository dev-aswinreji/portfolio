import ProjectCard from "./projectCard";

export default function ProjectList() {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'A e-commerce website',
            githubLink: 'https://github.com/dev-aswinreji/buzzbrewsandchills',
            liveDemo: 'http://localhost:3000',
            techStack: ['Nodejs', 'Expressjs', 'CSS','Embeddedjs'],
            imageUrl: './project-images/home.png', // Optional
        },
        {
            title: 'Chat Application',
            description: 'Real-time chat app with WebSocket.',
            githubLink: 'https://github.com/username/chat-app',
            liveDemo: 'https://chat-app-demo.com',
            techStack: ['Node.js', 'Express', 'WebSocket'],
        },
    ];
    return (
        <div className="project-list">
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
    )
}