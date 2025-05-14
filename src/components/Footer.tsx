
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-heringer-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HERINGER ENGENHARIA</h3>
            <p className="mb-4 text-gray-300">
              Especialistas em desenvolvimento de projetos e processos de aprovação junto às prefeituras da Região dos Lagos, Saquarema.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Home', 'Sobre Nós', 'Serviços', 'Projetos', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-gray-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              {[
                'Projetos Arquitetônicos', 
                'Regularização de Imóveis', 
                'Aprovação de Projetos',
                'Projetos Estruturais',
                'Consultoria Técnica'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-gray-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <address className="not-italic">
              <p className="mb-2">Av. Saquarema, 5100</p>
              <p className="mb-2">Porto da Roça, Saquarema - RJ</p>
              <p className="mb-2">CEP: 28990-000</p>
              <p className="mb-2">Tel: (22) 2656-2667</p>
              <p>WhatsApp: (22) 99963-2073</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/20 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} HERINGER ENGENHARIA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
