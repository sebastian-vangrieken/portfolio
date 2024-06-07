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
            <p className="m-4 text-xl font-semibold">
                Sebastian Van Grieken
            </p>
            <ul className="flex flex-col items-center mb-2">
                <li className="my-1">
                    <a href="#" className="hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd"
                    >
                        Home
                    </a>
                </li>
                <li className="my-1">
                    <a href="#about" className="hover:border-b-2 
                    hover:border-highlightl dark:hover:border-highlightd"
                    >
                        Over mij
                    </a>
                </li>
                <li className="my-1">
                    <a href="#skills" className="hover:border-b-2 
                    hover:border-highlightl dark:hover:border-highlightd"
                    >
                        Skills
                    </a>
                </li>
                <li className="my-1">
                    <a href="#stage" className="hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd"
                    >
                        Stage
                    </a>
                </li>
                <li className="my-1">
                    <a href="#project4" className="hover:border-b-2 
                    hover:border-highlightl dark:hover:border-highlightd"
                    >
                        Project 4.0
                    </a>
                </li>
                <li className="my-1">
                    <a href="#angular" className="hover:border-b-2 
                    hover:border-highlightl dark:hover:border-highlightd"
                    >
                        Angular project
                    </a>
                </li>  
            </ul>
            <ThemeToggle toggleMode={toggleMode} />        
        </nav>
    )
}

export default Navbar