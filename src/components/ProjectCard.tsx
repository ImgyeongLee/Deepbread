import { sampleData } from '../data';
import ProjectImage from './ProjectImage';

const ProjectCard = () => {
  return (
    <div className="flex flex-col bg-deepbread-white p-4 rounded-xl shadow-lg row-span-1 aspect-video items-center justify-center gap-3 hover:scale-105 ease-in-out transition">
      <ProjectImage link={sampleData.image} />
      <div className="bg-transparent p-1 w-full rounded-xl">
        <div>{sampleData.github}</div>
        <div>{sampleData.description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
