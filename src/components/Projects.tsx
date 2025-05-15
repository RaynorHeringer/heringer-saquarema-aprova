
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('todos');
  
  const tabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'Saquarema', label: 'Saquarema' },
    { id: 'Marica', label: 'Maricá' },
    { id: 'Araruama', label: 'Araruama' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Jacone",
      category: "Saquarema",
      image: "/lovable-uploads/Imagem13.jpg",
      description: "Projeto arquitetônico residencial em Jacone aprovado na prefeitura de Saquarema."
    },
    {
      id: 2,
      title: "Vilatur",
      category: "Saquarema",
      image: "/lovable-uploads/Image35.jpg",
      description: "Projeto arquitetônico residencial em Vilatur aprovado na prefeitura de Saquarema."
    },
    {
      id: 3,
      title: "Bacaxá",
      category: "Saquarema",
      image: "/lovable-uploads/Imagem24.png",
      description: "Residencia de alto padrão em Bacaxa."
    },
    {
      id: 4,
      title: "Collynas Park",
      category: "Araruama",
      image: "/lovable-uploads/araruama01.jpg",
      description: "Projeto aprovado junto a prefeitura de Araruama."
    },
    {
      id: 5,
      title: "AlphaVille",
      category: "Marica",
      image: "/lovable-uploads/marica01.jpg",
      description: "Projeto para centro empresarial na região central de Saquarema."
    },
    {
      id: 6,
      title: "Sítio interior de Maricá",
      category: "Marica",
      image: "/lovable-uploads/Marica02.jpg",
      description: "Projeto de reforma no interior de Maricá."
    }
  ];
  
  const filteredProjects = activeTab === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-heringer-blue">Alguns Projetos Realizados</h2>
        <p className="section-description">
          Conheça alguns dos nossos projetos desenvolvidos e aprovados na Região dos Lagos.
        </p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <Button 
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={activeTab === tab.id 
                ? "bg-heringer-blue hover:bg-heringer-light-blue" 
                : "text-heringer-blue hover:text-heringer-light-blue"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-md border border-gray-100">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          <Button variant="outline" size="icon" className="rounded-full border-heringer-blue text-heringer-blue hover:bg-heringer-blue hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-heringer-blue text-heringer-blue hover:bg-heringer-blue hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
