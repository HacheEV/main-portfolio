import FadeSide from "./fade-side";
import {classNames} from "../../utils/utils";
import {useContext, useState} from "react";
import { Transition } from "@headlessui/react";
import DarkModeContext from "../../context/mode-context";
import ThemeContext from "../../context/theme-context/theme-context";

interface WorkCardProps {
    className?: string;
    isSectionVisible:boolean;
    background:string;
    shadowColor:string;
    projectLink:string;
    delay:string;
    title:string;

}
export const WorkCard = ({isSectionVisible, background, shadowColor, projectLink, className, delay, title}:WorkCardProps) => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    const [product, setProduct] = useState<boolean>(false);

    return(
            <Transition
                show={isSectionVisible}
                enter={classNames("transition-all ease-linear duration-1000", delay)}
                enterFrom="opacity-0 transform -translate-x-14"
                enterTo="opacity-100 transform translate-x-0"
            >
            <div className={classNames("relative w-72 h-60 m-2 z-0 p-2 md:w-80 md:h-64 ", className)}
                 onMouseEnter={(e) => product ? null : setProduct(true)}
                 onMouseLeave={(e) => !product ? null : setProduct(false)}
            >
                <h3 className={classNames("font-Montserrat text-2xl font-semibold ml-8 mb-2",
                        darkMode ? "text-white" : "text-black")}
                    >{title}</h3>
                <div
                    className={classNames("w-full h-44 rounded-lg bg-cover bg-no-repeat p-2 opacity-75 top-0 left-0 z-10 shadow-md",
                        theme.shadow ? theme.shadow : "", background)}
                >
                </div>
                <div
                    className={classNames("sm:hidden lg:block lg:absolute bottom-0 left-0 lg:bg-dark-third lg:flex justify-center items-center",
                        product ? "w-[95%] h-32 ml-2 transition duration-[800ms] -translate-y-12 opacity-50 "
                            : "w-[95%] h-6 ml-2 transition duration-[1200ms] ease-in translate-y-0 opacity-5")}>
                    {product ? (
                        <>
                            <button
                                className="sm:hidden lg:block lg:opacity-100 lg:text-white lg:text-lg lg:border-2 border-white rounded-lg lg:w-32 h-10">
                                <a href={projectLink} target="_blank" rel="noreferrer">Visit</a>
                            </button>
                        </>
                    ) : (null)}
                </div>
                <div
                    className="absolute bottom-6 left-0 bg-dark-third opacity-50 w-[95%] h-24 ml-2 flex justify-center items-center lg:hidden">
                    <>
                        <button
                            className="opacity-100 text-white border-2 border-white rounded-lg w-14 h-10">
                            <a href={projectLink} target="_blank" rel="noreferrer">Web</a>
                        </button>
                    </>
                </div>
            </div>
        </Transition>
    )
}