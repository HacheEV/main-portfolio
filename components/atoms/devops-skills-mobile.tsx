import {classNames} from "../../utils/utils";
import Image from "next/image";
import ReactWhite from "../../public/assets/logos/react2.png";
import Html from "../../public/assets/logos/html-test.png";
import CSS from "../../public/assets/logos/css.svg";
import JS from "../../public/assets/logos/js.png";
import WP from "../../public/assets/logos/wordpress.png";
import {useContext, useState} from "react";
import Docker from "../../public/assets/logos/docker.svg";
import Git from "../../public/assets/logos/git.svg";
import Jira from "../../public/assets/logos/jira.svg";
import Cypress from "../../public/assets/logos/cypress.png";
import DarkModeContext from "../../context/mode-context";
import ThemeContext from "../../context/theme-context/theme-context";

export const DevopsSkillsMobile = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    const [devops, setDevops] = useState<boolean>(false)
    const handleFrontend = () => {
        if(devops){
            setDevops(false)
        }else{
            setDevops(true)
        }
    }
    return(
        <>
            <div
                className={classNames("flex justify-center items-center flex-col absolute z-50 top-[45rem] -left-4 ml-4 mt-8 w-52 h-52 rounded-full origin-bottom",
                        theme.bg ? theme.bg : "")}

            >
                <p className="font-Bebas text-5xl">Devops</p>
                <button
                    onClick={handleFrontend}
                    className="bg-dark-third text-white mt-5 rounded-full p-2 animate-pulse"
                >
                    <p className="font-Montserrat text-md">Push</p>
                </button>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-[45rem] left-44",
                devops ? "transition duration-[800ms] translate-x-12 -translate-y-6" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image src={Docker}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-[45rem] left-44",
                devops ? "transition duration-[800ms] translate-x-[4.5rem] translate-y-24" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image src={Git}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-[45rem] left-44",
                devops ? "transition duration-[800ms] translate-x-12 translate-y-52" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "invert" : "")}>
                <Image src={Jira}/>
            </div>
            <div className={classNames("absolute w-32 h-32 z-20 top-[46rem] left-40",
                devops ? "transition duration-[800ms] -translate-x-28 translate-y-72" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12",
                darkMode ? "" : "invert")}>
                <Image src={Cypress}/>
            </div>
        </>

        )

}