// /Users/suhaanigarg/Downloads/avika-bansal-portfolio (1)/constants.tsx
import React from 'react';
import { Project } from './types';
import { 
  Type, 
  Layers, 
  Palette, 
  FileText, 
  Camera, 
  Plane, 
  Scissors, 
  Dribbble 
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    title: "Rooted Typography",
    description: "An organic typography exploration titled 'ROOTED', combining natural textures with structured letterforms, framed by seasonal floral elements.",
    link: "https://drive.google.com/file/d/14qMxCJhK5Qlx5OTVRp9B1k_FE6YT_wCZ/view?usp=sharing",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Illustration Story Book",
    description: "An illustration-driven story about rivalry, identity, and belonging.",
    link: "https://drive.google.com/drive/folders/1Z1iX7uwLRiMGHpfMJDN_lzJQmchPYX-m?usp=sharing",
    image: "https://picsum.photos/seed/story/800/600"
  },
  {
    title: "Brand Identity Project",
    description: "A brand identity centered on extending the life cycle of distressed denim.",
    link: "https://drive.google.com/drive/folders/17f1mlyxZi8lJvTntGus5DrLaYjLBPkav?usp=sharing",
    image: "https://picsum.photos/seed/denim/800/600"
  },
  {
    title: "Mascot Design Project",
    description: "A character-led extension of Paper Boat’s nostalgic universe, designed to embody curiosity and mischief.",
    link: "https://drive.google.com/file/d/1h_xWE0IrNPOAjO20NyKCPznq5a04QeUg/view?usp=drive_link",
    image: "https://picsum.photos/seed/mascot/800/600"
  }
];

export const SKILLS = [
  { name: "Typography", icon: <Type size={20} /> },
  { name: "Logo & Brand Identity", icon: <Palette size={20} /> },
  { name: "Photo & Video Editing", icon: <Camera size={20} /> },
  { name: "Layout & Poster Design", icon: <Layers size={20} /> }
];

export const SOFTWARE = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "DaVinci Resolve"
];

export const HOBBIES = [
  {
    name: "Travelling",
    icon: <Plane size={20} />,
    link: "https://drive.google.com/drive/folders/1NQV_c8HXUyHrRKu5vy_QqbIp5heISpbB?usp=sharing"
  },
  {
    name: "Photography",
    icon: <Camera size={20} />,
    link: "https://drive.google.com/drive/folders/1ozifV0naNVz8HfWjSLzBNbOg5SW0xNBM?usp=sharing"
  },
  {
    name: "Crochet",
    icon: <Scissors size={20} />,
    link: "https://www.instagram.com/artika.crochet/"
  },
  {
    name: "Basketball",
    icon: <Dribbble size={20} />,
    link: "https://drive.google.com/drive/folders/1sxTfpELFrg2oucIvUNd22n07RVCHpzOK?usp=drive_link"
  }
];