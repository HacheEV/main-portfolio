import {Navbar} from "./navbar";
import {useRouter} from "next/router";
import Link from "next/link";

export const Footer = () => {
    const router = useRouter()
    const path = router.pathname

    return (
        <footer className="bg-dark-primary">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href={path == "/" ? "#skills" : "/#skills"} className="font-Bebas text-white text-2xl mx-8 hover:text-gray-500">
                            Skills
                        </a>
                        <a href={path == "/" ? "#works" : "/#works"}  className="font-Bebas text-white text-2xl mx-8 hover:text-gray-500">
                            Works
                        </a>
                        <Link href="/contact">
                            <a className="font-Bebas text-white text-2xl mx-8 hover:text-gray-500">
                                Contact
                            </a>
                        </Link>

                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 HEV Projects. All rights reserved.</p>
            </div>
        </footer>

    )
}