import {useState} from 'react'
import {Switch} from '@headlessui/react'
import Image from 'next/image'
import darkLogo from '../public/assets/dark-logo.png'
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


enum Color {
    GREEN = 'green',
    PINK = 'pink',
    YELLOW = 'yellow',
    RED = 'red',
}

enum Language {
    ESP = 'spanish',
    EN = 'english'
}

export const Navbar = () => {
    const router = useRouter()
    const [enabled, setEnabled] = useState<boolean>(false)
    const [menu, setMenu] = useState<boolean>(false)
    const [dark, setDark] = useState<boolean>(true)
    const [open, setOpen] = useState<boolean>(false)
    const [color, setColor] = useState<Color>(Color.GREEN)

    const path = router.pathname

    const handleDark = () => {
        if (dark) {
            setDark(false)
        } else {
            setDark(true)
        }
    }
    const handleColor = (color: Color) => {
        setColor(color)
        setOpen(false)
    }
    const handleMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    return (
        <nav id="top" className="flex justify-between font-Montserrat text-white text-3xl">
            <div className="flex">
                <div className="mt-3 ml-2 mr-3 scale-[78%] md:mt-4 md:scale-[100%]">
                    <Link href="/" >
                        <Image className="cursor-pointer" src={darkLogo} width={125} height={100}/>
                    </Link>

                </div>
                <div className="hidden md:flex inline">
                    <div className="mt-10 mr-4 py-2 h-14 navbar-link ">
                        <a href={path == "/" ? "#skills" : "/#skills"}> Skills</a>
                    </div>
                    <div className="mt-10 mr-4 py-2 h-14 navbar-link">
                        <a href={path == "/" ? "#works" : "/#works"}> Works</a>
                    </div>
                    <div className="mt-10 mr-4 py-2 h-14 navbar-link ">
                        <Link href="/contact">
                            <a> Contact</a>
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
                                    <a href={path == "/" ? "#skills" : "/#skills"}> Skills</a>
                                </div>
                                <div className="mt-10 mr-4 py-2 h-14 navbar-link">
                                    <a href={path == "/" ? "#works" : "/#works"}> Works</a>
                                </div>
                                <div className="mt-10 mr-4 py-2 h-14 navbar-link ">
                                    <Link href="/contact">
                                        <a> Contact</a>
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
                    <p>ESP</p>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className='bg-dark-third mx-2 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'

                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className={classNames(
                                enabled ? 'translate-x-5' : 'translate-x-0',
                                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                        />
                    </Switch>
                    <p>EN</p>
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
                            {dark ? <FontAwesomeIcon
                                className="text-light-primary" icon={faMoon}/> : <FontAwesomeIcon
                                className="text-dark-primary" icon={faMoon}/>}

                        </div>

                    </button>
                    {/* THEME SETTINGS y*/}
                    <Popover className="relative h-10 w-6 mt-1 -mr-2">
                        {({open}) => (
                            <>
                                <Popover.Button
                                    className='group rounded-md inline-flex items-center text-base '
                                >
                                    <FontAwesomeIcon
                                        className="text-light-primary text-xl" icon={faCog}/>
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
                                                <button onClick={() => handleColor(Color.GREEN)}>
                                                    <div
                                                        className="w-8 h-8 bg-accent-green  rounded-full hover:border-4 hover:border-white"></div>
                                                </button>
                                                <button onClick={() => handleColor(Color.PINK)}>
                                                    <div
                                                        className="w-8 h-8 bg-accent-pink   rounded-full hover:border-4 hover:border-white"></div>
                                                </button>
                                                <button onClick={() => handleColor(Color.RED)}>
                                                    <div
                                                        className="w-8 h-8 bg-accent-red  rounded-full hover:border-4 hover:border-white"></div>
                                                </button>
                                                <button onClick={() => handleColor(Color.YELLOW)}>
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