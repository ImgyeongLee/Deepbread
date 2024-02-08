import Section from '../layouts/Section';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data';

const Projects = () => {
  return (
    <Section className="bg-gradient-to-t from-deepbread-green to-deepbread-teagreen h-full">
      <div className="text-6xl font-bold text-white pt-10 pb-3">Projects</div>
      <div className="text-white">that I have done so far...</div>
      <div className="grid grid-cols-3 grid-flow-row justify-center gap-12 h-full w-full items-center p-20">
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
