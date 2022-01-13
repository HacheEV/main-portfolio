import {useState} from "react";
import ReactWhite from '../public/assets/logos/react2.png'
// frontend
import Html from '../public/assets/logos/html-test.png'
import CSS from '../public/assets/logos/css.svg'
import JS from '../public/assets/logos/js.png'
import WP from '../public/assets/logos/wordpress.png'
// backend
import Python from '../public/assets/logos/python.svg'
import Java from '../public/assets/logos/java.svg'
import Node from '../public/assets/logos/node.svg'
import PHP from '../public/assets/logos/php.svg'
// devops
import Git from '../public/assets/logos/git.svg'
import Jira from '../public/assets/logos/jira.svg'
import Docker from '../public/assets/logos/docker.svg'
import Cypress from '../public/assets/logos/cypress.png'

import Image from "next/image";
import {classNames} from "../utils/utils";


export const Skills = () => {
    const [front, setFront] = useState<boolean>(false)
    const [back, setBack] = useState<boolean>(false)
    const [devops, setDevops] = useState<boolean>(false)

    return (
        <div id="skills" className="p-4">
            {/*DESKTOP*/}
            <div className="sm:hidden lg:flex flex-col lg:mt-6 lg:bg-dark-primary lg:w-full h-screen">
                <div className="w-full relative">
                    <div
                        className="flex justify-center items-center absolute z-50 top-0 left-0 ml-4 mt-4 bg-accent-green w-64 h-64 rounded-md origin-bottom -rotate-6 hover:transition ease-linear duration-700 hover:scale-110 hover:-rotate-[8deg]"
                        onMouseEnter={(e) => front ? null : setFront(true)}
                        onMouseLeave={(e) => !front ? null : setFront(false)}
                    >
                        <p className="font-Bebas text-5xl">Frontend</p>
                    </div>
                    <div className={classNames("absolute w-24 h-24 z-20 top-4 left-32",
                        front ? "transition duration-[800ms] translate-x-40 -translate-y-32" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={ReactWhite}/>
                    </div>
                    <div className={classNames("absolute w-20 h-20 z-20 top-4 left-32 invert",
                        front ? "transition duration-[800ms] translate-x-60" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Html}/>
                    </div>
                    <div className={classNames("absolute w-20 h-20 z-20 top-4 left-32 invert",
                        front ? "transition duration-[800ms] translate-x-60 translate-y-32" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={CSS}/>
                    </div>
                    <div className={classNames("absolute w-24 h-24 z-20 top-4 left-32 invert",
                        front ? "transition duration-[800ms] translate-x-[9.5rem] translate-y-72" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={JS}/>
                    </div>
                    <div className={classNames("absolute w-24 h-24 z-20 top-4 left-32 invert",
                        front ? "transition duration-[800ms] -translate-x-[1rem] translate-y-80" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={WP}/>
                    </div>
                </div>
                <div className="flex justify-end relative w-full"      >
                    <div
                        className="flex justify-center items-center absolute z-50 top-64 bg-accent-green w-64 h-64 rounded-md origin-bottom rotate-6 hover:transition duration-700 hover:scale-110 hover:rotate-[9deg]"
                        onMouseEnter={(e) => back ? null : setBack(true)}
                        onMouseLeave={(e) => !back ? null : setBack(false)}
                    >
                        <p className="font-Bebas text-5xl">Backend</p>
                    </div>
                    <div className={classNames("absolute w-24 h-24 z-20 top-60 right-0 invert",
                        back ? "transition duration-[800ms] -translate-x-72 -translate-y-28" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Python}/>
                    </div>
                    <div className={classNames("absolute w-28 h-28 z-20 top-60 -right-4 invert",
                        back ? "transition duration-[800ms] -translate-x-[22rem] translate-y-12" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={PHP}/>
                    </div>
                    <div className={classNames("absolute w-20 h-20 z-20 top-60 -right-4 invert",
                        back ? "transition duration-[800ms] -translate-x-[23rem] translate-y-44" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Java}/>
                    </div>
                    <div className={classNames("absolute w-24 h-20 z-24 top-60 -right-4 invert",
                        back ? "transition duration-[800ms] -translate-x-[20rem] translate-y-80" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Node}/>
                    </div>
                </div>
                <div className="flex relative w-full">
                    <div
                        className="flex justify-center items-center absolute z-50 top-[33rem] left-0 bg-accent-green w-64 h-64 rounded-md origin-bottom rotate-6 hover:transition ease-linear duration-700 hover:scale-105 hover:-rotate-[4deg]"
                        onMouseEnter={(e) => devops ? null : setDevops(true)}
                        onMouseLeave={(e) => !devops ? null : setDevops(false)}
                    >
                        <p className="font-Bebas text-5xl">DevOps</p>
                    </div>
                    <div className={classNames("absolute w-24 h-24 z-20 top-[33rem] left-44 invert",
                        devops ? "transition duration-[800ms] translate-x-32 -translate-y-6" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Docker}/>
                    </div>
                    <div className={classNames("absolute w-20 h-20 z-20 top-[33rem] left-44 invert",
                        devops ? "transition duration-[800ms] translate-x-36 translate-y-24" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Git}/>
                    </div>
                    <div className={classNames("absolute w-20 h-20 z-20 top-[33rem] left-44 invert",
                        devops ? "transition duration-[800ms] translate-x-32 translate-y-60" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Jira}/>
                    </div>
                    <div className={classNames("absolute w-40 h-40 z-20 top-[33rem] left-44",
                        devops ? "transition duration-[800ms] -translate-x-20 translate-y-80" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={Cypress}/>
                    </div>
                </div>

            </div>
            {/*MOBILE*/}
        </div>
    )
}