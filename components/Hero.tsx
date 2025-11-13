
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#282C34] via-transparent to-[#282C34] z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in-down">
                Transforme Cliques em <span className="text-[#F47C3C] text-glow">Clientes</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8 animate-fade-in-up">
                Criamos Landing Pages de alto impacto visual e estratégico, projetadas para uma única missão: gerar leads qualificados para o seu negócio.
            </p>
            <a href="#contato" onClick={(e) => handleScroll(e, '#contato')} className="btn-primary text-lg animate-bounce">
                Agendar Consulta Gratuita
            </a>
        </div>
    </section>
  );
};

export default Hero;