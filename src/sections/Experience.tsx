import Section from '../layouts/Section';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 1, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay: 1, duration: 0.01 },
      },
    },
  };

  return (
    <Section className="bg-gradient-to-t from-deepbread-teagreen to-deepbread-lightgreen flex flex-col">
      <div className="text-6xl font-bold pt-10 pb-5">
        Experience<div className="text-base font-normal pt-3">Aiming for the best slowly, but surely</div>
      </div>
      <motion.svg viewBox="0 0 600 600" initial="hidden" animate="visible">
        <motion.line x1="360" y1="600" x2="360" y2="0" stroke="#000000" custom={1} variants={draw}></motion.line>
      </motion.svg>
      <ExperienceCard />
      <div className="flex flex-col items-center justify-center gap-5 w-3/4 h-full"></div>
    </Section>
  );
};

export default Experience;
