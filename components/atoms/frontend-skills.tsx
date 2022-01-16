import {classNames} from "../../utils/utils";
import Image from "next/image";
import ReactWhite from "../../public/assets/logos/react2.png";
import Html from "../../public/assets/logos/html-test.png";
import CSS from "../../public/assets/logos/css.svg";
import JS from "../../public/assets/logos/js.png";
import WP from "../../public/assets/logos/wordpress.png";
import {useState} from "react";

export const FrontendSkills = () => {
    const [front, setFront] = useState<boolean>(false)
    return(
        <>
            <div
                className="flex justify-center items-center absolute z-50 top-0 left-0 ml-4 mt-4 bg-accent-green w-64 h-64 rounded-md origin-bottom -rotate-3 hover:transition ease-linear duration-700 hover:scale-110 hover:-rotate-[8deg]"
                onMouseEnter={(e) => front ? null : setFront(true)}
                onMouseLeave={(e) => !front ? null : setFront(false)}
            >
                <p className="font-Bebas text-5xl">Frontend</p>
            </div>
            <div className={classNames("absolute w-24 h-24 z-20 top-4 left-36",
                front ? "transition duration-[800ms] translate-x-40 -translate-y-32" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={ReactWhite}/>
            </div>
            <div className={classNames("absolute w-20 h-20 z-20 top-4 left-36 invert",
                front ? "transition duration-[800ms] translate-x-60" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={Html}/>
            </div>
            <div className={classNames("absolute w-20 h-20 z-20 top-4 left-36 invert",
                front ? "transition duration-[800ms] translate-x-60 translate-y-32" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={CSS}/>
            </div>
            <div className={classNames("absolute w-24 h-24 z-20 top-4 left-36 invert",
                front ? "transition duration-[800ms] translate-x-[9.5rem] translate-y-72" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={JS}/>
            </div>
            <div className={classNames("absolute w-24 h-24 z-20 top-4 left-36 invert",
                front ? "transition duration-[800ms] -translate-x-[1rem] translate-y-80" :
                    "transition duration-[850ms] ease-in -translate-x-32 translate-y-12")}>
                <Image src={WP}/>
            </div>
        </>

        )

}