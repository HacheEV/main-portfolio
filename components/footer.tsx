import {Navbar} from "./navbar";
import {useRouter} from "next/router";
import Link from "next/link";
import {useContext} from "react";
import DarkModeContext from "../context/mode-context";
import LanguageContext from "../context/language-context/language-context";
import {classNames} from "../utils/utils";

export const Footer = () => {
    const {darkMode} = useContext(DarkModeContext)
    const {language} = useContext(LanguageContext)
    const router = useRouter()
    const path = router.pathname

    return (
        <footer className={classNames("ml-10 relative z-50", darkMode ? "bg-dark-primary text-white" : "bg-light-primary text-black")}>
            <div className="py-12 px-4 text-xl sm:px-6 lg:px-8">
                <nav className="flex justify-center" aria-label="Footer">
                    <div>
                        <a href={path == "/" ? "#skills" : "/#skills"} className="text-xl font-Bebas mx-2 sm:mx-4 sm:text-2xl hover:text-gray-500">
                            {language.navbar[0]}
                        </a>
                        <a href={path == "/" ? "#works" : "/#works"}  className="text-xl font-Bebas mx-2 sm:mx-4 sm:text-2xl hover:text-gray-500">
                            {language.navbar[1]}
                        </a>
                        <Link href="/contact">
                            <a className="text-xl font-Bebas mx-2 sm:mx-4 sm:text-2xl hover:text-gray-500">
                                {language.navbar[2]}
                            </a>
                        </Link>

                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 HEV Projects. All rights reserved.</p>
            </div>
        </footer>

    )
}