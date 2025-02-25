import { createContext, ReactElement, ReactNode, useState, useRef } from "react";
import Modal from "../component/modal/Modal";

interface ModalContextType {
  content: ReactElement | null
  createContent: (element: ReactElement | null ) => void;
}

const ModalContext = createContext<ModalContextType>({
  content: null,
  createContent: () => { },
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <ModalContext.Provider value={{ content, createContent: setContent }}>
      {content && <Modal ref={modalRef} child={content}  />}
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
export type { ModalContextType };
