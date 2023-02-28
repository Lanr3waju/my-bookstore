import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";



const Modal = ({ children }) => {

    const refElement = useRef(null)
    if (!refElement.current) {
        refElement.current = document.createElement('div');
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal")
        modalRoot.appendChild(refElement.current);
        return () => modalRoot.removeChild(refElement.current)
    }, [])

    return createPortal(
        <div className="fixed w-full flex h-full  justify-center items-center font-tilt-neon bg-[rgba(0,0,0,0.8)]">
            {children}
        </div>,
        refElement.current)
}

export default Modal;
