import React from 'react';
import { Mail, Linkedin, Download, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Photo professionnelle */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">YA</span>
              </div>
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p className="text-xl text-blue-700 font-medium">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* Liens et actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center space-x-2 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger CV</span>
              </a>
            </div>

            {/* Statistiques */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-500">Projets Réalisés</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600">25%</div>
                <div className="text-sm text-gray-500">Amélioration Moyenne</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-orange-600">12+</div>
                <div className="text-sm text-gray-500">Compétences Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;