import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const smoothScrollToTop = () => {
        const scrollStep = () => {
            if (window.scrollY > 0) {
                window.scrollTo(0, window.scrollY - window.scrollY / 10);
                requestAnimationFrame(scrollStep);
            }
        };
        requestAnimationFrame(scrollStep);
    };

    return (
        <div>
            {visible && (
                <button
                    onClick={smoothScrollToTop}
                    className="fixed bottom-10 right-10 bg-white p-2 rounded-full z-50 shadow-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="30"
                        fill="black"
                        fontWeight={"bold"}
                        className="bi bi-chevron-right transform -rotate-90"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
