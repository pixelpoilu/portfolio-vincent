export type Project = {
  id: number;
  title: string;
  client: string;
  year: number;
  type: string;
  description: string;  
  link?: string;
  secteur: string;
  Contexte: string;
  Reponse: string;
  outils: string[];
  technologies: string[];
  image: string;
  mediapath: string;
  medias: string[];
  missions: string[];
  status: "draft" | "published" | "archived";
  order: number;
};

