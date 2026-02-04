export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;

  role: string;
  type: string;

  description: string;
  missions: string[];
  technologies: string[];

  image: string;
  link?: string;
};
