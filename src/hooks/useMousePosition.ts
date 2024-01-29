import { useState, useEffect } from "react";

export const useMousePosition = () => {
   const [mousePosition, setMousePosition] = useState({ x: null, y: null });

   useEffect(() => {
      const updateMousePosition = (e: any) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
         window.removeEventListener("mousemove", updateMousePosition);
      };
   }, []);

   return mousePosition;
};
