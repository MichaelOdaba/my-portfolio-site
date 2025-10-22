import { Facebook, 
         Instagram, 
         Linkedin, 
         Loader, 
         Mail, 
         MapPin, 
         Phone, 
         Send, 
         Twitter, 
         User2 } from "lucide-react";


import { toast } from "../hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ContactMe =()=> {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)
        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon"
            })
            setIsSubmitting(false);
        }, 1500)
    }

    return <section className="py-24 px-4 relative bg-secondary/30" id="contact">
        <div className="container mx-auto max-w-5xl">
            <p className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></p>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            <span className="text-primary"> I'm always open to discussing new opportunities.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact <span className="text-primary">
                    Information</span></h3>

                    <div className="space-y-6 justify-center bg-card card-hover">
                        <div className="p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary *:"/>
                            {" "}
                            <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:odabamichael1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                odabamichael1@gmail.com
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="space-y-6 justify-center bg-card card-hover">
                        <div className="p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary"/>
                            {" "}
                            <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+234 9025345705" className="text-muted-foreground hover:text-primary transition-colors">
                                +234 9025345705
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="space-y-6 justify-center bg-card card-hover">
                        <div className="p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-primary *:"/>
                            {" "}
                            <div>
                            <h4 className="font-medium">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Makurdi, Benue State, Nigeria
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="pt-8 bg-card card-hover">
                        <User2 className="h-6 w-6 text-primary ml-3 "/>
                            {" "}
                        <h4 className="font-medium mb-4">Connect with Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/feed/" className="mb-4 hover:text-primary">
                                <Linkedin/>
                            </a>

                            <a href="" className="hover:text-primary">
                                <Twitter/>
                            </a>

                            <a href="https://www.instagram.com/Michaelodaba" className="hover:text-primary">
                                <Instagram/>
                            </a>

                            <a href="https://www.facebook.com/Michaelodaba" className="hover:text-primary">
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-6">Send a <span className="text-primary">Message</span></h3>
                    <div className="bg-card p-8 card-hover rounded-lg shadow-xs">
                        <form action="" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-medium mb-2">Your Name: </label>
                                <input type="text" 
                                        id="name" 
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="Michael Odaba"/>
                            </div>

                             <div>
                                <label htmlFor="email"
                                       className="block text-sm font-medium mb-2">Your Email: </label>
                                <input type="email" 
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="odabamichael@gmail.com"/>
                            </div>

                             <div>
                                <label htmlFor="message"
                                       className="block text-sm font-medium mb-2">Your Message: </label>
                                <textarea type="text" 
                                        id="message" 
                                        name="message"
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Hello Michael, i would like to talk about..."/>
                            </div>

                            <button type="submit" className={cn(
                                "my-button w-full flex items-center justify-center gap-2"
                            )}>
                                {isSubmitting ? <Loader size={16}/> : <Send size={16}/>}
                            </button>
                            <p className="font-thin italic">Cant recieve messages directly for now, still working on that feature....pls send directly through email. the link is on the left🙏</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
}