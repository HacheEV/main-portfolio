import {NextPage} from "next";
import {Navbar} from "../components/navbar";
import {Social} from "../components/social";
import {Hero} from "../components/hero";
import {Skills} from "../components/skills";
import {Works} from "../components/works";


const Contact: NextPage = () => {
    return (
        <div className="bg-dark-primary grid grid-cols-9 grid-rows-6 grid-flow-col w-full h-screen overflow-x-hidden">
            <div className="flex flex-col row-span-6 col-span-1 h-screen w-32 z-20">
                <div className="green-line"></div>
                <Social/>
            </div>
            <div className=" row-span-1 col-span-9 ">
                <Navbar/>
            </div>
            <div className=" row-span-5 col-span-9 grid grid-cols-6">
                <div className="bg-dark-primary col-span-6">


                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-3">
                                <form action="#" method="POST">
                                    <div className="p-4 shadow overflow-hidden rounded-md">
                                        <div className="px-4 bg-dark-primary sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block font-Montserrat text-xl text-white">
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
                                                    <label htmlFor="last-name" className="block font-Montserrat text-xl text-white">
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
                                                    <label htmlFor="email-address" className="block font-Montserrat text-xl text-white">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="country" className="block font-Montserrat text-xl text-white">
                                                        Reason
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
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
                                                    <label htmlFor="street-address" className="block font-Montserrat text-xl text-white">
                                                        Tell me your idea
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        name="street-address"
                                                        id="comment"
                                                        className="mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-dark-primary text-center sm:px-6 md:text-right">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center mt-4 py-2 px-8 border border-transparent shadow-sm font-Montserrat font-2xl font-bold tracking-widest rounded-md text-white bg-dark-third hover:bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-accent-green"
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
            </div>
        </div>
    )
}

export default Contact
