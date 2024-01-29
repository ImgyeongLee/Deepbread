import ProjectImage from "./ProjectImage";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../shared/variants";
import { Project } from "../shared/types";
import { ComponentProps, FC } from "react";

type ProjectCardProps = ComponentProps<"div"> & {
   project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
   const basicCSS =
      "flex flex-col bg-deepbread-white p-4 rounded-xl shadow-lg row-span-1 aspect-video items-center justify-center gap-3 hover:scale-105";
   return (
      <motion.div
         className={basicCSS}
         variants={fadeInAnimationVariants}
         initial="initial"
         whileInView="animate"
         whileHover="hover"
         custom={project.id}
      >
         <ProjectImage link={project.image} />
         <div className="bg-transparent p-1 w-full rounded-xl">
            <div>{project.github}</div>
            <div>{project.description}</div>
         </div>
      </motion.div>
   );
};

export default ProjectCard;
