

const skills = [
    {name: "HTML/CSS" , level: 80, category: "front-end"},
    {name: "Javascript" , level: 75, category: "front-end"},
    {name: "React" , level: 80, category: "front-end" },
    
    //backend
    {name: "Python" , level: 80, category: "back-end" },
    {name: "Django" , level: 60, category: "back-end" },
    {name: "Node.js" , level: 20, category: "back-end" },
    {name: "SQL" , level: 70, category: "back-end" },
    //Tools
    {name: "Git/Github", level: 95, category: "tools"},
    {name: "Figma", level: 50, category: "tools"},
    {name: "VS Code", level: 95, category: "tools"},
    {name: "Dbeaver", level: 50, category: "tools"},
    {name: "Postman", level: 70, category: "tools"}
];




export const Skills = () => {

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <p className="text-2xl md:text-3xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {skills.map((skill, key) => 
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover items-center">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            </div>
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_easeout]" style={{width: skill.level + "%"}}/>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div>
                                <p className="font-thin italic">
                                    {skill.category}
                                </p>
                            </div>

                        </div>
                    )}

                </div>

            </div>
        </section>
    );
}