import { ArrowDown } from "lucide-react"

export const HeroSection =()=> {
    
    return <section id="hero" className="relative min-h-screen flex flex-col items-center w-dvw justify-center">

                {/* add a reactbits component */}
                <div className="h-40 w-40 mb-16 rounded-full mt-3">
                    <img src="/public/projects/profile3.jpg" alt="my handsome Image😏" className="rounded-4xl border-primary border-2 hover:border-green-500" />
                </div>

                <div className="h-full mb-12">
                    <h1 className="text-5xl font-bold"><span className="text-glow">Hi</span>, i am <span className="text-primary">Michael</span> Odaba</h1>
                    <h2 className="mt-3 font-serif mt-6">I create stellar software experiences with modern technologies for web and mobile, i build applications that are beautiful, functional and scalable.</h2>
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