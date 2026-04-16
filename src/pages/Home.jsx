import { AboutMe } from "../components/AboutMe";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactMe } from "../components/ContactMe";
import { Footer } from "../components/Footer";
import Qualifications from "../components/Qualifications";
import PixelBlast from "../components/ui/PixelBlast";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="circle"
          color="#ffffff"
          pixelSize={4}
          patternDensity={0.85}
          speed={0.5}
          enableRipples={true}
          rippleIntensityScale={0.8}
          transparent={true}
          className="opacity-50"
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
