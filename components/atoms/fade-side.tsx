import { Transition } from "@headlessui/react";
import {classNames} from "../../utils/utils";

interface FadeSideProps {
    children?: any;
    show: boolean;
}

export default function FadeSide({ children, show}: FadeSideProps) {
    return (
            <Transition
                show={show}
                enter="transition-all ease-linear duration-1000"
                enterFrom="opacity-0 transform -translate-x-10"
                enterTo="opacity-100 transform translate-x-0"
            >
                {children}
            </Transition>
    );
}
