import { AboutMe } from "../Components/AboutMe";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactMe } from "../Components/ContactMe";
import { Footer } from "../Components/Footer";
import Qualifications from "../components/Qualifications";
import LightRays from "../components/ui/LightRays";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={2}
          rayLength={3}
          pulsating={false}
          fadeDistance={1.5}
          saturation={0.6}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.1}
          className="opacity-20"
        />
      </div>
      <div className="flex relative z-10 w-full flex-col md:flex-row">
        <Navbar />

        <main className="w-full pt-16 md:pt-0">
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
