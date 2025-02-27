import { createContext, useContext, useEffect, useState } from "react";

const HydrationContext = createContext<{ isHydrated: boolean; scrollY: number }>({
    isHydrated: false,
    scrollY: 0,
});

const HydrationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsHydrated(true); // Set ketika komponen sudah di-hydrate
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HydrationContext.Provider value={{ isHydrated, scrollY }}>
            {children}
        </HydrationContext.Provider>
    );
};

export { HydrationContext, HydrationProvider };