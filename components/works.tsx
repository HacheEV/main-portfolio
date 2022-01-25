import {Transition} from "@headlessui/react";
import {useContext, useRef, useState} from "react";
import {classNames} from "../utils/utils";
import {ProductSectionContextProvider} from "../hooks/use-product-section";
import {useHasIntersected} from "../hooks/use-has-intersected";
import {useMedia} from 'react-use';
import FadeSide from "./atoms/fade-side";
import {WorkCard} from "./atoms/work-card";
import DarkModeContext from "../context/mode-context";

export const Works = () => {
    const ref = useRef(null);
    let isSectionVisible = useHasIntersected(ref, {threshold: 0.50});
    const isWide = useMedia('(max-width: 480px)');

    if(isWide){
        isSectionVisible = true;
    }

    return (
        <>
            <ProductSectionContextProvider>
                <div id="works"
                     className="mt-[13rem] grid grid-cols-1 gap-x-0 gap-y-12 md:mt-[2rem] md:grid-cols-2 md:gap-x-0 md:gap-y-20 lg:mt-10 lg:grid-cols-8 lg:grid-rows-2 lg:gap-x-1 lg:gap-y-16"
                     ref={ref}
                >
                    {/*FIRST ROW*/}
                    {/*TODO ASK VICTOR WICH RESPONSIVE FOLLOW*/}
                    <div id="1" className="col-span-2 w-72 h-56 lg:col-span-3">
                        <WorkCard isSectionVisible={isSectionVisible} delay="delay-100"
                                  background="bg-Hidreco"
                                  projectLink="https://www.hidreco.es"
                                  shadowColor="shadow-accent-green"
                                  title="Hidreco"
                        />
                    </div>
                    <div id="2" className="hidden lg:grid lg:col-span-1 lg:w-56 lg:h-64 lg:rounded-lg lg:mx-4">
                        <FadeSide show={isSectionVisible} />
                    </div>
                    <div id="3" className="col-span-2 w-72 h-56 lg:col-span-3">
                        <WorkCard isSectionVisible={isSectionVisible} delay="delay-300"
                                  background="bg-Render"
                                  projectLink="https://renderprops.vercel.app/"
                                  shadowColor="shadow-accent-green"
                                  title="RenderProps"
                                  className="md:translate-x-80 lg:translate-x-0"
                        />
                    </div>
                    <div className="hidden lg:grid lg:col-span-1 lg:w-56 lg:h-64 lg:rounded-lg lg:mx-4">
                        <FadeSide show={isSectionVisible} />
                    </div>
                    {/*SECOND ROW*/}
                    <div className="hidden lg:grid lg:col-span-1 lg:w-56 h-64 lg:rounded-lg lg:mx-4">
                        <FadeSide show={isSectionVisible} />
                    </div>
                    <div className="col-span-2 w-72 h-56 lg:col-span-3">
                        <WorkCard isSectionVisible={isSectionVisible} delay="delay-500"
                                  background="bg-David"
                                  projectLink="https://www.davidestevepastisseria.es/"
                                  shadowColor="shadow-accent-green"
                                  title="David Esteve"
                        />
                    </div>
                    <div className="hidden w-2 h-4 mb-16 lg:grid lg:col-span-1 lg:w-56 lg:h-64 lg:rounded-lg lg:mx-4">
                        <FadeSide show={isSectionVisible} />
                    </div>
                    <div className="col-span-2 w-72 h-56 lg:col-span-3">
                        <WorkCard isSectionVisible={isSectionVisible} delay="delay-[700ms]"
                                  background="bg-Blackvil"
                                  projectLink="https://blackviltattoo.com/"
                                  shadowColor="shadow-accent-green"
                                  title="Blackvil Tattoo"
                                  className="md:translate-x-80 lg:translate-x-0"
                        />
                    </div>

                </div>
            </ProductSectionContextProvider>
        </>

    )
}