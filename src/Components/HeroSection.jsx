import { ArrowDown } from "lucide-react"

export const HeroSection =()=> {
    
    return <section id="hero" className="relative min-h-screen flex flex-col items-center w-dvw justify-center">

                {/* add a reactbits component */}
                

                <div>
                    <a href="#projects" className="my-button opacity-0 animate-fade-in-delay-4 p-4">
                        View My Work
                    </a>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <ArrowDown className="h-5 w-5 text-primary"/>
                </div>
            </section>
}