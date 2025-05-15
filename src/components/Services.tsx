
import React from 'react';
import { FileText, Ruler, Building, CheckSquare, HelpCircle, FilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Projetos Arquitetônicos",
      description: "Desenvolvimento de projetos residenciais e comerciais com rendereização 3D."
    },
    {
      icon: Building,
      title: "Regularização de Imóveis",
      description: "Regularização de construções existentes junto à prefeitura, obtenção de habite-se e demais documentações."
    },
    {
      icon: CheckSquare,
      title: "Aprovação de Projetos",
      description: "Acompanhamento completo do processo de aprovação junto às prefeituras da Região dos Lagos, como Saquarema e Araruama."
    },
    {
      icon: Ruler,
      title: "Projetos Estruturais",
      description: "Elaboração de projetos estruturais com cálculos precisos para garantir a segurança e viabilidade da sua construção."
    },
    {
      icon: FilePlus,
      title: "Projetos Complementares",
      description: "Desenvolvimento de projetos elétricos, hidráulicos, e demais projetos complementares necessários."
    },
    {
      icon: HelpCircle,
      title: "Consultoria Técnica",
      description: "Orientação especializada sobre normas, legislação e processos construtivos."
    }
  ];

  return (
    <section id="services" className="section-padding bg-heringer-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-heringer-blue">Nossos Serviços</h2>
        <p className="section-description">
          Oferecemos soluções completas em engenharia e arquitetura para o seu projeto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <service.icon className="h-12 w-12 text-heringer-light-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Precisa de um serviço específico?</h3>
          <Button size="lg" className="bg-heringer-blue hover:bg-heringer-light-blue text-white">
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
