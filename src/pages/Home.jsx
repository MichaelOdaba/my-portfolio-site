import { AboutMe } from "../Components/AboutMe";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactMe } from "../Components/ContactMe";
import { Footer } from "../Components/Footer";
import Qualifications from "../components/Qualifications";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="flex">
        <Navbar />

        <main>
          <HeroSection />

          <AboutMe />
          <Skills />
          <ProjectsSection />
          <Qualifications />
          <ContactMe />
          <Footer />
        </main>
      </div>
    </div>
  );
};
