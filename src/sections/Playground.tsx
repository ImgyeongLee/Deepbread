import Section from '../layouts/Section';
import ProjectCard from '../components/ProjectCard';

const Playground = () => {
  return (
    <Section className="h-full">
      <div className="text-6xl font-bold pt-10 pb-3">...And Other Projects</div>
      <div className="">that are just for fun or whatever</div>
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

export default Playground;
