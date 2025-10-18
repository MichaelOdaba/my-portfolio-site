import { ExternalLink, Github } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "Leave Management App",
        Description: "A leave management app using React, Typescript and Django rest framework",
        image: "/public/projects/Projects1.png",
        tags: ["React", "TailwindCSS", "Typescript", "Django", "PostgresSQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Portfolio Site",
        Description: "A beautiful portfolio site built using react and TailwindCSS",
        image: "/public/projects/Screenshot (28).png",
        tags: ["React", "TailwindCSS", "Vercel"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Dummy App",
        Description: "A leave management app using React, Typescript and Django rest framework",
        tags: ["React", "TailwindCSS", "Supabase"],
        image: "/public/projects/Projects1.png",
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection =()=> {
    return  <section id="projects" className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                <p className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    My <span className="text-primary">Projects</span>
                </p>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects, Each project was carefully crafted with attention to <span className="text-primary">detail, performance, and user experience.</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt= {project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foregrond text-sm mb-4 ">
                                {project.Description}
                            </p>
                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl}
                                         target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
           </section>
}