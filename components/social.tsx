
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {useContext} from "react";
import ThemeContext from "../context/theme-context/theme-context";
import {classNames} from "../utils/utils";

export const Social = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="flex flex-col ml-4 md:ml-12">
            <a href="https://github.com/HacheEV" className="mt-3" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={classNames(theme.text ? theme.text : "", "text-4xl hover:translate-x-2 transition duration-300")} icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/hector-esquerdo-valverde-8543131a6/" className="mt-3" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={classNames(theme.text ? theme.text : "", "text-4xl hover:translate-x-2 transition duration-300")} icon={faLinkedinIn} />
            </a>
            <a href="https://wa.me/34623176914" className="mt-3" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={classNames(theme.text ? theme.text : "", "text-4xl hover:translate-x-2 transition duration-300")} icon={faWhatsapp} />
            </a>
        </div>
    )
}