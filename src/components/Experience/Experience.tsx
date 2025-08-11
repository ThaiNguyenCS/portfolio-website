import ExperienceItem from "../common/ExperienceItem/ExperienceItem";

export default function Experience() {
    return (
        <section className="bg-white w-full px-10 py-4">
            <h1 className="text-center">Experience</h1>
            <div className="flex flex-col gap-6 relative">
                <div className="w-0.5 absolute left-4.75 top-[10px] bottom-0  bg-black z-10"></div>

                <ExperienceItem title="Software Engineer" company="ABC Corp" duration="Jan 2020 - Present" />
                <ExperienceItem title="Software Engineer" company="ABC Corp" duration="Jan 2020 - Present" />
                <ExperienceItem title="Software Engineer" company="ABC Corp" duration="Jan 2020 - Present" />
            </div>
        </section>
    );
}
