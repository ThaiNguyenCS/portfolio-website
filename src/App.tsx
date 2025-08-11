import "./App.css";
import { AutoBgm } from "./components/BackgroundMusic/BackgroundMusic";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";

function App() {
    return (
        <>
            <AutoBgm />
            <div className="flex flex-col items-center">
                <Header />
                <Introduction />
                <Skill />
                <Experience />
                <Project />
                <Footer />
            </div>
        </>
    );
}

export default App;
