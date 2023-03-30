import { useState, useEffect, useRef } from "react";

const useWindowSize = () => {
  const { windowSize, setWindowSize } = useState(() => ({
    width: 0,
    height: 0,
  }));

  const handleSizeChange = () => {
    setWindowSize((prev) => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange);
    return () =>
      window.removeEventListener("resize", () =>
        setWindowSize((prev) => handleSizeChange)
      );
  }, []);
  
  return { windowSize };
};

export default useWindowSize;
