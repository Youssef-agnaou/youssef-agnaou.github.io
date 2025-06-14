import React from 'react';
import { X, Calendar, Building, Target, Wrench, TrendingUp, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Project Image */}
          {project.image && (
            <div className="mb-6">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center space-x-2 mb-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Période</h3>
              </div>
              <p className="text-blue-800">{project.period}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-center space-x-2 mb-3">
                <Building className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-green-900">Contexte</h3>
              </div>
              <p className="text-green-800">{project.context}</p>
            </div>
          </div>

          {/* Objective */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-900">Objectif du projet</h3>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <p className="text-gray-800 leading-relaxed">{project.objective}</p>
            </div>
          </div>

          {/* Technical Realization */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">Réalisation technique</h3>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <p className="text-gray-800 leading-relaxed mb-4">{project.technicalRealization}</p>
              
              <div className="mt-4">
                <h4 className="font-medium text-purple-900 mb-2">Outils et technologies utilisés :</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Résultats et impact</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-gray-800 leading-relaxed">{project.results}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex-1">
              <ExternalLink className="w-5 h-5" />
              <span>Voir le projet complet</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-3 px-6 rounded-lg font-medium transition-all duration-200 sm:flex-shrink-0"
            >
              <span>Fermer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;