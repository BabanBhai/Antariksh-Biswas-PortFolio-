import { LucideIcon } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level?: string;
  icon?: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: 'Education' | 'Experience' | 'Certification';
}

export enum Page {
  HOME = 'home',
  LOGO = 'logo',
  WEB = 'web',
  THUMBNAIL = 'thumbnail',
  AI = 'ai',
  CONTACT = 'contact'
}