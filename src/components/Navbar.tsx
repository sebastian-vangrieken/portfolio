import ThemeToggle from "./ThemeToggle"

interface NavbarProps {
    toggleMode: () => void;
}

function Navbar({ toggleMode }: NavbarProps) {
    return (
        <nav className="relative flex flex-col items-center w-fit h-screen 
        text-textl bg-navbgl dark:bg-navbgd dark:text-textd"
        >
            <img src="./foto.jpg" alt="profiel foto" className="mt-8 rounded-full w-32 h-32" />
            <p className="m-4">
                Sebastian Van Grieken
            </p>
            <ul className="flex flex-col items-center mb-2">
                <li><a href="">Home</a></li>
                <li><a href="">Over mij</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Project 4.0</a></li>
                <li><a href="">Angular project</a></li>  
            </ul>
            <ThemeToggle toggleMode={toggleMode} />        
        </nav>
    )
}

export default Navbar