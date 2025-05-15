
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Leomar Santos",
      role: "Proprietário Residencial",
      content: "Muito profissional o engenheiro Marcos. Fiz meu projeto a Mais de 4 anos e hoje é após esses anos ao iniciar a obra ele da até hoje um total suporte incrível e rápido.",
      rating: 5
    },
    {
      id: 2,
      name: "Thiago Alessandro",
      role: "Empresário",
      content: "Top, recomendo! Super atencioso e ótimo ao desenvolver de projetos.",
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
      name: "Beatriz Furtado",
      role: "Proprietária",
      content: "Engenheiro civil com projetos renderizados em alta qualidade. Com atendimento e preço muito bom.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-heringer-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-heringer-blue">O Que Dizem Nossos Clientes</h2>
        <p className="section-description">
          A satisfação dos nossos clientes é o nosso maior patrimônio. Confira alguns depoimentos no Google empresas.
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
