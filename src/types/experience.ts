
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
