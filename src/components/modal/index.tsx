import { ReactNode, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { forwardRef } from "react";

const Modal = forwardRef<HTMLDivElement, { child: ReactNode }>(
  ({ child }, ref) => {
    const { createContent } = useContext(ModalContext)
    return (
        <div ref={ref} className="fixed inset-0 z-50 flex justify-center items-center">
            <div className="absolute bg-black opacity-50 inset-0"></div>
            <div className="relative bg-white h-max w-max text-black opacity-100">
                {child}
                <button onClick={() => createContent(null)} className="text-6xl">X</button>
            </div>
        </div>
    )
  }
);

export default Modal;
