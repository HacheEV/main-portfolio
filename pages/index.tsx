import type {NextPage} from 'next'
import { Hero } from '../components/hero';
import {Navbar} from "../components/navbar";
import { Skills } from '../components/skills';
import {Social} from "../components/social";
import {Works} from "../components/works";
import {Contact} from "../components/contact";
import {Footer} from "../components/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import {useContext, useState} from "react";
import DarkModeContext from "../context/mode-context";
import {classNames} from "../utils/utils";
import ThemeContext from "../context/theme-context/theme-context";

const Home: NextPage = () => {
    const {darkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    return (
            <div className={classNames("grid grid-cols-9 grid-rows-6 grid-flow-col w-full h-screen overflow-x-hidden",
                        darkMode ? "bg-dark-primary" : "bg-light-primary")}
                    >
                <div className="flex flex-col sticky top-0 row-span-6 col-span-1 h-screen w-32 z-20">
                    <div className={classNames("h-[58%] ml-8 md:ml-16 border-l-[5px]",
                        theme.border ? theme.border : "")}></div>
                    <Social/>
                </div>
                <div className=" row-span-1 col-span-8 "><Navbar></Navbar></div>
                <div className=" row-span-5 col-span-8 grid grid-cols-6">
                    <div className={classNames("col-span-5", darkMode ? "bg-dark-primary" : "bg-light-primary")}>
                        <Hero />
                        <Skills />
                        <Works />
                        <Contact />
                        <Footer />
                    </div>
                    <div className={classNames("flex flex-col justify-end col-span-1",
                            darkMode ? "bg-dark-primary" : "bg-light-primary")}
                        >
                        <div className="flex flex-col w-80 justify-evenly">
                            <div className="ml-[0.7rem] mb-8 md:mb-12 md:ml-[3.8rem] lg:mb-[4.5rem] lg:ml-[3.6rem]">
                                <Link href="#top">

                                        <a aria-label="Button to go to header" className="scroll-smooth">
                                            <FontAwesomeIcon className={classNames(theme.text , "text-3xl ml-2 sm:text-4xl md:ml-3 lg:ml-5")} icon={faArrowCircleUp} />
                                        </a>
                                </Link>
                            </div>
                            <div  className={classNames(theme.text, "w-64 h-12 text-xl font-Montserrat rotate-90 mb-28 mt-20 -translate-x-[6.4rem] md:mt-16 md:-translate-x-[2.8rem] lg:mt-12 lg:-translate-x-[2.7rem]")}>
                                <p>hector@hevprojects.com</p>
                            </div>
                        </div>

                            <div className={classNames("mt-4 h-[10%] ml-8 md:h-[15%] md:ml-[5.8rem] border-l-[5px]",
                                theme.border ? theme.border : "")}></div>
                    </div>
                </div>
            </div>

    )
}

export default Home
