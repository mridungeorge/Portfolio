
import { ReactElement } from "react";

export type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: ReactElement;
};

export type Certificate = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  icon: ReactElement;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: ReactElement;
  githubUrl: string | null;
  liveUrl: string | null;
  details?: string;
  image?: string;
};
