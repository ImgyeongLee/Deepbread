import { cn } from '../lib/tailwind-utils';
import { ComponentProps, ReactNode, FC } from 'react';

type SectionProps = ComponentProps<'div'> & {
  className?: string;
  children?: ReactNode;
};

const Section: FC<SectionProps> = ({ className, children }) => {
  return <div className={cn('w-screen h-screen text-center items-center justify-center', className)}>{children}</div>;
};

export default Section;
