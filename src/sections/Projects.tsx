import Section from '../layouts/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <Section className="bg-deepbread-green h-full">
      <div className="text-6xl font-bold text-white pt-10 pb-3">Projects</div>
      <div className="text-white">that I have done so far...</div>
      <div className="grid grid-cols-3 grid-flow-row justify-center gap-10 h-full w-full items-center p-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  );
};

export default Projects;
