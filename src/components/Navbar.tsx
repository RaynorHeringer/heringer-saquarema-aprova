
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/5521980938544', '_blank');
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="font-montserrat font-bold text-2xl text-heringer-blue flex items-center">
          <img 
            src="/lovable-uploads/53477f4b-d4a8-4193-a737-c8c30efa16f0.png" 
            alt="Heringer Engenharia Logo" 
            className="h-10 mr-2" 
          />
          HERINGER <span className="font-normal">ENGENHARIA</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`font-medium transition-colors hover:text-heringer-light-blue ${scrolled ? 'text-heringer-blue' : 'text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button 
          className="hidden md:flex bg-heringer-light-blue hover:bg-heringer-blue text-white"
          onClick={openWhatsApp}
        >
          Orçamento
        </Button>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-heringer-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="font-medium text-heringer-blue hover:text-heringer-light-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <Button 
                className="bg-heringer-light-blue hover:bg-heringer-blue text-white w-full"
                onClick={openWhatsApp}
              >
                Orçamento
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
