import MediumGreen from "../public/assets/medium-green.png";
import MySelf from "../public/assets/personal-2.png";
import Image from "next/image";


export const Hero = () => {
    return (
        <div className="flex flex-col justify-evenly mt-20 text-white md:flex-row-reverse">
            <div className="relative -mr-40 -mt-12">
                <div
                    className="absolute w-[47%] bottom-28 left-20 md:w-[57%] md:bottom-30 md:left-24 lg:w-[65%] lg:-top-16 md:w-[70%] md:bottom-28">
                    <Image src={MySelf}/>
                </div>
                {/*TODO: LG + XL MODE LETTERS + CIRCLE IMAGE*/}
                <div className="ml-6 w-[75%] md:w-[85%] md:ml-12 md:mt-16 lg:w-[90%] lg:">
                    <Image src={MediumGreen}
                           className="hover:scale-[96%] hover:transition-transform hover:duration-300"></Image>
                </div>
            </div>
            <div className="flex flex-col ml-8 -mt-2 md:w-1/2 md:mr-6 md:pt-2">
                <h1 className="font-Bebas text-5xl mb-2 lg:text-6xl ">Hector Esquerdo </h1>
                <h1 className="font-Montserrat mb-4 text-4xl lg:text-xl">Fullstack developer </h1>
                <p className="font-Montserrat  leading-10 text-xl md:text-lg md:leading-6 lg:my-4 lg:text-2xl">Hola soy Hector. Desarrollador ubicado en
                    España.
                    Creador de productos digitales. <br/>Amante de las últimas tecnologías en busca de la mejor
                    experiencia.
                </p>
                <button
                    className="bg-dark-third font-Montserrat w-40 h-10 mt-5 rounded-[10px] shadow-md hover:shadow-lg shadow-accent-green hover:shadow-accent-green transition-shadow duration-300 lg:mt-9">Descargar
                    CV
                </button>
            </div>
        </div>
    )
}