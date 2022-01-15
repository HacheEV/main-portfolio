import {useState} from "react";
import {classNames} from "../../utils/utils";
import Image from "next/image";
import Python from "../../public/assets/logos/python.svg";
import PHP from "../../public/assets/logos/php.svg";
import Java from "../../public/assets/logos/java.svg";
import Node from "../../public/assets/logos/node.svg";

export const BackendSkillsMobile = () => {
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
                className="flex justify-center items-center flex-col absolute z-50 top-96 -right-8 mr-0 mt-8 bg-accent-green w-52 h-52 rounded-full origin-bottom rotate-6">
                <p className="font-Bebas text-5xl">Backend</p>
                <button
                    onClick={handleBackend}
                    className="bg-dark-third text-white mt-5 rounded-full p-2 animate-pulse"
                >
                    <p className="font-Montserrat text-md">Push</p>
                </button>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-[25.5rem] -right-16 invert",
                backend ? "transition duration-[800ms] -translate-x-64 -translate-y-12" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={Python}/>
            </div>
            <div className={classNames("absolute w-20 h-20 z-20 top-[25.5rem] -right-16 invert",
                backend ? "transition duration-[800ms] -translate-x-[18rem] translate-y-12" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={PHP}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-[25.5rem] -right-16 invert",
                backend ? "transition duration-[800ms] -translate-x-[17rem] translate-y-32" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={Java}/>
            </div>
            <div className={classNames("absolute w-20 h-20 z-24 top-[25.5rem] -right-16 invert",
                backend ? "transition duration-[800ms] -translate-x-[12rem] translate-y-64" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={Node}/>
            </div>
        </>

    )

}