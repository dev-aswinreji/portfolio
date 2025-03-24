import "./skills.css";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3, FaJs, FaYarn, FaGithub } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiFirebase, SiTypescript, SiBootstrap, SiEjs, SiHttpie, SiPostman, SiCloudinary, SiNginx, SiDeno, SiExpress, SiNestjs, SiPrisma, SiJsonwebtokens, SiSocketdotio } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { DiDocker } from "react-icons/di";

export default function Skills() {
    const skills = [
        {
            category: "Frontend Development",
            icons: [<FaReact />, <SiBootstrap />, <FaHtml5 />, <FaCss3 />, <SiEjs />, <FaJs />, <SiTypescript />]
        },
        {
            category: "Backend Development",
            icons: [<FaNodeJs />, <SiExpress />, <SiNginx />, <SiNestjs />, <SiJsonwebtokens />]
        },
        {
            category: "Database and Storage",
            icons: [<SiMongodb />, <SiPostgresql />, <SiFirebase />, <SiCloudinary />]
        },
        {
            category: "Tools & Deployment",
            icons: [<FaGitAlt />, <FaAws />, <SiHttpie />, <SiPostman />, <SiDeno />, <FaYarn />, <FaGithub />, <FiFigma />, <DiDocker />, <SiPrisma />]
        },
        {
            category: "Real-Time Communication",
            icons: [<SiSocketdotio />]
        }
    ];

    return (
        <div className="skills-container">
            <h1 className="skills-heading">Skills</h1>
            {skills.map((skill, index) => (
                <div key={index} className="skill-category">
                    <h2 className="skill-category-heading">{skill.category}</h2>
                    <div className="skill-icons">
                        {skill.icons.map((icon, i) => (
                            <div key={i} className="skill-icon">{icon}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
