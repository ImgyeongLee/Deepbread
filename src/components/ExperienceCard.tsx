import { cn } from '../lib/tailwind-utils';
import { ComponentProps, FC } from 'react';

type ExperienceCardProps = ComponentProps<'div'> & {
  className?: string;
  isRight?: boolean;
};

const ExperienceCard: FC<ExperienceCardProps> = ({ className, isRight }) => {
  return (
    <div className={cn('p-5 self-center', className)}>
      <div className="bg-white p-4 rounded-xl shadow-md gap-3 w-full">
        <ul className="items-center justify-center flex flex-col">
          <li
            className={cn('w-full px-1 pt-2 text-sm font-normal font-roboto text-right', {
              'text-left': isRight,
            })}>
            Nov 2023 ~ Present
          </li>
          <li className={cn('text-2xl font-bold py-2 font-raleway italic self-end', { 'self-start': isRight })}>
            CompanyName
          </li>
          <li className={cn('bg-white w-full text-right py-1', { 'text-left': isRight })}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li className={cn('bg-white w-full text-right py-1', { 'text-left': isRight })}>
            Rem architecto eveniet aliquam quasi, recusandae unde, esse temporibus expedita molestias dolor quis
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
