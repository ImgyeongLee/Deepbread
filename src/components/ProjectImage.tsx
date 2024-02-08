import { ComponentProps, FC } from 'react';

type ProjectImageProps = ComponentProps<'div'> & {
  link: string;
};

const ProjectImage: FC<ProjectImageProps> = ({ link }) => {
  return <img src={link} className="bg-slate-400 w-full rounded-tr-xl rounded-tl-xl h-full object-cover" />;
};

export default ProjectImage;
