import { AboutMe } from "../components/AboutMe";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactMe } from "../components/ContactMe";
import {Footer} from "../components/Footer";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="flex">
          <Navbar/>  

        <main>
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <ProjectsSection/>
            <ContactMe/>
            <Extra/>
            <Footer/>
        </main>


        </div>
    </div>
};