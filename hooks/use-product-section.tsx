import React, { useContext, useRef } from "react";
import { useHasIntersected } from "./use-has-intersected";

interface productSectionContextProps {
    hasIntersected: boolean;
}

const ProductSectionContext = React.createContext<productSectionContextProps>({ hasIntersected: false });

interface ProductContextProviderProps {
    children: any;
}

export function ProductSectionContextProvider({ children }: ProductContextProviderProps) {
    const intersectionReference = useRef(null);
    const hasIntersected = useHasIntersected(intersectionReference);
    return (
        <ProductSectionContext.Provider value={{ hasIntersected: hasIntersected }}>
            <div ref={intersectionReference}>{children}</div>
        </ProductSectionContext.Provider>
    );
}

export function useProductSection() {
    return useContext(ProductSectionContext);
}
