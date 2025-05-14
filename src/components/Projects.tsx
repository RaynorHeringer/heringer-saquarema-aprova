
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('todos');
  
  const tabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'Saquarema', label: 'Saquarema' },
    { id: 'Marica', label: 'Maricá' },
    { id: 'aprovacoes', label: 'Aprovações' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Jacone",
      category: "Saquarema",
      image: "https://drive.google.com/file/d/1neLAu4r4VpygW2vWcOOgiXB_xZ7ZWfol/preview",
      description: "Projeto arquitetônico residencial em Jacone aprovado na prefeitura de Saquarema."
    },
    {
      id: 2,
      title: "Vilatur",
      category: "Saquarema",
      image: "https://canadacentral1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=192219&inputFormat=jpg&cs=MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!I_8WAgbT8EiWkBBS0rnosgc3iKkSGMFFgCz5qSZioC5soyJAHNuVSLJPpnX1vKAd%2Fitems%2F01IUZ75ASKQOMSYLG7GVGIFA2NBH6IEDJE%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiIwMjE2ZmYyMy1kMzA2LTQ4ZjAtOTY5MC0xMDUyZDJiOWU4YjIiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3NDcyNzgwMDAifQ.5kge_3RHmI-ZmDAaIjBVl5N8v1fs-e03AgxH0AoI_ThhgAptqcRCV3-_r-g6nWhZB2cY2Q53NfF93XjbAXLXEPK0k2x7uWy2r_wsO1rAzMQMVuVg2uR515GgQoq6WFB9TpctbWqSu76V1qOVcjNMlrtFA23bQEBlkyanGKOoMe4hfMFvl5Gc4FHvE7h9DU0zXHePxr_qUOlakLxYpVl13VSX8RiqbyUigJxSSZPovIPgrvxLhpK33Kyc-DzxWKwlg1LjiPcAAICT1k3XhAZpNuzQ0w0ei_v5Bk7UL2AOXSHJj4uzmmrLKTXH_rHYZrel4Mm1AOPOaTI7c9Iiw6mW6yig89XeCnDPFFlaKXlZAIKsIM8kzzgj7KupNB_VPmdx.GqqOPdrU1aJbWjzjWCL5VbognjANPkxGlP4jKRPocn4%26version%3DPublished&cb=63882859936&encodeFailures=1&width=1534&height=863",
      description: "Projeto arquitetônico residencial em Vilatur aprovado na prefeitura de Saquarema."
    },
    {
      id: 3,
      title: "Conjunto Residencial Bacaxá",
      category: "Saquarema",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Condomínio com 5 unidades residenciais em Bacaxá."
    },
    {
      id: 4,
      title: "Regularização Imobiliária",
      category: "aprovacoes",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "Processo de regularização e obtenção de habite-se para residência existente."
    },
    {
      id: 5,
      title: "Centro Empresarial",
      category: "Marica",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      description: "Projeto para centro empresarial na região central de Saquarema."
    },
    {
      id: 6,
      title: "Aprovação em Prefeitura",
      category: "aprovacoes",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Processo completo de aprovação de projeto residencial multifamiliar."
    },
    {
      id: 7,
      title: "Aprovação em Prefeitura",
      category: "aprovacoes",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Processo completo de aprovação de projeto residencial multifamiliar."
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
