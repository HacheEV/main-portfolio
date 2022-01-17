import { Transition } from "@headlessui/react";
import {useState} from "react";
import {classNames} from "../utils/utils";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Works = () => {
    const [product, setProduct] = useState<boolean>(false);
    console.log(product)

    return(
        <>
            <div id="works" className="mt-[13rem] grid grid-cols-1 lg:mt-10 lg:grid-cols-8 grid-rows-2 gap-x-1 gap-y-16 ">
                {/* START MAIN CARD ON GRID TODO:TRANSFORM TO COMPONENT*/}
                <div  className="relative col-span-3 w-80 h-64 m-2 z-0 p-2"
                      onMouseEnter={(e) => product ? null : setProduct(true)}
                      onMouseLeave={(e) => !product ? null : setProduct(false)}
                >
                    <div className="w-full h-full rounded-lg bg-Hidreco bg-cover opacity-50 top-0 left-0 z-10 shadow-md shadow-accent-green"
                    >
                    </div>
                    <div className={classNames("sm:hidden lg:block lg:absolute bottom-0 left-0 lg:bg-dark-third lg:flex justify-center items-center",
                        product ? "w-[95%] h-32 ml-2 transition duration-[800ms] -translate-y-12 opacity-50 "
                            : "w-[95%] h-6 ml-2 transition duration-[1200ms] ease-in translate-y-0 opacity-5")}>
                        {product ? (
                            <>
                                <button className="sm:hidden lg:block lg:opacity-100 lg:text-white lg:border-2 border-white rounded-lg lg:w-14 h-10">
                                    <a href="https://www.hidreco.es/" target="_blank" rel="noreferrer">Web</a>
                                </button>
                            </>
                           ) : (null)}
                    </div>
                    <div className="absolute bottom-6 left-0 bg-dark-third opacity-50 w-[95%] h-24 ml-2 flex justify-center items-center lg:hidden">
                        <>
                            <button className="opacity-100 text-white border-2 border-white rounded-lg w-14 h-10">
                                <a href="https://www.hidreco.es/" target="_blank" rel="noreferrer">Web</a>
                            </button>
                        </>
                    </div>

                </div>
                {/*END MAIN CARD ON GRID*/}
                <div  className="col-span-1 w-40 h-40 rounded-lg m-2">
                </div>
                <div  className="col-span-3 w-72 h-56 bg-accent-red rounded-lg  m-2">
                </div>
                <div  className="col-span-1 w-40 h-40 rounded-lg m-2">
                </div>
                <div  className="col-span-1 w-40 h-40 ">

                </div>
                <div  className="col-span-3 w-72 h-56 bg-accent-green rounded-lg">
                </div>
                <div  className="col-span-1 w-40 h-40 ">
                </div>
                <div  className="col-span-3 w-72 h-56 bg-accent-green rounded-lg">
                </div>
            </div>
        </>

    )
}