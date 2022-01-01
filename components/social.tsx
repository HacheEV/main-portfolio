
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Social = () => {
    // TODO: CHECK IF FINALLY THE ASIDE NAVBAR IS STICKY
    return (
        <div className="flex flex-col">
            <a href="#" className="my-1">
                <FontAwesomeIcon className="text-accent-green text-3xl hover:translate-x-2 transition duration-300 hover:text-5xl hover:border-2 rounded-md border-accent-green hover:p-1" icon={faGithub} />
            </a>
            <a href="#" className="my-1">
                <FontAwesomeIcon className="text-accent-green text-3xl hover:translate-x-2 transition duration-300 hover:text-5xl hover:border-2 rounded-md border-accent-green hover:p-1" icon={faLinkedinIn} />
            </a>
            <a href="#" className="my-1">
                <FontAwesomeIcon className="text-accent-green text-3xl hover:translate-x-2 transition duration-300 hover:text-5xl hover:border-2 rounded-md border-accent-green hover:p-1" icon={faWhatsapp} />
            </a>
        </div>
    )
}