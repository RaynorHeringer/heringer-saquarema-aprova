
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            O seu projetos para sua Obra.
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Especialistas em desenvolvimento de projetos para aprovação e econstrução na Região dos Lagos,
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="outline" className="bg-white text-heringer-blue hover:bg-gray-100">
              Nossos Serviços
            </Button>
            <Button size="lg" variant="outline" className="text-blue border-white hover:bg-white/10">
              Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
