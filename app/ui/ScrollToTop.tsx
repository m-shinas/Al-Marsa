"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ScrollToTop = () => {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(false)
    const scrollPosition = () => {
        if (window.scrollY >= 250) {
          setScrollToTopBtn(true);
        } else {
          setScrollToTopBtn(false);
        }
      };

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener("scroll", scrollPosition);
  }

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${
        scrollToTopBtn ? "visible opacity-100" : "invisible opacity-0"
      } fixed bottom-6 right-7  z-20 w-12 h-12 rounded-full text-[#fff] bg-gradient-to-r from-fruit-salad-600 to-lima-400 transition duration-1000 ease-in `}
    >
      <FontAwesomeIcon icon={faArrowUp} size="lg" bounce />
    </button>
  );
};

export default ScrollToTop;
