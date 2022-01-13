import MediumGreen from "../public/assets/medium-green.png";
import MySelf from "../public/assets/personal-2.png";
import Image from "next/image";

export const Hero = () => {

    return (
        <div className="flex flex-col justify-evenly mt-20 text-white md:flex-row-reverse">
            <div className="relative -mr-40 -mt-12">
                <div
                    className="absolute w-[13rem] bottom-28 left-20 md:w-[18rem] md:bottom-30 md:left-24 lg:w-[21rem] lg:-top-16">
                    <Image src={MySelf}/>
                </div>
                <div className="ml-6 w-[21rem] md:w-[27.5rem] md:ml-8 md:mt-10 md:mr-6 lg:w-[32rem] lg:mt-2">
                    <Image src={MediumGreen}
                           className="hover:scale-[96%] hover:transition-transform hover:duration-300"></Image>
                </div>
            </div>
            <div className="flex flex-col ml-8 -mt-2 md:w-1/2 md:mr-6 md:pt-2">
                <h1 className="font-Bebas text-5xl mb-2 lg:text-6xl ">Hector Esquerdo </h1>
                <h1 className="font-Montserrat mb-4 text-4xl lg:text-3xl">Fullstack developer </h1>
                <p className="font-Montserrat  leading-8 text-xl md:text-lg md:leading-6 lg:my-4 lg:text-xl">Hola soy
                    Hector. Desarrollador ubicado en
                    España.
                    Creador de productos digitales. <br/>Amante de las últimas tecnologías en busca de la mejor
                    experiencia.
                </p>
                <a
                    href="/assets/hector_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                >
                    <button
                        className="bg-dark-third font-Montserrat w-40 h-10 mt-5 rounded-[10px] shadow-md hover:shadow-lg shadow-accent-green hover:shadow-accent-green transition-shadow duration-300 lg:mt-6">Descargar
                        CV
                    </button>

                </a>
            </div>
        </div>
    )
}