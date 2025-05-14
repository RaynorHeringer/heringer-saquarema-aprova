
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Roberto Silva",
      role: "Proprietário Residencial",
      content: "A Heringer Engenharia cuidou de todo o processo de aprovação do meu projeto em Saquarema. Profissionais extremamente competentes que conseguiram agilizar todo o processo.",
      rating: 5
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Empresária",
      content: "Contratei para regularização de um imóvel comercial e a equipe foi excepcional. Conhecimento técnico e atendimento de primeira qualidade. Recomendo sem hesitar.",
      rating: 5
    },
    {
      id: 3,
      name: "Carlos Eduardo",
      role: "Investidor Imobiliário",
      content: "Estou impressionado com a capacidade da equipe da Heringer em resolver problemas complexos de aprovação. Conhecem profundamente os procedimentos da prefeitura local.",
      rating: 5
    },
    {
      id: 4,
      name: "Juliana Mendes",
      role: "Arquiteta",
      content: "Como arquiteta, busquei parceria com a Heringer para cuidar das aprovações dos meus projetos. A eficiência deles permitiu que eu me concentrasse na parte criativa.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-heringer-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-heringer-blue">O Que Dizem Nossos Clientes</h2>
        <p className="section-description">
          A satisfação dos nossos clientes é o nosso maior patrimônio. Confira alguns depoimentos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
