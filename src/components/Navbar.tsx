import ThemeToggle from "./ThemeToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

interface NavbarProps {
    toggleMode: () => void;
}

function Navbar({ toggleMode }: NavbarProps) {
    return (
        <nav className="relative flex flex-col items-center w-fit min-w-60 h-screen 
        text-textl bg-navbgl dark:bg-navbgd dark:text-textd"
        >
            <img src="./foto.jpg" alt="profiel foto" className="mt-8 rounded-full w-40 h-40 border-4 border-highlightl dark:border-highlightd" />
            <p className="m-4 text-xl font-semibold">
                Sebastian Van Grieken
            </p>
            <ul className="flex flex-col items-center mb-8">
                <li className="my-1">
                    <a href="#intro" className={`hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd`}
                    >
                        Home
                    </a>
                </li>
                <li className="my-1">
                    <a href="#about" className={`hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd`}
                    >
                        Over mij
                    </a>
                </li>
                <li className="my-1">
                    <a href="#skills" className={`hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd`}
                    >
                        Skills
                    </a>
                </li>
                <li className="my-1">
                    <a href="#stage" className={`hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd`}
                    >
                        Stage
                    </a>
                </li>
                <li className="my-1">
                    <a href="#project4" className={`hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd`}
                    >
                        Project 4.0
                    </a>
                </li>
                <li className="my-1">
                    <a href="#angular" className={`hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd`}
                    >
                        Angular project
                    </a>
                </li>
                <li className="my-1">
                    <a href="#unreal" className={`hover:border-b-2
                    hover:border-highlightl dark:hover:border-highlightd`}
                    >
                        Unreal engine course
                    </a>
                </li>  
            </ul>
            <div className="w-full flex justify-evenly">
                <a href="mailto:sebastian.vangrieken12@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} 
                        className="text-2xl
                        hover:text-highlightl dark:hover:text-highlightd" 
                    />
                </a>
                <a href="https://www.linkedin.com/in/sebastian-van-grieken/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} 
                        className="text-2xl
                        hover:text-highlightl dark:hover:text-highlightd" 
                    />
                </a>
                <a href="https://github.com/sebastian-vangrieken" target="_blank">
                    <FontAwesomeIcon icon={faGithub} 
                        className="text-2xl
                        hover:text-highlightl dark:hover:text-highlightd" 
                    />
                </a>
            </div>
            <ThemeToggle toggleMode={toggleMode} />        
        </nav>
    )
}

export default Navbar