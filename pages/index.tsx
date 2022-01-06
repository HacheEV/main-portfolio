import type {NextPage} from 'next'
import { Hero } from '../components/hero';
import {Navbar} from "../components/navbar";
import {Social} from "../components/social";


const Home: NextPage = () => {
    return (
        <div className="bg-dark-primary grid grid-cols-9 grid-rows-6 grid-flow-col w-full h-screen">
            <div className="flex flex-col row-span-6 col-span-1 h-screen w-32 ">
                <div className="green-line"></div>
                <Social/>
            </div>
            <div className=" row-span-1 col-span-8 "><Navbar></Navbar></div>
            <div className=" row-span-5 col-span-8 grid grid-cols-6">
                <div className="bg-dark-primary col-span-5">
                    <Hero />
                </div>
                <div className="bg-dark-primary col-span-1"></div>
            </div>
        </div>
    )
}

export default Home
