import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

    return (
            <div className="w-3 mx-3 mt-5.5">
                <button onClick={handleThemeToggle}>    
                {" "}
                {isDarkMode ? 
                (<Sun className="h-6 w-6 text-amber-600"/>): 
                (<Moon className="h-6 w-6 text-blue-300"/>)}
                </button>
            </div>
            
    );
}