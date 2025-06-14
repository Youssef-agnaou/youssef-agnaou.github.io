import { Project, Skill, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Youssef Agnaou",
  title: "Étudiant en Génie Mécanique des Systèmes Industriels",
  tagline: "Passionné par l'innovation industrielle, l'optimisation et la mécatronique",
  email: "youssef.agnaou@email.com",
  linkedin: "https://linkedin.com/in/youssef-agnaou",
  cvUrl: "/cv-youssef-agnaou.pdf",
  photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
};

export const skills: Skill[] = [
  { name: "SolidWorks", category: "software", level: "expert" },
  { name: "CATIA V5", category: "software", level: "advanced" },
  { name: "Abaqus", category: "software", level: "intermediate" },
  { name: "AutoCAD", category: "software", level: "advanced" },
  { name: "MATLAB", category: "software", level: "intermediate" },
  { name: "Python", category: "software", level: "intermediate" },
  { name: "Lean Manufacturing", category: "methodology", level: "advanced" },
  { name: "Six Sigma", category: "methodology", level: "intermediate" },
  { name: "Intelligence Artificielle", category: "technology", level: "intermediate" },
  { name: "IoT", category: "technology", level: "beginner" },
  { name: "Impression 3D", category: "technology", level: "advanced" },
  { name: "Robotique", category: "technology", level: "intermediate" }
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Optimisation d'une ligne de production automobile",
    period: "Septembre 2024 - Décembre 2024",
    context: "Stage chez Renault Maroc",
    objective: "Réduire les temps d'arrêt et améliorer l'efficacité de la ligne d'assemblage",
    technicalRealization: "Analyse des goulots d'étranglement, redesign des postes de travail, mise en place d'un système de maintenance prédictive",
    tools: ["SolidWorks", "Lean Manufacturing", "Python", "Excel"],
    results: "Réduction de 25% des temps d'arrêt et augmentation de 15% de la productivité"
  },
  {
    id: "2",
    name: "Conception d'un système de convoyage automatisé",
    period: "Février 2024 - Mai 2024",
    context: "Projet académique - École d'ingénieurs",
    objective: "Développer un système de transport automatisé pour une usine pharmaceutique",
    technicalRealization: "Conception mécanique complète, simulation des contraintes, programmation du système de contrôle",
    tools: ["CATIA V5", "Abaqus", "MATLAB", "Arduino"],
    results: "Prototype fonctionnel avec précision de ±0.1mm et capacité de 500 pièces/heure"
  },
  {
    id: "3",
    name: "Étude vibratoire d'un équipement industriel",
    period: "Octobre 2023 - Janvier 2024",
    context: "Mission consultante - Entreprise locale",
    objective: "Identifier et résoudre les problèmes de vibrations excessives sur une machine de production",
    technicalRealization: "Analyse modale, mesures expérimentales, propositions d'améliorations structurelles",
    tools: ["Abaqus", "MATLAB", "Analyseur de spectre", "SolidWorks"],
    results: "Réduction de 80% des vibrations et élimination des arrêts non planifiés"
  }
];