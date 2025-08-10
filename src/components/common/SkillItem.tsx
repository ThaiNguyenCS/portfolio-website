export default function SkillItem({ skillName, skillImage }: { skillName: string; skillImage: string }) {
    return (
        <div className="flex flex-row items-center bg-amber-100 p-2 rounded w-fit shrink-0">
            <img src={skillImage} alt="Skill" className="w-7 h-7 rounded-xs" />
            <small className="ml-3">{skillName}</small>
        </div>
    );
}
