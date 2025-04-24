type SkillCardProps = {
    title: string;
    description: string;
};

const SkillCard = ({ title, description }: SkillCardProps) => {
    return (
        <div className="rounded-2xl p-4 bg-gradient-to-br from-[#1f2937]/60 to-[#111827]/60 backdrop-blur-md border border-white/10 hover:shadow-lg hover:shadow-mart-yellow/20 transition-all duration-300 cursor-pointer text-center flex flex-col justify-between items-center">
            <h3 className="text-mart-yellow font-semibold text-lg mb-1">{title}</h3>
            <p className="text-sm text-white/70">{description}</p>
        </div>
    );
};

export default SkillCard;
