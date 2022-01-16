import { RefObject, useEffect, useState } from "react";
import { useIntersection } from "react-use";

interface UseHasIntersectedOptions {
    root?: HTMLElement;
    rootMargin?: string;
    threshold?: number;
}

const defaultValues = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

export function useHasIntersected(ref: RefObject<HTMLElement>, options?: UseHasIntersectedOptions): boolean {
    const [hasIntersected, setHasIntersected] = useState<boolean>(false);
    const intersect = useIntersection(ref, Object.assign(defaultValues, options));

    useEffect(() => {
        if (!hasIntersected && intersect?.isIntersecting) {
            setHasIntersected(true);
        }
    }, [hasIntersected, intersect?.isIntersecting]);

    return hasIntersected;
}
