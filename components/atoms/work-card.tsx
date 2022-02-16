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
    projectLink:string;
    delay:string;
    title:string;

}
export const WorkCard = ({isSectionVisible, background, projectLink, className, delay, title}:WorkCardProps) => {
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
            <div className={classNames("relative w-64 h-60 md:w-80 z-0 p-2 ml-8", className)}
                 onMouseEnter={(e) => product ? null : setProduct(true)}
                 onMouseLeave={(e) => !product ? null : setProduct(false)}
            >
                <h2 className={classNames("font-Montserrat text-2xl font-semibold ml-8 mb-2",
                        darkMode ? "text-white" : "text-black")}
                    >{title}</h2>
                <div
                    className={classNames("w-full h-44 rounded-lg bg-cover bg-center bg-no-repeat bg-clip-padding p-4 opacity-75 top-0 left-0 z-10 shadow-md md:h-52 lg:h-60",
                        theme.shadow ? theme.shadow : "", background)}
                >
                </div>
                {/*TRANSITION GREY MOBILE*/}
                <div
                    className={classNames("sm:hidden lg:block lg:absolute bottom-0 left-0 lg:bg-dark-third lg:flex justify-center items-center",
                        product ? "w-[95%] h-24 ml-2 transition duration-[800ms] -translate-y-6 opacity-50 "
                            : "w-[95%] h-6 ml-2 transition duration-[1200ms] ease-in translate-y-4 opacity-0")}>
                    {product ? (
                        <>
                            <button
                                className="sm:hidden lg:block lg:opacity-100 lg:text-white lg:text-lg lg:border-2 border-white rounded-lg lg:w-32 h-10">
                                <a href={projectLink} target="_blank" rel="noreferrer">Web</a>
                            </button>
                        </>
                    ) : (null)}
                </div>
                {/*TRANSITION GREY MOBILE*/}
                <div
                    className="absolute bottom-6 left-0 bg-dark-third opacity-50 w-[94%] h-24 ml-2 flex justify-center items-center md:w-[95%] lg:hidden">
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