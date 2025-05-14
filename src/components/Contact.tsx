
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Smartphone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-heringer-blue">Contato</h2>
        <p className="section-description">
          Entre em contato conosco para esclarecer dúvidas ou solicitar um orçamento para seu projeto.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-heringer-gray p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-heringer-blue">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium">Nome</label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-medium">Telefone</label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium">Assunto</label>
                  <Input id="subject" placeholder="Assunto da mensagem" required />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block font-medium">Mensagem</label>
                <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} required />
              </div>

              <Button type="submit" className="bg-heringer-blue hover:bg-heringer-light-blue text-white w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-heringer-blue">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-heringer-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-bold">Endereço:</p>
                    <p className="text-gray-700">Jaconé, Saquarema - RJ, 28990-660</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-heringer-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-bold">Telefone:</p>
                    <p className="text-gray-700">(21) 98093-8544</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Smartphone className="h-6 w-6 text-heringer-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-bold">WhatsApp:</p>
                    <p className="text-gray-700">(21) 98093-8544</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-heringer-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-bold">Email:</p>
                    <p className="text-gray-700">eng@heringerengenharia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-heringer-light-blue mr-3 mt-1" />
                  <div>
                    <p className="font-bold">Horário de Atendimento:</p>
                    <p className="text-gray-700">Segunda à Sexta: 8h às 18h</p>
                    <p className="text-gray-700">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="text-xl font-bold mb-3 text-green-700">Precisa de uma resposta rápida?</h4>
              <p className="mb-4 text-green-800">Entre em contato pelo WhatsApp para um atendimento imediato.</p>
              <a 
                href="https://wa.me/5521980938544" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/>
                </svg>
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
