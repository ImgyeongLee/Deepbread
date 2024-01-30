import { motion } from 'framer-motion';

const ExperienceCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md gap-3 w-1/5">
      <ul className="bg-sky-400 items-center justify-center flex flex-col">
        <li className=" text-2xl font-bold font-raleway italic py-3 self-end pr-3">CompanyName</li>
        <li className="bg-white w-full p-1 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li className="bg-white w-full p-1 text-left ">
          Rem architecto eveniet aliquam quasi, recusandae unde, esse temporibus expedita molestias dolor quis
        </li>
        <li className="bg-white w-full p-1 text-left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto eveniet aliquam quasi, recusandae
          unde, esse temporibus expedita molestias dolor quis exercitationem totam enim facilis voluptatem blanditiis id
          quam iusto.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
