import { cn } from '../lib/tailwind-utils';
import { RiSeedlingFill } from 'react-icons/ri';
import { IoMdFlower } from 'react-icons/io';
import { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { navbarAnimationVariants } from '../shared/variants';

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const menus = ['About', 'Game', 'Awards', 'Experience', 'Projects', 'Contact'];

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const NavbarContent = (isActive: boolean) => {
    if (isActive) {
      return (
        <>
          <IoMdFlower onClick={handleClick} className="cursor-pointer" />
          <motion.div layout className="flex flex-row gap-5 text-base delay-100">
            {menus.map((menu) => (
              <div
                className={cn('cursor-pointer transition ease-in-out hover:text-deepbread-green', {
                  'animate-appear': isActive,
                })}>
                {menu}
              </div>
            ))}
          </motion.div>
        </>
      );
    } else {
      return (
        <motion.div className="flex flex-row gap-5 justify-center items-center cursor-pointer" onClick={handleClick}>
          <RiSeedlingFill className="cursor-pointer" />
          <div className="text-base animate-appear">Wanna Move?</div>
        </motion.div>
      );
    }
  };

  return (
    <motion.div
      layout
      className="bg-white px-6 py-3 rounded-xl fixed m-2 z-10 shadow-md text-xl"
      variants={navbarAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit">
      <motion.div className={cn('flex flex-row gap-7 justify-center items-center transition ease-in-out')}>
        {NavbarContent(isActive)}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
