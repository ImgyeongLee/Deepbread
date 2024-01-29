import Section from "../layouts/Section";
import ProjectCard from "../components/ProjectCard";
import { sampleData } from "../data";

const Playground = () => {
   return (
      <Section className="bg-gradient-to-b from-deepbread-green to-deepbread-white h-full">
         <div className="text-6xl font-bold pt-10 pb-3">
            ...And Other Projects
         </div>
         <div className="">that are just for fun or whatever</div>
         <div className="grid grid-cols-3 grid-flow-row justify-center gap-10 h-full w-full items-center p-16">
            {sampleData.map((project) => (
               <ProjectCard project={project} />
            ))}
         </div>
      </Section>
   );
};

export default Playground;
