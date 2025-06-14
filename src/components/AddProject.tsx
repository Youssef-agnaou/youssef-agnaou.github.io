import React, { useState } from 'react';
import { Plus, Save, X, Upload } from 'lucide-react';
import { Project } from '../types';

interface AddProjectProps {
  onAddProject: (project: Project) => void;
}

const AddProject: React.FC<AddProjectProps> = ({ onAddProject }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    period: '',
    context: '',
    objective: '',
    technicalRealization: '',
    tools: '',
    results: '',
    image: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProject: Project = {
      id: Date.now().toString(),
      name: formData.name,
      period: formData.period,
      context: formData.context,
      objective: formData.objective,
      technicalRealization: formData.technicalRealization,
      tools: formData.tools.split(',').map(tool => tool.trim()).filter(tool => tool),
      results: formData.results,
      image: formData.image || undefined
    };

    onAddProject(newProject);
    
    // Reset form
    setFormData({
      name: '',
      period: '',
      context: '',
      objective: '',
      technicalRealization: '',
      tools: '',
      results: '',
      image: ''
    });
    
    setIsFormOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ajouter un nouveau projet</h2>
          <p className="text-lg text-gray-600">
            Documentez vos dernières réalisations techniques
          </p>
        </div>

        {!isFormOpen ? (
          <div className="text-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="w-6 h-6" />
              <span>Nouveau Projet</span>
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Détails du projet</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du projet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: Optimisation d'une ligne de production"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Période *
                  </label>
                  <input
                    type="text"
                    name="period"
                    value={formData.period}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: Septembre 2024 - Décembre 2024"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contexte ou entreprise *
                </label>
                <input
                  type="text"
                  name="context"
                  value={formData.context}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Stage chez Renault Maroc"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objectif du projet *
                </label>
                <textarea
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez l'objectif principal du projet..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Réalisation technique *
                </label>
                <textarea
                  name="technicalRealization"
                  value={formData.technicalRealization}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez les étapes techniques, méthodes utilisées..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Outils utilisés *
                </label>
                <input
                  type="text"
                  name="tools"
                  value={formData.tools}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: SolidWorks, MATLAB, Python (séparés par des virgules)"
                />
                <p className="text-sm text-gray-500 mt-1">Séparez les outils par des virgules</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Résultats ou impact concret *
                </label>
                <textarea
                  name="results"
                  value={formData.results}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Réduction de 25% des temps d'arrêt..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image du projet (URL)
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://exemple.com/image.jpg"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex-1"
                >
                  <Save className="w-5 h-5" />
                  <span>Enregistrer le projet</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-3 px-6 rounded-lg font-medium transition-all duration-200 sm:flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                  <span>Annuler</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddProject;