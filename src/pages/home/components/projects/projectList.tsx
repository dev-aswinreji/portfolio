import ProjectCard from "./projectCard";

export default function ProjectList() {
    const github_username = import.meta.env.VITE_GITHUB_USERNAME
    const github_link = `https://github.com/${github_username}`
    const projects = [
        {
            title: "E-Commerce Website",
            description: "Online store with Node.js and EJS.",
            github_repo: "buzzbrewsandchills",
            liveDemo: "https://buzzbrewsandchills.onrender.com",
            techStack: ["Node.js", "Express.js", "Embedded.js"],
            imageUrl: ["/buzzbrewsandchills/buzz.png"]
        },
        {
            title: "Netflix Clone",
            description: "Movie streaming UI with React.",
            github_repo: "netflix-clone",
            liveDemo: "https://personal-portfolio-ar.vercel.app",
            techStack: ["Vite", "TypeScript", "React"],
            imageUrl: ["/netflix/netflix-home.png"]
        },
        {
            title: "OLX Clone",
            description: "Buy-sell platform with Firebase.",
            github_repo: "olx-clone",
            liveDemo: "https://olx-clone-ar.vercel.app",
            techStack: ["React", "Cloudinary", "Firebase"],
            imageUrl: ["/olx/olx-home.png"]
        },
        {
            title: "YouTube Clone",
            description: "Video streaming with React.",
            github_repo: "youtube-clone",
            liveDemo: "https://youtube-clone-ar.vercel.app",
            techStack: ["Vite", "React", "JavaScript"],
            imageUrl: ["/youtube/youtube.png"]
        },
        {
            title: "Rihla AI Planner",
            description: "AI-powered travel planner.",
            github_repo: "rihla-ai-frontend",
            liveDemo: "https://rihla-ai.vercel.app",
            techStack: ["React", "Beautiful Soup", "Python"],
            imageUrl: ["/rihla-ai/rihla-ai.png"]
        },
        {
            title: "Swiggy Clone",
            description: "Food-buying app with React",
            github_repo: "swiggy-clone",
            liveDemo: "https://swiggy-clone-ar.vercel.app",
            techStack: ["Redux", "React", "JavaScript"],
            imageUrl: ["/swiggy/swiggy.png"]
        }
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