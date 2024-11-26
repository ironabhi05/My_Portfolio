import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div>
          <button
            onClick={scrollToTop}
            data-aos="zoom-in"
            className="fixed bottom-4 left-4 bg-gradient-to-tr from-[#ff4694] to-[#776fff] text-white p-5 rounded-full shadow-lg hover:bg-blue-800 transition"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
