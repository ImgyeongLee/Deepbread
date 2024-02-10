import Wave from './Wave/Wave';

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <Wave />
      <div className="bg-black w-full text-deepbread-white text-xs p-6 text-center absolute bottom-0">
        © 2024. Imgyeong Lee. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
