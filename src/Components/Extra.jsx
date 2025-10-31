import { ArrowLeft, ArrowRight } from "lucide-react"

const images = [
    {
        src: "/public/projects/RandomImages/Random1.jpg",
        description: "A picture of me playing the piano in service.....Fun fact: i play the piano and i have been told i am good at it🙂"
    },
    {
        src: "/public/projects/RandomImages/Random2.jpg",
        description: "A picture of me standing......Fun fact i am 6'3 in height😲"
    },
    {
        src: "/public/projects/RandomImages/Random3.jpg",
        description: "Me protecting my ears from damage during service😅"
    },
    {
        src: "/public/projects/RandomImages/Random4.jpg",
        description: "Let it rain🤑🫰😏"
    },
    {
        src: "/public/projects/RandomImages/Random5.jpg",
        description: "Soft fingers😏"
    },
    {
        src: "/public/projects/RandomImages/Random6.jpg",
        description: "Nice watch😏"
    },
    {
        src: "/public/projects/RandomImages/Random7.jpg",
        description: "Me playing the piano in 2023 at my church's annual convention"
    },
    {
        src: "/public/projects/RandomImages/Random8.jpg",
        description: "I started playing the piano at the age of 12"
    },
    
]
export const Extra =()=> {

    return <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl" id="extra">
                <p className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">?</span></p>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Extra photos and fun stuff about <span className="text-glow text-primary">me</span></p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            images.map((image, key) => (
                                <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover all mt-3 mb-3 flex w-full h-auto flex-col">
                                    <img src={image.src} alt={image.description} key={key} className="w-full group-hover:scale-110 transition-transform duration-500"/>
                                    <h2 className="text-1.6xl p-3">{image.description}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
    </section>
}
