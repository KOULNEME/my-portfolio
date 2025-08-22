import { useEffect } from "react";
import srConfig from "../utils/sr";

const useScrollReveal = (ref, delay = 200) => {
  useEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      // dynamically import scrollreveal only in browser
      import("scrollreveal").then(({ default: ScrollReveal }) => {
        ScrollReveal().reveal(ref.current, srConfig(delay));
      });
    }
  }, [ref, delay]);
};

export default useScrollReveal;
