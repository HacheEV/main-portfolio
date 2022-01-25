import {Navbar} from "./navbar";
import Link from "next/link";
import {useContext} from "react";
import DarkModeContext from "../context/mode-context";
import {classNames} from "../utils/utils";

export const Contact = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)

    return (
        <>
            {/*DESKTOP*/}
            <div className="hidden md:block md:relative z-0 md:mt-20 mx-4 md:w-full md:h-64  md:my-4">
                <div
                    className={classNames("absolute z-0 bottom-0 left-0 flex items-center justify-center w-[90%] h-[70%] rounded-md shadow-[2px_3px_9px_0px_rgba(0,0,0,0.3)] shadow-accent-green",
                            darkMode ? "bg-dark-secondary text-white" : "bg-light-secondary text-black")}
                        >
                    <div className="md:-translate-x-12 lg:-translate-x-32">
                        <p className="font-Montserrat text-2xl italic font-bold mb-2">Ready to contact me?</p>
                        <p className="font-Montserrat md:text-2xl lg:text-3xl font-bold">Get start your project now!</p>
                    </div>
                </div>
                <div className={classNames("absolute z-20 top-24 right-0 w-[35%] h-[50%] rounded-md translate-x-7 shadow-md shadow-accent-green lg:translate-x-0",
                            darkMode ? "bg-dark-third" : "bg-light-third")}
                        >
                    <div className="flex justify-center items-center w-full h-full">
                        <button className={classNames("rounded-lg bg-dark-primary font-Montserrat text-1xl font-bold tracking-[0.15em] w-36 h-10 shadow-sm",
                            darkMode ? "bg-dark-primary text-white shadow-white" : "bg-light-primary text-black shadow-black"
                            )}>
                            <Link href="/contact">
                                <a> Contact</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/*MOBILE*/}
            <div className="block w-[87%] p-6 my-14 mx-5 flex flex-col bg-dark-third rounded-md md:hidden">
                <div className="w-[27ch] my-4 text-center">
                    <p className="font-Montserrat text-3xl text-white italic font-bold mb-2">Ready to contact me?</p>
                    <p className="font-Montserrat text-4xl text-white font-bold">Get start your project now!</p>
                </div>
                <div className="flex justify-center">
                    <button className="rounded-lg bg-dark-primary font-Montserrat text-2xl text-white font-bold tracking-[0.15em] w-44 h-14 mt-4 shadow-sm shadow-white">
                        <Link href="/contact">
                            <a> Contact</a>
                        </Link>
                    </button>

                </div>

            </div>

        </>

    )
}