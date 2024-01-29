import Navbar from "../components/Navbar";
import Body from "./Body";
import { useMousePosition } from "../hooks/useMousePosition";
import { AnimatePresence } from "framer-motion";

const Main = () => {
   const mousePosition = useMousePosition();
   return (
      <div className="h-full w-full flex flex-col items-center cursor-default select-none bg-deepbread-white font-roboto">
         <AnimatePresence>
            {mousePosition.y != null && mousePosition.y <= 100 && <Navbar />}
         </AnimatePresence>
         <Body />
      </div>
   );
};

export default Main;
