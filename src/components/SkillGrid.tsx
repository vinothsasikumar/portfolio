import SkillCard from "./SkillCard";

const skills = [
    { title: ".NET & C#", description: "Expert in backend APIs and enterprise solutions" },
    { title: "JavaScript & TypeScript", description: "Core technologies for full stack development" },
    { title: "Angular & React", description: "Modern SPA development using framework and library" },
    { title: "SQL Server & MongoDB", description: "Relational and NoSQL database design & optimization" },
    { title: "Azure & Cloud Services", description: "Cloud infrastructure, deployment & DevOps pipelines" },
    { title: "Kafka & Microservices", description: "Event-driven architecture and scalable system design" },
    { title: "AI & Gen AI", description: "Applied ML, AI, and generative AI integration for automation" },
    { title: "Team Leadership & Mentorship", description: "Leading dev teams, mentoring juniors, and project planning" },
    // { title: "Project Management (Aspiring)", description: "Transitioning to combine technical expertise with strategic execution" }
];


const SkillGrid = () => {
    return (
        <div className="w-[90%] lg:w-[50%] p-6 bg-[#0f172a] rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} description={skill.description} />
                ))}
            </div>
        </div>
    );
};

export default SkillGrid;
