import SkillItem from "../common/SkillItem/SkillItem";
import jsLogo from "../../assets/skill-images/js.png";
import tsLogo from "../../assets/skill-images/typescript.png";
import pythonLogo from "../../assets/skill-images/python.png";
import mysqlLogo from "../../assets/skill-images/mysql.svg";
import postgresqlLogo from "../../assets/skill-images/postgresql.svg";
import javaLogo from "../../assets/skill-images/java.svg";
import golangLogo from "../../assets/skill-images/golang.svg";
import cppLogo from "../../assets/skill-images/c.svg";
import reactLogo from "../../assets/skill-images/react.svg";
import githubLogo from "../../assets/skill-images/github.svg";
import gitLogo from "../../assets/skill-images/git.svg";
import swaggerLogo from "../../assets/skill-images/swagger.svg";
import redisLogo from "../../assets/skill-images/redis.svg";
import dockerLogo from "../../assets/skill-images/docker.svg";
import gitlabLogo from "../../assets/skill-images/gitlab.svg";
import Slider from "../common/Slider";

const LanguageSkills = [
    {
        name: "React",
        image: reactLogo,
    },
    {
        name: "Javascript",
        image: jsLogo,
    },
    {
        name: "Typescript",
        image: tsLogo,
    },
    {
        name: "Python",
        image: pythonLogo,
    },
    {
        name: "Java",
        image: javaLogo,
    },
    {
        name: "Golang",
        image: golangLogo,
    },
    {
        name: "PostgreSQL",
        image: postgresqlLogo,
    },
    {
        name: "C++",
        image: cppLogo,
    },
    {
        name: "MySQL",
        image: mysqlLogo,
    },
];

const ToolsSkills = [
    {
        name: "Swagger",
        image: swaggerLogo,
    },
    {
        name: "Redis",
        image: redisLogo,
    },
    {
        name: "Docker",
        image: dockerLogo,
    },
    {
        name: "Github",
        image: githubLogo,
    },
    {
        name: "Git",
        image: gitLogo,
    },
    {
        name: "GitLab",
        image: gitlabLogo,
    },
];

export default function Skill() {
    return (
        <section className="w-full mx-auto pb-10">
            <h1 className="text-center">My Skills</h1>
            <div className="flex flex-col gap-6">
                <Slider direction="rtl">
                    {LanguageSkills.map((skill, index) => (
                        <SkillItem key={index} skillName={skill.name} skillImage={skill.image} />
                    ))}
                </Slider>
                <Slider direction="ltr">
                    {ToolsSkills.map((skill, index) => (
                        <SkillItem key={index} skillName={skill.name} skillImage={skill.image} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}
