
import React from 'react';
import { Banknote, Gavel, Ship, Building } from 'lucide-react';

const Contratantes = () => {
  const contratantes = [
    { nome: 'Banco do Brasil', icon: Banknote, descricao: 'Serviços de avaliação e elaboração de laudos.' },
    { nome: 'Tribunal de Justiça do RJ', icon: Gavel, descricao: 'Elaboração de laudos de pericia em eng. Civil' },
    { nome: 'Marinha do Brasil', icon: Ship, descricao: 'Serviço de Engenharia para CCCPM' },
    { nome: 'BNDES', icon: Building, descricao: 'Serviços de avaliação em geral' }
  ];

  return (
    <section id="contratantes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heringer-blue mb-4">Nossos Contratantes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temos orgulho de trabalhar com instituições de renome que confiam em nossa expertise para seus serviços de engenharia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contratantes.map((contratante, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <contratante.icon className="h-10 w-10 text-heringer-light-blue" />
              </div>
              <h3 className="text-xl font-semibold text-heringer-blue mb-2">{contratante.nome}</h3>
              <p className="text-gray-600">{contratante.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contratantes;
