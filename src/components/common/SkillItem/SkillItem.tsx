import { useState } from "react";
import styles from "./SkillItem.module.css";

export default function SkillItem({ skillName, skillImage }: { skillName: string; skillImage: string }) {
    const [hover, setHover] = useState(false);
    return (
        <div className={` flex flex-row items-center bg-[#F7F7F7] p-2 rounded w-fit shrink-0`}>
            <img
                src={skillImage}
                alt="Skill"
                style={{
                    transform: hover ? "rotate(22deg) scale(1.1)" : "rotate(0deg) scale(1)",
                }}
                className={`${styles["skill-icon"]} w-7 h-7 rounded-xs`}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            />
            <small className="ml-3">{skillName}</small>
        </div>
    );
}
