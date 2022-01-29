import {Navbar} from "./navbar";
import Link from "next/link";
import {useContext} from "react";
import DarkModeContext from "../context/mode-context";
import {classNames} from "../utils/utils";
import ThemeContext from "../context/theme-context/theme-context";
import LanguageContext from "../context/language-context/language-context";

export const Contact = () => {
    const {darkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)

    return (
        <>
            {/*DESKTOP*/}
            <div className="hidden md:block md:relative z-0 md:mt-20 mx-4 md:w-full md:h-64  md:my-4">
                <div
                    className={classNames("absolute z-0 bottom-0 left-0 flex items-center justify-center w-[90%] h-[70%] rounded-md shadow-[2px_3px_9px_0px_rgba(0,0,0,0.3)]",
                            darkMode ? "bg-dark-secondary text-white" : "bg-light-secondary text-black",
                        theme.shadow ? theme.shadow : ""
                        )}
                        >
                    <div className="md:-translate-x-12 lg:-translate-x-32">
                        <p className="font-Montserrat text-2xl italic font-bold mb-2">{language.contactFirst}</p>
                        <p className="font-Montserrat md:text-2xl lg:text-3xl font-bold">{language.contactSecond}</p>
                    </div>
                </div>
                <div className={classNames("absolute z-20 top-24 right-0 w-[35%] h-[50%] rounded-md translate-x-7 shadow-md lg:translate-x-0",
                            darkMode ? "bg-dark-third" : "bg-light-third",
                    theme.shadow ? theme.shadow : ""
                    )}
                        >
                    <div className="flex justify-center items-center w-full h-full">
                        <button className={classNames("rounded-lg bg-dark-primary font-Montserrat text-1xl font-bold tracking-[0.15em] w-36 h-10 shadow-sm",
                            darkMode ? "bg-dark-primary text-white shadow-white" : "bg-light-primary text-black shadow-black"
                            )}>
                            <Link href="/contact">
                                <a>{language.contactButton}</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/*MOBILE*/}
            <div className="block w-[88%] p-6 my-14 flex flex-col bg-dark-third rounded-md ml-10 relative z-50 sm:w-[85%] md:hidden">
                <div className="my-2 ml-0 sm:-ml-2 text-center sm:">
                    <p className={classNames("font-Montserrat italic font-bold mb-2 text-2xl",
                            darkMode ? "text-white" : "text-black"
                        )}>{language.contactFirst}</p>
                    <p className={classNames("font-Montserrat italic font-bold mb-2 text-3xl",
                        darkMode ? "text-white" : "text-black"
                    )}>{language.contactSecond}</p>
                </div>
                <div className="flex justify-center">
                    <button className="rounded-lg bg-dark-primary font-Montserrat text-xl text-white font-bold tracking-[0.15em] w-36 h-12 mt-4 shadow-sm shadow-white">
                        <Link href="/contact">
                            <a>{language.contactButton}</a>
                        </Link>
                    </button>

                </div>

            </div>

        </>

    )
}