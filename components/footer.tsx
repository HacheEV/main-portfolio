import {Navbar} from "./navbar";

export const Footer = () => {
    return (
        <footer className="bg-dark-primary">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="#skills" className="font-Bebas text-white text-2xl mx-8 hover:text-gray-500">
                            Skills
                        </a>
                        <a href="#works"  className="font-Bebas text-white text-2xl mx-8 hover:text-gray-500">
                            Works
                        </a>
                        <a href="#"  className="font-Bebas text-white text-2xl mx-8 hover:text-gray-500">
                            Contact
                        </a>
                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 HEV Projects. All rights reserved.</p>
            </div>
        </footer>

    )
}