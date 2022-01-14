import {classNames} from "../../utils/utils";
import Image from "next/image";
import ReactWhite from "../../public/assets/logos/react2.png";
import Html from "../../public/assets/logos/html-test.png";
import CSS from "../../public/assets/logos/css.svg";
import JS from "../../public/assets/logos/js.png";
import WP from "../../public/assets/logos/wordpress.png";
import {useState} from "react";
import Python from "../../public/assets/logos/python.svg";
import PHP from "../../public/assets/logos/php.svg";
import Java from "../../public/assets/logos/java.svg";
import Node from "../../public/assets/logos/node.svg";

export const BackendSkills = () => {
    const [back, setBack] = useState<boolean>(false)
    return(
        <>
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
        </>

        )

}