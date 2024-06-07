import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

interface ThemeToggleProps {
    toggleMode: () => void;
}

function ThemeToggle({ toggleMode }: ThemeToggleProps) {
    return (
        <button className="absolute bottom-4 w-fit py-1 rounded-full border-2
        bg-navbgl border-highlightl dark:bg-themeToggled dark:border-themeToggleborderd"
        onClick={toggleMode}
        >
            <FontAwesomeIcon icon={faSun} className="mx-3
            text-highlightl dark:text-navbgd" 
            />
            <FontAwesomeIcon icon={faMoon} className="mx-3
            text-navbgl dark:text-highlightd" 
            />
        </button>
    )
}

export default ThemeToggle;