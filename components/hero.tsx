import MediumGreen from "../public/assets/medium-green.png";
import MySelf from "../public/assets/personal-2_web.webp";
import Image from "next/image";
import {useContext, useState} from "react";
import DarkModeContext from "../context/mode-context";
import {classNames} from "../utils/utils";
import ThemeContext from "../context/theme-context/theme-context";
import LanguageContext from "../context/language-context/language-context";

export const Hero = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    const {language, dispatchLanguage} = useContext(LanguageContext)

    return (
        <div className={classNames("flex flex-col justify-evenly mt-20 md:flex-row-reverse",
                    darkMode ? "text-white" : "text-black")}
                >
            <div className="relative -mr-40 -mt-12">
                <div
                    className="absolute bottom-28 left-20 w-[10.5rem] sm:w-[13rem] md:w-[18rem] md:bottom-30 md:left-24 lg:w-[21rem] lg:-top-16">
                    <Image alt="Picture of Hector" src={MySelf}/>
                </div>
                <div className="ml-6 w-[19rem] sm:w-[21rem] md:w-[27.5rem] md:ml-8 md:mt-10 md:mr-6 lg:w-[32rem] lg:mt-2">
                    <Image alt="Rounded and colored image" src={theme ? theme.image : null}
                           className="hover:scale-[96%] hover:transition-transform hover:duration-300"></Image>
                </div>
            </div>
            <div className="flex flex-col ml-8 -mt-2 md:w-1/2 md:mr-6 md:pt-2">
                <h1 className="font-Bebas text-5xl mb-2 lg:text-6xl ">Hector Esquerdo </h1>
                <h2 className="font-Montserrat mb-4 text-4xl lg:text-3xl">Fullstack developer </h2>
                <p className="font-Montserrat  leading-8 text-xl md:text-lg md:leading-6 lg:my-4 lg:text-xl">{language.hero}
                </p>
                <a
                    href="/assets/hector_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                >
                    <button
                        className={classNames("font-Montserrat text-white w-40 h-10 mt-5 rounded-[10px] shadow-sm lg:mt-6",
                            darkMode ? "bg-dark-third text-white" : "bg-light-third text-black",
                            theme.shadow ? theme.shadow : "")}
                            >{language.heroButton}
                    </button>

                </a>
            </div>
        </div>
    )
}