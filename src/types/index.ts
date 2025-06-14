export interface Project {
  id: string;
  name: string;
  period: string;
  context: string;
  objective: string;
  technicalRealization: string;
  tools: string[];
  results: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: 'software' | 'methodology' | 'technology';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  linkedin: string;
  cvUrl: string;
  photo: string;
}