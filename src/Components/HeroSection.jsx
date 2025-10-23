import { ArrowDown } from "lucide-react"
import SplitText from "./ui/SplitText"
import DecryptedText from "./ui/DecryptedText";

export const HeroSection =()=> {

    const handleAnimationComplete = () => {
  
};
    
    return <section id="hero" className="relative min-h-screen flex flex-col items-center w-dvw justify-center">

                {/* add a reactbits component */}
                <div className="h-40 w-40 mb-16 rounded-full mt-3">
                    <img src="projects/profile3.jpg" alt="my handsome Image😏" className="rounded-4xl border-primary border-2 hover:border-green-500" />
                </div>

                <div className="h-full mb-12">
                    <SplitText
                        text="Hi, I am Michael Odaba"
                        className="text-2xl font-semibold text-center font-heading sm:text-4xl"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />

                    <div className="mt-2">
                    <DecryptedText
                    text="I build stellar applications for web and mobile that are scalable and beautiful using modern technologies"
                    animateOn="view"
                    revealDirection="center"
                    className="text-sm"
                    />
                    </div>
                  
                </div>
             
                

                <div>
                    <a href="#projects" className="my-button opacity-0 animate-fade-in-delay-4 p-4">
                        View My Work
                    </a>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <a href="#footer">
                    <ArrowDown className="h-5 w-5 text-primary"/>
                    </a>
                </div>
            </section>
}