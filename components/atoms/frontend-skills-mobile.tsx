import {classNames} from "../../utils/utils";
import Image from "next/image";
import ReactWhite from "../../public/assets/logos/react2.png";
import Html from "../../public/assets/logos/html-test.png";
import CSS from "../../public/assets/logos/css.svg";
import JS from "../../public/assets/logos/js.png";
import WP from "../../public/assets/logos/wordpress.png";
import {useState} from "react";

export const FrontendSkillsMobile = () => {
    const [front, setFront] = useState<boolean>(false)
    const handleFrontend = () => {
        if(front){
            setFront(false)
        }else{
            setFront(true)
        }
    }
    return(
        <>
            <div
                className="flex justify-center items-center flex-col absolute z-50 top-0 left-0 ml-4 mt-8 bg-accent-green w-52 h-52 rounded-full origin-bottom -rotate-6"

            >
                <p className="font-Bebas text-5xl">Frontend</p>
                <button
                    onClick={handleFrontend}
                    className="bg-dark-third text-white mt-5 rounded-full p-2 animate-pulse"
                >
                    <p className="font-Montserrat text-md">Push</p>
                </button>
            </div>
            <div className={classNames("absolute w-20 h-20 z-20 top-8 left-40",
                front ? "transition duration-[800ms] translate-x-16 -translate-y-20" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={ReactWhite}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-8 left-44 invert",
                front ? "transition duration-[800ms] translate-x-16 translate-y-6" :
                    "transition duration-[850ms] ease-in -translate-x-16 translate-y-6")}>
                <Image src={Html}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-8 left-44 invert",
                front ? "transition duration-[800ms] translate-x-16 translate-y-32" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={CSS}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-8 left-44 invert",
                front ? "transition duration-[800ms] -translate-x-2 translate-y-52" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={JS}/>
            </div>
            <div className={classNames("absolute w-16 h-16 z-20 top-8 left-44 invert",
                front ? "transition duration-[800ms] -translate-x-20 translate-y-60" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={WP}/>
            </div>
        </>

        )

}