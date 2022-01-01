import {useState} from 'react'
import {Switch} from '@headlessui/react'
import Image from 'next/image'
import darkLogo from '../public/assets/dark-logo.png'
import {classNames} from "../utils/utils";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'


enum Color {
    GREEN = 'green',
    PINK = 'pink',
    YELLOW = 'yellow',
    RED = 'red',
}

export const Navbar = () => {
    const [enabled, setEnabled] = useState<boolean>(false)
    const [dark, setDark] = useState<boolean>(true)
    const [open, setOpen] = useState<boolean>(false)
    const [color, setColor] = useState<Color>(Color.GREEN)

    const handleDark = () => {
        if(dark){
            setDark(false)
        }else{
            setDark(true)
        }
    }
    const handleColor = (color:Color) => {
        setColor(color)
        setOpen(false)
    }

    return (
        <nav className="flex justify-between font-Montserrat text-white text-3xl">
            <div className="flex">
                <div className="m-2 h-auto">
                    <Image src={darkLogo} width={125} height={100}/>
                </div>
                <div className="mt-10 mr-4 py-2 h-14 navbar-link ">
                    <a href="#"> Skills</a>
                </div>
                <div className="mt-10 mr-4 py-2 h-14 navbar-link">
                    <a href="#"> Work</a>
                </div>
                <div className="mt-10 mr-4 py-2 h-14 navbar-link ">
                    <a href="#"> Contact</a>
                </div>

            </div>
            <div className="flex justify-evenly items-center  pt-2 ">
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
                {/* DARK MODE SWITCHER*/}
                <button
                    onClick={handleDark}
                    className="mx-3 text-lg"
                >
                    <div className="flex items-center">
                        {dark ?     <FontAwesomeIcon
                            className="text-light-primary" icon={faMoon} /> : <FontAwesomeIcon
                            className="text-dark-primary" icon={faMoon} />}

                    </div>

                </button>
                <Popover className="relative ml-0.5 mr-6">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className='group rounded-md inline-flex items-center text-base '
                            >
                                <FontAwesomeIcon
                                    className="text-light-primary text-xl" icon={faCog} />
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
                                <Popover.Panel className="absolute z-10 left-0 transform -translate-x-1/2 mt-3 px-2 w-24 max-w-xs sm:px-0">
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative flex flex-col content-center bg-dark-secondary px-5 py-6 sm:gap-8 sm:p-8">
                                            <p className="text-sm text-white">Tema</p>
                                            <button onClick={() => handleColor(Color.GREEN)}><div className="w-8 h-8 bg-accent-green  rounded-full"></div></button>
                                            <button onClick={() => handleColor(Color.PINK)} ><div className="w-8 h-8 bg-accent-pink   rounded-full"></div></button>
                                            <button  onClick={() => handleColor(Color.RED)} ><div className="w-8 h-8 bg-accent-red  rounded-full"></div></button>
                                            <button  onClick={() => handleColor(Color.YELLOW)}><div className="w-8 h-8 bg-accent-yellow   rounded-full"></div></button>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

            </div>

        </nav>
    )
}