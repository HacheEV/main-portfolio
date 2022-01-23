import type {NextPage} from 'next'
import { Hero } from '../components/hero';
import {Navbar} from "../components/navbar";
import { Skills } from '../components/skills';
import {Social} from "../components/social";
import {Works} from "../components/works";
import {Contact} from "../components/contact";
import {Footer} from "../components/footer";


const Home: NextPage = () => {

    return (
        <div className="bg-dark-primary grid grid-cols-9 grid-rows-6 grid-flow-col w-full h-screen overflow-x-hidden">
            <div className="flex flex-col row-span-6 col-span-1 h-screen w-32 z-20">
                <div className="green-line"></div>
                <Social/>
            </div>
            <div className=" row-span-1 col-span-8 "><Navbar></Navbar></div>
            <div className=" row-span-5 col-span-8 grid grid-cols-6">
                <div className="bg-dark-primary col-span-5">
                    <Hero />
                    <Skills />
                    <Works />
                    <Contact />
                    <Footer />
                </div>
                <div className="flex flex-col justify-end bg-dark-primary col-span-1">
                    <div className="text-accent-green text-xl font-Montserrat rotate-90 mb-52 md:mb-52 md:ml-8 lg:mb-44 lg:ml-0">
                        <p >hector@hevprojects.com</p>
                    </div>
                    <div className="green-line-bottom"></div>

                </div>
            </div>
        </div>
    )
}

export default Home
