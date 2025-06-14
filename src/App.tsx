import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Footer from './components/Footer';
import { projects as initialProjects } from './data/portfolio';
import { Project } from './types';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleAddProject = (newProject: Project) => {
    setProjects([...projects, newProject]);
    setActiveSection('projects'); // Redirect to projects after adding
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Skills />
          </>
        );
      case 'projects':
        return <Projects />;
      case 'add-project':
        return <AddProject onAddProject={handleAddProject} />;
      case 'skills':
        return <Skills />;
      default:
        return (
          <>
            <Hero />
            <Skills />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {renderActiveSection()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;