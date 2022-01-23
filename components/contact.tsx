import {Navbar} from "./navbar";
import Link from "next/link";

export const Contact = () => {
    return (
        <>
            {/*DESKTOP*/}
            <div className="hidden md:block md:relative z-0 md:mt-20 md:w-full md:h-64  md:my-4">
                <div
                    className="absolute z-0 bottom-0 left-0 flex items-center justify-center bg-dark-secondary w-[85%] h-[85%] rounded-md shadow-[2px_3px_9px_0px_rgba(0,0,0,0.3)] shadow-accent-green">
                    <div className="md:-translate-x-12 lg:-translate-x-24">
                        <p className="font-Montserrat text-2xl text-white italic font-bold mb-2">Ready to contact me?</p>
                        <p className="font-Montserrat md:text-2xl lg:text-3xl text-white font-bold">Get start your project now!</p>
                    </div>
                </div>
                <div className="absolute z-20 top-0 right-0 bg-dark-third w-[35%] h-[65%] rounded-md translate-x-7 shadow-md shadow-accent-green lg:translate-x-0">
                    <div className="relative w-full h-full">
                        <button className="absolute bottom-6 left-6 rounded-lg bg-dark-primary font-Montserrat text-1xl text-white font-bold tracking-[0.15em] w-36 h-10 shadow-sm shadow-white">
                            <Link href="/contact">
                                <a> Contact</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/*MOBILE*/}
            <div className="block w-[95%] p-6 my-14 flex flex-col bg-dark-third rounded-md md:hidden">
                <div className="w-[30ch] my-4 text-center">
                    <p className="font-Montserrat text-3xl text-white italic font-bold mb-2">Ready to contact me?</p>
                    <p className="font-Montserrat text-4xl text-white font-bold">Get start your project now!</p>
                </div>
                <div className="flex justify-center">
                    <button className="rounded-lg bg-dark-primary font-Montserrat text-2xl text-white font-bold tracking-[0.15em] w-44 h-14 mt-4 shadow-sm shadow-white">
                        <Link href="/contact">
                            <a> Contact</a>
                        </Link>
                    </button>

                </div>

            </div>

        </>

    )
}