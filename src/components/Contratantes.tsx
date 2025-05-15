
import React from 'react';

const Contratantes = () => {
  const contratantes = [
    { 
      nome: 'Banco do Brasil', 
      logo: 'https://logodownload.org/wp-content/uploads/2014/05/banco-do-brasil-logo-1.png', 
      descricao: 'Serviços de avaliação e elaboração de laudos.' 
    },
    { 
      nome: 'Tribunal de Justiça do RJ', 
      logo: 'https://i.pinimg.com/originals/1a/fb/0d/1afb0d2689f676db5ff884b3b9f5dbb9.png', 
      descricao: 'Elaboração de laudos de pericia em eng. Civil' 
    },
    { 
      nome: 'Marinha do Brasil', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Naval_jack_of_Brazil.svg/1200px-Naval_jack_of_Brazil.svg.png', 
      descricao: 'Serviço de Engenharia para CCCPM' 
    },
    { 
      nome: 'BNDES', 
      logo: 'https://logodownload.org/wp-content/uploads/2014/05/bndes-logo-1.png', 
      descricao: 'Serviços de avaliação em geral' 
    }
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
              <div className="bg-white p-4 rounded-full mb-4 h-24 flex items-center justify-center">
                <img 
                  src={contratante.logo} 
                  alt={`Logo ${contratante.nome}`} 
                  className="h-16 w-auto object-contain" 
                />
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
