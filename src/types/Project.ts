export type ProjectMedia = {
  file: string;
  caption?: string;
};

export type Project = {
  id: number;
  title: string;
  client: string;
  year: number;
  type: string | string[];
  description: string;  
  longtext?: string;
  link?: string;
  secteur: string;
  Contexte: string;
  Reponse: string;
  outils: string[];
  technologies: string[];
  image: string;
  thumb?: string;
  masonry_0?: string;
  masonry_1?: string;
  case_image?: string;
  portfolio_image?: string;
  mediapath: string;
  medias: Array<string | ProjectMedia>;
  missions: string[];
  status: "draft" | "published" | "archived";
  order: number;
  caseorder?: number;
  collection: string[] | string;
};
