export const fadeInAnimationVariants = {
   initial: {
      opacity: 0,
      y: 50,
   },
   animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.05 * index,
      },
   }),
   hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
   },
};

export const navbarAnimationVariants = {
   initial: {
      opacity: 0,
      y: -100,
   },
   animate: {
      opacity: 1,
      y: 0,
   },
   exit: {
      opacity: 0,
      y: -100,
   },
};
