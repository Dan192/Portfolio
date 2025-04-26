import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
        
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 nes-btn is-primary"
      >
        ↑ Top
      </button>

      
    )
  );
};

export default ScrollToTopButton;
