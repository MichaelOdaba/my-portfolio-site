import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="flex">
            <ThemeToggle/>
            <Navbar/>

            <main>
                <HeroSection/>
            </main>
        </div>
    </div>
};