import MediumGreen from "../public/assets/medium-green.png";
import MySelf from "../public/assets/personal-2.png";
import Image from "next/image";


export const Hero = () => {
    return (
        <div className="flex justify-evenly flex-row-reverse text-white mt-20">
            <div className="relative -mr-40 -mt-12">
                <div className="absolute w-[70%] bottom-28 left-12">
                    <Image src={MySelf} />
                </div>
                <Image src={MediumGreen} width={525} height={525} className="z-50 hover:scale-[99%] hover:transition-transform hover:duration-300"/>
            </div>
            <div className="flex flex-col w-1/2 mr-6 pt-2">
                <h1 className="font-Bebas text-6xl ">Hector Esquerdo </h1>
                <h1 className="font-Montserrat text-5xl mb-6">Fullstack developer </h1>
                <p className="font-Montserrat text-2xl leading-8 my-4" >Hola soy Hector. Desarrollador ubicado en España.
                    Creador de productos digitales. <br />Amante de las últimas tecnologías en busca de la mejor experiencia.
                   </p>
                <button className="bg-dark-third font-Montserrat w-40 h-10 mt-4 rounded-[10px] shadow-md hover:shadow-lg shadow-accent-green hover:shadow-accent-green transition-shadow duration-300 ">Descargar CV </button>
            </div>
        </div>
    )
}