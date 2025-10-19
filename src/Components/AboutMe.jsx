import { Briefcase, Code, Hammer } from "lucide-react"
import {User} from "lucide-react"

export const AboutMe =()=> {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <p className="font-bold mb-12 text-center text-2xl md:text-3xl">
                        About <span> </span>
                    <span className="text-primary"> 
                        Me 
                    </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-1.9xl font-semibold">Passionate Software Engineer</p>

                        <p className="text-muted-foreground">
                            With over 3 years of experience in software development, I specialize in creating stellar software applications using modern technologies.
                        </p>

                        <p>
                            I'm passionate about creating structured solutions to complex problems, and i am constantly learning new technologies and techniques to stay at the forefront of ever evolving tech landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="contact" className="my-button">
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>

                        </div>
                    </div>
                        
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Development</h4>
                                    <p>
                                        Creating premium software applications with mordern frameworks for web and mobile.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Hammer className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Scalable Applications</h4>
                                    <p>
                                        Creating structured and scalable applications with well structured documentation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                         <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p>
                                        Leading projects from conception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}