import React from 'react';
import { Calendar, Building, Target, Wrench, TrendingUp, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {project.name}
          </h3>
          <button
            onClick={() => onViewDetails(project)}
            className="flex-shrink-0 p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200 ml-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Info Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{project.period}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600">
            <Building className="w-4 h-4 text-green-500" />
            <span className="text-sm">{project.context}</span>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Objectif</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 pl-6">
            {project.objective}
          </p>
        </div>

        {/* Tools */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Wrench className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Outils utilisés</span>
          </div>
          <div className="flex flex-wrap gap-1 pl-6">
            {project.tools.slice(0, 3).map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                +{project.tools.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Results Preview */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Résultats</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 pl-6">
            {project.results}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={() => onViewDetails(project)}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform group-hover:scale-105"
          >
            <span>Voir les détails</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;