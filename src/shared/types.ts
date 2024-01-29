export type Project = {
   id: number;
   title: string;
   image: string;
   link?: string;
   github: string;
   description: string;
};

export type Award = {
   id: number;
   title: string;
   image: string;
   description: string;
};

export type Experience = {
   id: number;
   title: string;
   position?: string;
   date?: string;
   description: string;
};

export type Contact = {
   id: number | string;
   title: string;
   image: string;
   link?: string;
};
