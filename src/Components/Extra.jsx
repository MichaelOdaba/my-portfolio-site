const randomImages = [
    {   
        src: "",
        title: "",
        story: ""
        
    }
];

export const Extra =()=> {
    return <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl" id="extra">
                <p className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">?</span></p>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Random stuff, work experiences, embarrassing moments and <span className="text-glow text-primary">more</span></p>
                <div className="grid grid-cols-1 gap-12">
                    <div className="bg-card card-hover">

                    </div>

                    <div className="bg-card card-hover">

                    </div>

                </div>
            </div>
    </section>
}