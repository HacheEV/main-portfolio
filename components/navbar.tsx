import {useContext, useEffect, useState} from 'react'
import {Switch} from '@headlessui/react'
import Image from 'next/image'
import darkLogo from '../public/assets/dark-logo.png'
import lightLogo from '../public/assets/light-logo.png'
import {classNames} from "../utils/utils";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import Link from 'next/link';
import {useRouter} from "next/router";
import DarkModeContext from "../context/mode-context";
import ThemeContext, {Colors} from "../context/theme-context/theme-context";
import LanguageContext, {Language} from "../context/language-context/language-context";
import {useMedia} from "react-use";


export const Navbar = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    const {theme, dispatchTheme} = useContext(ThemeContext)
    const {language, dispatchLanguage} = useContext(LanguageContext)

    const router = useRouter()
    const [menu, setMenu] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const path = router.pathname

    const handleDark = () => {
        if (darkMode) {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    }

    const handleMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }
    return (
        <nav id="top" className={classNames("flex justify-between font-Montserrat",
                darkMode ? "text-white" : "text-black")}
            >
            <div className="flex">
                <div className="mt-3 ml-2 mr-3 scale-[78%] md:mt-4 md:scale-[100%]">
                    <Link href="/" >
                        <Image className="cursor-pointer" src={darkMode ? darkLogo : lightLogo} width={125} height={100}/>
                    </Link>
                </div>
                <div className={classNames("hidden md:flex inline p-2",
                    language.language == 'ESP' ? "md:text-xl lg:text-3xl" : "md:text-2xl lg:text-3xl")}
                >
                    <div className={classNames("mt-10 mr-4 py-2 h-14 hover:border-b-8 hover:transition-all duration-[850ms]",
                                theme.border ? theme.border : "")}>
                        <a href={path == "/" ? "#skills" : "/#skills"}>{language.navbar[0]}</a>
                    </div>
                    <div className={classNames("mt-10 mr-4 py-2 h-14 hover:border-b-8 hover:transition-all duration-[850ms]",
                        theme.border ? theme.border : "")}>
                        <a href={path == "/" ? "#works" : "/#works"}>{language.navbar[1]}</a>
                    </div>
                    <div className={classNames("mt-10 mr-4 py-2 h-14 hover:border-b-8 hover:transition-all duration-[850ms]",
                        theme.border ? theme.border : "")}>
                        <Link href="/contact">
                            <a>{language.navbar[2]}</a>
                        </Link>

                    </div>
                </div>
                {/* RESPONSIVE MENU */}
                { menu ? (
                        <div className="relative h-10 w-6 mt-1 -mr-2">
                    <div
                        className="absolute flex flex-col place-content-evenly  z-50 left-0 transform -translate-x-[55%] translate-y-[6.75rem] mt-3 px-2 w-60">
                        <div
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div
                                className="relative flex flex-col content-center bg-dark-secondary h-[20.25rem] px-5 py-6 gap-2">
                                <div className="py-2 h-14 navbar-link ">
                                    <a href={path == "/" ? "#skills" : "/#skills"}>{language.navbar[0]}</a>
                                </div>
                                <div className="mt-10 mr-4 py-2 h-14 navbar-link">
                                    <a href={path == "/" ? "#works" : "/#works"}>{language.navbar[1]}</a>
                                </div>
                                <div className="mt-10 mr-4 py-2 h-14 navbar-link ">
                                    <Link href="/contact">
                                        <a>{language.navbar[2]}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                ) : (null)
                }


            </div>
            <div className="mr-5 md:flex justify-evenly items-center  pt-2 ">
                {/* LANGUAGE SWITCHER*/}
                <div className="flex justify-evenly items-center text-sm border-accent-green h-14">
                    <button
                        onClick={() => dispatchLanguage(Language.ESP)}
                        className={classNames("mr-4 mt-1 w-12 h-8 rounded-md shadow-sm",
                            darkMode ? "bg-dark-secondary text-white active:border-2 border-white focus:border-2 border-white" :
                            "bg-light-secondary text-black active:border-2 border-black focus:border-2 border-black",
                            theme.shadow)}>
                        ESP
                    </button>
                    <button
                        onClick={() => dispatchLanguage(Language.EN)}
                        className={classNames("mt-1 w-12 h-8 rounded-md shadow-sm",
                            darkMode ? "bg-dark-secondary text-white active:border-2 border-white focus:border-2 border-white" :
                                "bg-light-secondary text-black active:border-2 border-black focus:border-2 border-black",
                            theme.shadow)}>
                        ENG
                    </button>
                 </div>
                <div className="flex justify-evenly items-baseline w-28">
                {/* HAMBURGER*/}
                    {
                        !menu ? (<button
                                onClick={() => handleMenu()}
                            >
                                <FontAwesomeIcon
                                    className="display-block text-white text-2xl h-6 w-6 mr-2 md:hidden" icon={faBars}/>
                            </button>

                        ) : (<button
                            onClick={() => handleMenu()}
                        >
                            <FontAwesomeIcon
                                className="display-block text-white text-2xl h-6 w-6 mr-2 md:hidden" icon={faTimes}/>
                        </button>)
                    }
                    {/* DARK MODE SWITCHER*/}
                    <button
                        onClick={handleDark}
                        className="mx-4 text-lg h-10 w-6"
                    >
                        <div className="flex items-center">
                            {darkMode ? <FontAwesomeIcon
                                className="text-light-primary" icon={faMoon}/> : <FontAwesomeIcon
                                className="text-dark-primary" icon={faMoon}/>}

                        </div>

                    </button>
                    {/* THEME SETTINGS y*/}
                    <Popover className="relative h-10 w-6 mt-1 -mr-2 pt-4">
                        {({open}) => (
                            <>
                                <Popover.Button
                                    className='group rounded-md inline-flex items-center text-base '
                                >
                                    {darkMode ? <FontAwesomeIcon
                                        className="text-light-primary" icon={faCog}/> : <FontAwesomeIcon
                                        className="text-dark-primary" icon={faCog}/>}
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel
                                        className="absolute flex flex-col place-content-evenly  z-50 left-0 transform -translate-x-[55%] translate-y-2 mt-3 px-2 w-[5.65rem] md:w-28">
                                        <div
                                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                            <div
                                                className="relative flex flex-col content-center bg-dark-secondary px-5 py-6 gap-8 sm:p-8">
                                                <p className="text-sm text-white">Tema</p>
                                                <button onClick={() => dispatchTheme(Colors.GREEN)}>
                                                    <div
                                                        className="w-8 h-8 bg-accent-green  rounded-full hover:border-4 hover:border-white"></div>
                                                </button>
                                                <button onClick={() => dispatchTheme(Colors.PINK)}>
                                                    <div
                                                        className="w-8 h-8 bg-accent-pink   rounded-full hover:border-4 hover:border-white"></div>
                                                </button>
                                                <button onClick={() => dispatchTheme(Colors.RED)}>
                                                    <div
                                                        className="w-8 h-8 bg-accent-red  rounded-full hover:border-4 hover:border-white"></div>
                                                </button>
                                                <button onClick={() => dispatchTheme(Colors.YELLOW)}>
                                                    <div
                                                        className="w-8 h-8 bg-accent-yellow   rounded-full hover:border-4 hover:border-white"></div>
                                                </button>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </div>

        </nav>
    )
}