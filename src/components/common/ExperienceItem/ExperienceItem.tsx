import workIcon from "../../../assets/work-icon.svg";

export default function ExperienceItem({
    title,
    company,
    duration,
}: {
    title: string;
    company: string;
    duration: string;
}) {
    return (
        <div className={`flex flex-row relative bg-white w-full items-start`}>
            <div className={`z-11 relative bg-white`}>
                <img src={workIcon} alt="Experience Icon" className="w-10 h-10" />
            </div>
            <div className={`flex flex-col rounded-lg border-3 p-4 flex-1 ml-4`}>
                <div className={`flex flex-row justify-between items-center`}>
                    <h3>{title}</h3>
                    <p className="italic text-gray-600 font-medium">{duration}</p>
                </div>
                <div className="font-medium">{company}</div>
                <ul className="list-disc list-inside">
                    <li>Description 1</li>
                    <li>Description 2</li>
                </ul>
            </div>
        </div>
    );
}
