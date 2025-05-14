
import React from 'react';
import { Check, Building, MapPin, Clock, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Experiência Local",
      description: "Vasto conhecimento das normas e regulamentos da Região dos Lagos.",
      icon: MapPin
    },
    {
      title: "Equipe Qualificada",
      description: "Profissionais especializados em engenharia e arquitetura.",
      icon: Users
    },
    {
      title: "Projetos Completos",
      description: "Do arquitetonico, ao complementares.",
      icon: Building
    },
    {
      title: "Atendimento Ágil",
      description: "Prazos otimizados para sua obra começar o quanto antes.",
      icon: Clock
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-heringer-blue">Sobre Nós</h2>
        <p className="section-description">
          A HERINGER ENGENHARIA é especializada em desenvolvimento de projetos e processos de aprovação junto às prefeituras da Região dos Lagos, com foco em Saquarema.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-heringer-blue">Nossa Missão</h3>
            <p className="text-gray-700 mb-6">
              Facilitar o processo de aprovação de projetos para nossos clientes, garantindo qualidade técnica e conformidade com todas as normas vigentes na Região dos Lagos.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-heringer-blue">Por Que Escolher a Heringer?</h3>
            <ul className="space-y-3">
              {[
                "Profundo conhecimento dos procedimentos locais",
                "Equipe técnica altamente qualificada",
                "Acompanhamento personalizado em todas as etapas",
                "Expertise em normas e legislações municipais",
                "Compromisso com prazos e qualidade"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <feature.icon className="h-10 w-10 text-heringer-light-blue mb-4" />
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
