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

const Home: NextPage = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    return (
            <div className={classNames("grid grid-cols-9 grid-rows-6 grid-flow-col w-full h-screen overflow-x-hidden",
                        darkMode ? "bg-dark-primary" : "bg-light-primary")}
                    >
                <div className="flex flex-col sticky top-0 row-span-6 col-span-1 h-screen w-32 z-20">
                    <div className="green-line"></div>
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
                        <div className="ml-[0.7rem] mb-8 md:mb-12 md:ml-[3.8rem] lg:mb-[4.5rem] lg:ml-[3.6rem] w-auto">
                            <Link href="#top">
                                <a>
                                    <FontAwesomeIcon className="text-accent-green text-4xl" icon={faArrowCircleUp} />
                                </a>
                            </Link>
                        </div>

                        <div className="text-accent-green text-xl font-Montserrat rotate-90 mb-52 md:mb-52 md:ml-8 lg:mb-44 lg:ml-0">
                            <p >hector@hevprojects.com</p>
                        </div>
                        <div className="green-line-bottom"></div>
                    </div>
                </div>
            </div>

    )
}

export default Home
