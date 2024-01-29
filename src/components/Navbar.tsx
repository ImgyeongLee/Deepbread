import { RiSeedlingFill } from 'react-icons/ri';
import { IoMdFlower } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const NavbarContent = (isActive: boolean) => {
    if (isActive) {
      return (
        <div className="flex flex-row gap-5 justify-center items-center transition ease-in-out">
          <IoMdFlower onClick={handleClick} className="cursor-pointer" />
          <div className="flex flex-row gap-3 text-base">
            <div>About</div>
            <div>Game</div>
            <div>Awards</div>
            <div>Experience</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row gap-5 justify-center items-center">
          <RiSeedlingFill onClick={handleClick} className="cursor-pointer" />
        </div>
      );
    }
  };

  return (
    <div className="bg-white px-6 py-3 rounded-xl fixed m-2 z-10 shadow-md text-xl">{NavbarContent(isActive)}</div>
  );
};

export default Navbar;
