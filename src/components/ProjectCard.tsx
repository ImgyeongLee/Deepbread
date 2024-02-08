import ProjectImage from './ProjectImage';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '../shared/variants';
import { Project } from '../shared/types';
import { ComponentProps, FC } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type ProjectCardProps = ComponentProps<'div'> & {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const basicCSS =
    'flex flex-col bg-deepbread-white rounded-xl shadow-lg row-span-1 aspect-video items-center justify-center gap-5 hover:scale-105';
  return (
    <motion.div
      className={basicCSS}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      custom={project.id}>
      <ProjectImage link={project.image} />
      <div className="bg-transparent w-full rounded-xl pb-6 px-4">
        <div className="font-bold text-xl py-1">{project.title}</div>
        <div className="flex flex-row justify-center">
          {project.link && (
            <Link to={project.link} target="_blank" className="px-5 py-2 text-lg">
              <FaLink />
            </Link>
          )}
          <Link to={project.github} target="_blank" className="px-5 py-2 text-lg">
            <FaGithub />
          </Link>
        </div>

        <div>{project.description}</div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
