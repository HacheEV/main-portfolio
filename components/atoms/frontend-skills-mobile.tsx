import {classNames} from "../../utils/utils";
import Image from "next/image";
import React from "../../public/assets/logos/react-brands.svg";
import Html from "../../public/assets/logos/html-test.png";
import CSS from "../../public/assets/logos/css.svg";
import JS from "../../public/assets/logos/js.png";
import WP from "../../public/assets/logos/wordpress.png";
import {useContext, useState} from "react";
import DarkModeContext from "../../context/mode-context";
import ThemeContext from "../../context/theme-context/theme-context";

export const FrontendSkillsMobile = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    const [front, setFront] = useState<boolean>(false)
    const handleFrontend = () => {
        if(front){
            setFront(false)
        }else{
            setFront(true)
        }
    }
    return(
        <>
            <div
                className={classNames("flex justify-center items-center flex-col absolute z-50 top-0 left-0 ml-4 mt-8 w-52 h-52 rounded-full origin-bottom ",
                    theme.bg ? theme.bg : "")}

            >
                <p className="font-Bebas text-5xl">Frontend</p>
                <button
                    onClick={handleFrontend}
                    className="bg-dark-third text-white mt-5 rounded-full p-2 animate-pulse"
                >
                    <p className="font-Montserrat text-md">Push</p>
                </button>
            </div>
            <div className={classNames("absolute w-20 h-20 z-20 top-8 left-40",
                front ? "transition duration-[800ms] translate-x-12 -translate-y-16" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image src={React}/>
            </div>
            <div className={classNames("absolute w-14 h-14 z-20 top-8 left-44",
                front ? "transition duration-[800ms] translate-x-16 translate-y-8" :
                    "transition duration-[850ms] ease-in -translate-x-16 translate-y-6",
                darkMode ? "invert" : "")}>
                <Image src={Html}/>
            </div>
            <div className={classNames("absolute w-14 h-14 z-20 top-8 left-44",
                front ? "transition duration-[800ms] translate-x-16 translate-y-32" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image src={CSS}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-8 left-44",
                front ? "transition duration-[800ms] translate-x-2 translate-y-52" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image src={JS}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-8 left-44",
                front ? "transition duration-[800ms] -translate-x-20 translate-y-60" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image src={WP}/>
            </div>
        </>

        )

}