import Image from 'next/image'
import darkLogo from '../public/assets/dark-logo.png'

export const Navbar = () => {
    return (
        <nav className="flex justify-between font-Montserrat text-white text-3xl">
            <div className="flex">
                <div className="m-2">
                    <Image src={darkLogo} width={125} height={100}/>
                </div>
                <div className="mt-10 mr-4 py-2 h-14 navbar-link">
                    <a href="#"> Skills</a>
                </div>
                <div className="mt-10 mr-4 py-2 h-14 navbar-link">
                    <a href="#"> Work</a>
                </div>
                <div className="mt-10 mr-4 py-2 h-14 navbar-link">
                    <a href="#"> Contact</a>
                </div>

            </div>
            <div>
                <button className="text-accent-green m-2"> Dark</button>
                <button className="text-accent-green m-2"> Settings</button>
            </div>

        </nav>
    )
}