import {useState} from "react";
import ReactWhite from '../public/assets/logos/react2.png'
import MySelf from "../public/assets/react2.png";
import Image from "next/image";
import {classNames} from "../utils/utils";


export const Skills = () => {
    const [front, setFront] = useState<boolean>(false)
    const [back, setBack] = useState<boolean>(false)

    const Frontend = ['Html', 'CSS', 'Javascript', 'React', 'Wordpress', 'Tailwind']
    const Backend = ['PHP', 'Python', 'Java', 'Node', 'Spring', 'Flask', 'Express']
    const DevOps = ['Github', 'Docker', 'Jira', 'Gitlab', 'Cypress', 'Behave']

    console.log(front)

    return (
        <div className="p-4">
            {/*DESKTOP*/}
            <div className="flex flex-col bg-dark-primary w-full h-screen">
                <div className="w-full relative">
                    <div
                        className="flex justify-center items-center absolute z-50 top-0 left-0 bg-accent-green w-64 h-64 rounded-md origin-bottom -rotate-6 hover:transition ease-linear duration-700 hover:scale-110 hover:-rotate-[8deg]"
                        onMouseEnter={(e) => front ? null : setFront(true)}
                        onMouseLeave={(e) => !front ? null : setFront(false)}
                    >
                        <p className="font-Bebas text-5xl">Frontend</p>
                    </div>
                    <div className={classNames("absolute w-20 h-20 z-20 top-4 left-32",
                        front ? "transition duration-[800ms] translate-x-32 -translate-y-12" :
                            "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                        <Image src={ReactWhite}/>
                    </div>
                </div>
                <div className="flex justify-end relative w-full">
                    <button
                        className="absolute top-64 bg-accent-green w-64 h-64 rounded-md origin-bottom rotate-6 hover:transition duration-700 hover:scale-110 hover:rotate-[9deg]">
                        <p className="font-Bebas text-5xl">Backend</p>
                    </button>
                </div>

            </div>
            {/*MOBILE*/}
        </div>
    )
}