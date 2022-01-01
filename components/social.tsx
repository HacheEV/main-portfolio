
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Social = () => {
    // TODO: CHECK IF FINALLY THE ASIDE NAVBAR IS STICKY
    return (
        <div className="flex flex-col">
            <a href="#" className="mt-3">
                <FontAwesomeIcon className="text-accent-green text-4xl hover:translate-x-2 transition duration-300" icon={faGithub} />
            </a>
            <a href="#" className="mt-3">
                <FontAwesomeIcon className="text-accent-green text-4xl hover:translate-x-2 transition duration-300" icon={faLinkedinIn} />
            </a>
            <a href="#" className="mt-3">
                <FontAwesomeIcon className="text-accent-green text-4xl hover:translate-x-2 transition duration-300" icon={faWhatsapp} />
            </a>
        </div>
    )
}