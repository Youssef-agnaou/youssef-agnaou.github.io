import React from 'react';
import { Code, Settings, Zap, Star } from 'lucide-react';
import { skills } from '../data/portfolio';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'software':
        return Code;
      case 'methodology':
        return Settings;
      case 'technology':
        return Zap;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'software':
        return 'blue';
      case 'methodology':
        return 'green';
      case 'technology':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const getLevelStars = (level: string) => {
    const levels = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 };
    return levels[level as keyof typeof levels] || 1;
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryNames = {
    software: 'Logiciels & Outils',
    methodology: 'Méthodologies',
    technology: 'Technologies'
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Maîtrise d'outils avancés et de méthodologies modernes pour l'ingénierie mécanique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const Icon = getCategoryIcon(category);
            const color = getCategoryColor(category);
            
            return (
              <div key={category} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 bg-${color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < getLevelStars(skill.level)
                                  ? `text-${color}-500 fill-current`
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-full transition-all duration-500 group-hover:from-${color}-500 group-hover:to-${color}-700`}
                          style={{ width: `${(getLevelStars(skill.level) / 4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications & Formations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SW</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">SolidWorks Professional</div>
                <div className="text-sm text-gray-600">Certification CSWA</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L6</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Lean Six Sigma</div>
                <div className="text-sm text-gray-600">Green Belt</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Machine Learning</div>
                <div className="text-sm text-gray-600">Formation Coursera</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;