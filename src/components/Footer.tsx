import React from 'react';
import { Heart, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </a>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Maroc</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Réseaux</h3>
            <div className="flex space-x-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0A66C2] hover:bg-[#004182] rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a
                href="https://github.com/youssef-agnaou"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Accueil
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Projets
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Compétences
              </a>
              <a
                href={personalInfo.cvUrl}
                download
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Télécharger CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 sm:mb-0">
            <span>Développé avec</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>par {personalInfo.name}</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio - Tous droits réservés
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;