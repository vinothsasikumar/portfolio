interface ExperienceCardProps {
    role: string;
    company: string;
    duration: string;
    location?: string;
    techStack?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    role,
    company,
    duration,
    location,
    techStack,
}) => {
    return (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{role}</h3>
            <p className="text-sm text-zinc-500">{company} • {duration} {location && `• ${location}`}</p>           
            {techStack && (
                <div className="mt-4">
                    <p className="text-sm font-medium text-zinc-500">Technologies:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="bg-zinc-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded-full text-zinc-600 dark:text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceCard;