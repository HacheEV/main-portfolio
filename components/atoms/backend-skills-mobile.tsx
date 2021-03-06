import {useContext, useState} from "react";
import {classNames} from "../../utils/utils";
import Image from "next/image";
import Python from "../../public/assets/logos/python.svg";
import PHP from "../../public/assets/logos/php.svg";
import Java from "../../public/assets/logos/java.svg";
import Node from "../../public/assets/logos/node.svg";
import DarkModeContext from "../../context/mode-context";
import ThemeContext from "../../context/theme-context/theme-context";

export const BackendSkillsMobile = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    const [backend, setBackend] = useState<boolean>(false)
    const handleBackend = () => {
        if (backend) {
            setBackend(false)
        } else {
            setBackend(true)
        }
    }
    return (
        <>
            <div
                className={classNames("flex justify-center items-center flex-col absolute z-50 top-96 -right-14 mr-0 mt-8 w-52 h-52 rounded-full origin-bottom",
                        theme.bg ? theme.bg : "")}
                    >
                <p className="font-Bebas text-5xl">Backend</p>
                <button
                    aria-label="Push to see the backend skills"
                    onClick={handleBackend}
                    className="bg-dark-third text-white mt-5 rounded-full p-2"
                >
                    <p className="font-Montserrat text-md">Push</p>
                </button>
            </div>
            <div className={classNames("absolute w-14 h-14 z-20 top-[25.5rem] -right-16",
                backend ? "transition duration-[800ms] -translate-x-52 -translate-y-12" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image alt="Python logo" src={Python}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-[25.5rem] -right-16",
                backend ? "transition duration-[800ms] -translate-x-[14rem] translate-y-12" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image alt="PHP logo" src={PHP}/>
            </div>
            <div className={classNames("absolute w-14 h-14 z-20 top-[25.5rem] -right-16",
                backend ? "transition duration-[800ms] -translate-x-[14rem] translate-y-32" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image alt="Java logo" src={Java}/>
            </div>
            <div className={classNames("absolute w-20 h-20 z-24 top-[25.5rem] -right-16",
                backend ? "transition duration-[800ms] -translate-x-[10.5rem] translate-y-56" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image alt="Node logo" src={Node}/>
            </div>
        </>
    )
}