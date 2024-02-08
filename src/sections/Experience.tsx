import Section from '../layouts/Section';
import { motion, useAnimation } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Experience = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const draw = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <Section className="bg-gradient-to-t from-deepbread-teagreen to-deepbread-lightgreen flex flex-col">
      <div className="text-6xl font-bold pt-10 pb-5">
        Experience
        <div className="text-base font-normal pt-3">Aiming for the best slowly, but surely</div>
      </div>
      <div className="h-full grid grid-rows-experience grid-cols-experience">
        <ExperienceCard className="col-span-1 row-start-3 row-end-4 w-2/3 justify-self-end" />
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          ref={ref}
          viewBox="0 0 50 50"
          initial="hidden"
          animate={controls}
          className="w-full h-full col-span-1 row-start-1 row-end-4">
          <motion.line x1="25" y1="180" x2="25" y2="-120" stroke="#ffffff" variants={draw}></motion.line>
        </motion.svg>
        <ExperienceCard isRight={true} className="col-start-3 col-end-4 row-start-1 row-end-2 w-2/3" />
      </div>
    </Section>
  );
};

export default Experience;
