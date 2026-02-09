import { Page, Experience } from './types';
import { 
  Globe, 
  PenTool, 
  Image, 
  Code,
  Terminal,
  BrainCircuit,
  Layers,
  MessageSquare,
  Database,
  Server,
  Layout
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { id: Page.LOGO, label: 'Logo Design', icon: PenTool, color: 'bg-[#F0F0F0] text-black border-gray-200' },
  { id: Page.WEB, label: 'Web Design', icon: Layout, color: 'bg-[#7C3AED] text-white border-violet-600' },
  { id: Page.THUMBNAIL, label: 'Thumbnail Art', icon: Image, color: 'bg-[#10B981] text-white border-emerald-600' },
  { id: Page.AI, label: 'AI Development', icon: BrainCircuit, color: 'bg-[#0B0F19] text-white border-gray-700' },
  { id: Page.CONTACT, label: 'Contact Me', icon: MessageSquare, color: 'bg-[#F43F5E] text-white border-rose-600' },
];

export const EXPERIENCES: Experience[] = [
  {
    type: 'Experience',
    role: 'Freelance Developer & Designer',
    company: 'Self-Employed',
    period: '2026 - Present'
  },
  {
    type: 'Education',
    role: 'Passed 12th Grade',
    company: 'Higher Secondary School',
    period: '2025 - 2026'
  }
];

export const SOFTWARE_SKILLS = [
  { name: 'React / Next.js', icon: Code, level: 'Advanced' },
  { name: 'TypeScript', icon: Terminal, level: 'Advanced' },
  { name: 'Node.js', icon: Server, level: 'Intermediate' },
  { name: 'Python / AI', icon: BrainCircuit, level: 'Intermediate' },
  { name: 'PostgreSQL', icon: Database, level: 'Intermediate' },
  { name: 'Figma / UI', icon: Layers, level: 'Advanced' },
];

export const PORTFOLIO_DATA = [
  // LOGOS
  {
    id: '1',
    category: Page.LOGO,
    title: 'Nexus Tech',
    description: 'Modern minimalist logo for a blockchain startup.',
    image: 'https://picsum.photos/800/800?random=101',
    tags: ['Branding']
  },
  {
    id: '2',
    category: Page.LOGO,
    title: 'Green Leaf Cafe',
    description: 'Organic identity.',
    image: 'https://picsum.photos/800/800?random=102',
    tags: ['Logo']
  },
   {
    id: 'L3',
    category: Page.LOGO,
    title: 'Bolt Energy',
    description: 'Electric branding.',
    image: 'https://picsum.photos/800/800?random=109',
    tags: ['Logo']
  },
   {
    id: 'L4',
    category: Page.LOGO,
    title: 'Cloud Nine',
    description: 'Dreamy aesthetic.',
    image: 'https://picsum.photos/800/800?random=110',
    tags: ['Brand']
  },
   {
    id: 'L5',
    category: Page.LOGO,
    title: 'Pixel Perfect',
    description: 'Retro gaming logo.',
    image: 'https://picsum.photos/800/800?random=111',
    tags: ['Retro']
  },

  // WEB DESIGN
  {
    id: '3',
    category: Page.WEB,
    title: 'E-Commerce Dashboard',
    description: 'Full stack analytics dashboard using Next.js and Tailwind.',
    image: 'https://picsum.photos/1200/800?random=103',
    tags: ['Next.js', 'Tailwind']
  },
  {
    id: '4',
    category: Page.WEB,
    title: 'Portfolio V1',
    description: 'Previous portfolio site built with Three.js.',
    image: 'https://picsum.photos/1200/800?random=104',
    tags: ['Three.js', 'WebGL']
  },
  {
    id: 'W3',
    category: Page.WEB,
    title: 'SaaS Landing Page',
    description: 'High converting landing page for a startup.',
    image: 'https://picsum.photos/1200/800?random=112',
    tags: ['Framer', 'Design']
  },

  // THUMBNAILS
  {
    id: '5',
    category: Page.THUMBNAIL,
    title: 'Gaming Highlights',
    description: '',
    image: 'https://picsum.photos/1280/720?random=105',
    tags: []
  },
  {
    id: '6',
    category: Page.THUMBNAIL,
    title: 'Tech Review',
    description: '',
    image: 'https://picsum.photos/1280/720?random=106',
    tags: []
  },
  {
    id: 'T3',
    category: Page.THUMBNAIL,
    title: 'Vlog Daily',
    description: '',
    image: 'https://picsum.photos/1280/720?random=113',
    tags: []
  },
  {
    id: 'T4',
    category: Page.THUMBNAIL,
    title: 'Tutorial Basics',
    description: '',
    image: 'https://picsum.photos/1280/720?random=114',
    tags: []
  },

  // AI DEVELOPMENT
  {
    id: '7',
    category: Page.AI,
    title: 'AI Chatbot Assistant',
    description: 'Custom LLM-powered customer support agent.',
    image: 'https://picsum.photos/800/600?random=107',
    tags: ['Python', 'OpenAI']
  },
  {
    id: '8',
    category: Page.AI,
    title: 'Image Gen Tool',
    description: 'Stable Diffusion wrapper for generating game assets.',
    image: 'https://picsum.photos/800/600?random=108',
    tags: ['ML', 'PyTorch']
  }
];