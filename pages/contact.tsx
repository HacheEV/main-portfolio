import {NextPage} from "next";
import {Navbar} from "../components/navbar";
import {Social} from "../components/social";
import React, {useContext} from 'react';
import {Footer} from "../components/footer";
import DarkModeContext from "../context/mode-context";
import {classNames} from "../utils/utils";

interface contactProps {
    props:any;
}


const Contact: NextPage = (props:any) => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    return (
            <div className={classNames("grid grid-cols-9 grid-rows-6 grid-flow-col w-full h-screen overflow-x-hidden",
                darkMode ? "bg-dark-primary" : "bg-light-primary")}>
                <div className="flex flex-col row-span-6 col-span-1 h-screen w-32 z-20">
                    <div className="green-line"></div>
                    <Social/>
                </div>
                <div className=" row-span-1 col-span-9 ">
                    <Navbar/>
                </div>
                <div className=" row-span-5 col-span-9 grid grid-cols-6">
                    <div className={classNames("col-span-6", darkMode ? "bg-dark-primary text-white" : "bg-light- text-black")}>
                        <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="mt-5 md:mt-0 md:col-span-3">
                                    <form action="https://formsubmit.co/hector@hevprojects.com" method="POST">
                                        <div className="p-4 shadow overflow-hidden">
                                            <div className={classNames("px-4 rounded-md rounded-md shadow-sm sm:p-6", darkMode ? "bg-dark-secondary shadow-white" : "bg-light-secondary shadow-black")}>
                                                <div className="font-Montserrat grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-xl">
                                                            First name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-xl ">
                                                            Last name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="email" className="block text-xl ">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            autoComplete="email"
                                                            className="mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="reason" className="block text-xl">
                                                            Reason
                                                        </label>
                                                        <select
                                                            id="reason"
                                                            name="reason"
                                                            autoComplete="reason"
                                                            className="mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        >
                                                            <option>New website</option>
                                                            <option>Create a digital product</option>
                                                            <option>Digital transformation</option>
                                                            <option>Upgrade my website</option>
                                                            <option>Consultancy</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="message" className="block text-xl">
                                                            Tell me your idea
                                                        </label>
                                                        <textarea
                                                            rows={4}
                                                            name="message"
                                                            id="message"
                                                            className="mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 font-Montserrat text-center sm:px-6 md:text-right">
                                                <button
                                                    type="submit"
                                                    className={classNames("inline-flex justify-center mt-4 py-2 px-8 border border-transparent shadow-sm font-2xl font-bold tracking-widest rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green",
                                                darkMode ? "bg-dark-third text-white hover:bg-dark-secondary" : "bg-light-third text-black hover:bg-light-secondary")}
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <Footer />
                    </div>
                </div>
            </div>
    )
}

export default Contact
