import { ArrowUp } from "lucide-react";

export const Footer =()=> {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center" id="footer">
        {" "}
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} MichaelOdaba.com. All rights reserved.</p>

        <a href="#hero" className="hover:text-primary animate-bounce mr-6">
            <ArrowUp size={20}/>
        </a>
    </footer>
};