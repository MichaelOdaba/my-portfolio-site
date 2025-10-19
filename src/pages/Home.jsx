import { AboutMe } from "../Components/AboutMe";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { Skills } from "../Components/Skills";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactMe } from "../Components/ContactMe";
import { Extra } from "../Components/Extra";


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
        </main>
        </div>
    </div>
};