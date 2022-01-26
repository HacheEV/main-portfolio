import {FrontendSkills} from "./atoms/frontend-skills";
import {BackendSkills} from "./atoms/backend-skills";
import {DevopsSkills} from "./atoms/devops-skills";
import {FrontendSkillsMobile} from "./atoms/frontend-skills-mobile";
import {BackendSkillsMobile} from "./atoms/backend-skills-mobile";
import {DevopsSkillsMobile} from "./atoms/devops-skills-mobile";
import {useContext} from "react";
import DarkModeContext from "../context/mode-context";
import ThemeContext from "../context/theme-context/theme-context";


export const Skills = () => {
    return (
        <div id="skills" className="p-4">
            {/*DESKTOP*/}
            <div className="hidden lg:block lg:flex flex-col lg:mt-6 lg:w-full h-screen">
                <div className="w-full relative">
                    <FrontendSkills/>
                </div>
                <div className="flex justify-end relative w-full">
                    <BackendSkills/>
                </div>
                <div className="flex relative w-full">
                    <DevopsSkills/>
                </div>
            </div>
            {/*MOBILE*/}
            <div className="flex flex-col lg:mt-6 w-full h-screen lg:hidden">
                <div className="w-full relative">
                    <FrontendSkillsMobile/>
                </div>
                <div className="flex justify-end relative w-full">
                    <BackendSkillsMobile />
                </div>
                <div className="flex relative w-full">
                    <DevopsSkillsMobile />
                </div>
            </div>
        </div>
    )
}