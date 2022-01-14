import {classNames} from "../../utils/utils";
import Image from "next/image";
import ReactWhite from "../../public/assets/logos/react2.png";
import Html from "../../public/assets/logos/html-test.png";
import CSS from "../../public/assets/logos/css.svg";
import JS from "../../public/assets/logos/js.png";
import WP from "../../public/assets/logos/wordpress.png";
import {useState} from "react";
import Docker from "../../public/assets/logos/docker.svg";
import Git from "../../public/assets/logos/git.svg";
import Jira from "../../public/assets/logos/jira.svg";
import Cypress from "../../public/assets/logos/cypress.png";

export const DevopsSkills = () => {
    const [devops, setDevops] = useState<boolean>(false)
    return (
        <>
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

        </>

    )

}