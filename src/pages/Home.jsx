import { AboutMe } from "../Components/AboutMe";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { Skills } from "../Components/Skills";
import { ProjectsSection } from "../Components/ProjectsSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="flex">
          <Navbar/>  

        <main>
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <ProjectsSection/>
        </main>
        </div>
    </div>
};