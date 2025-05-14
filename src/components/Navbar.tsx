
import React, { useState, useEffect } from 'react';
import { Menu, X, Banknote, Gavel, Ship, Building } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  const contratantes = [
    { nome: 'Banco do Brasil', icon: Banknote },
    { nome: 'Tribunal de Justiça do RJ', icon: Gavel },
    { nome: 'Marinha do Brasil', icon: Ship },
    { nome: 'BNDES', icon: Building }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="font-montserrat font-bold text-2xl text-heringer-blue">
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

        <div className="hidden md:flex items-center space-x-4">
          {/* Contratantes Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className={`font-medium transition-colors hover:text-heringer-light-blue ${scrolled ? 'text-heringer-blue' : 'text-white'}`}
              >
                Contratantes
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white p-2">
              {contratantes.map((contratante, index) => (
                <DropdownMenuItem key={index} className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-100 rounded">
                  <contratante.icon className="mr-2 h-5 w-5 text-heringer-light-blue" />
                  <span>{contratante.nome}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            className="bg-heringer-light-blue hover:bg-heringer-blue text-white"
          >
            Orçamento
          </Button>
        </div>

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
              
              {/* Contratantes no Menu Mobile */}
              <div className="py-2 border-t border-gray-200">
                <p className="font-medium text-heringer-blue mb-2">Contratantes:</p>
                {contratantes.map((contratante, index) => (
                  <div key={index} className="flex items-center py-2">
                    <contratante.icon className="mr-2 h-5 w-5 text-heringer-light-blue" />
                    <span className="text-heringer-blue">{contratante.nome}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-heringer-light-blue hover:bg-heringer-blue text-white w-full"
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
