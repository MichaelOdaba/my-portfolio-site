import { ThemeToggle } from "../components/ThemeToggle"


export const NotFound =() => {
    return <>
        <div className="lg:mr-73">
          <ThemeToggle/>
        </div>
        <h1 className="text-2xl mt-5">This page was not <span className="text-primary">found.....😥</span></h1>
    </>
}