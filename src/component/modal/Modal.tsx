import { ModalContext } from "@/context/ModalContext";
import { ReactNode, useContext, useState } from "react";
import { forwardRef } from "react";

const Modal = forwardRef<HTMLDivElement, { child: ReactNode }>(
    ({ child }, ref) => {
        const { createContent } = useContext(ModalContext)
        return (
            <div ref={ref} className="fixed inset-0 z-50 flex justify-center items-center">
                <div className="absolute bg-black opacity-50 inset-0 "></div>
                <div className="relative h-fit max-h-[80vh] max-w-[80vw] overflow-y-scroll overflow-x-hidden w-fit rounded-lg bg-transparent" style={{ scrollbarWidth: "none" }}>
                    <div className="sticky top-0 bg-white w-full p-2 z-10">
                        <button onClick={() => createContent(null)} className="absolute top-2 right-2 cursor-pointer font-bold z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" strokeWidth={1.2} stroke="black" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </button>
                    </div>
                    {child}
                </div>
            </div>
        )
    }
);

Modal.displayName = "Modal";
export default Modal;