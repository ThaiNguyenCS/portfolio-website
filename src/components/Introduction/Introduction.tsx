import portraitAvt from "../../assets/chandung.jpg";
import styles from "./Introduction.module.css";

export default function Introduction() {
    return (
        <section className="w-full mx-auto px-10 py-4 h-screen">
            <div className="flex flex-row justify-center">
                <div className="basis-3/4">
                    <h1 className="text-4xl font-bold text-center mt-10">Hello world, I'm Thai Nguyen</h1>
                    <p className="text-lg mt-4">
                        I'm currently a final year student at the Ho Chi Minh City University of Technology, VNU-HCM,
                        majoring in Computer Science.
                    </p>
                </div>
                <div className="basis-1/4">
                    <img
                        src={portraitAvt}
                        alt="A description of the image"
                        className={`rounded-lg shadow-lg ${styles["avt-holder"]}`}
                    />
                </div>
            </div>
        </section>
    );
}
