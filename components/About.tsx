
import React from 'react';

const About: React.FC = () => {
    const RocketIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-[#F47C3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );

  return (
    <section id="sobre" className="py-20 bg-[#2C313A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nossa Missão é o Seu <span className="text-[#F47C3C]">Sucesso</span></h2>
          <div className="w-24 h-1 bg-[#F47C3C] mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-base md:text-lg leading-relaxed">
            <div className="mb-6 flex justify-center">
                <RocketIcon />
            </div>
            <p>
                Nascemos em 2025 com uma missão clara: revolucionar a presença digital de pequenas e médias empresas através de landing pages poderosas e estrategicamente construídas. Acreditamos que todo grande negócio merece uma base digital sólida para crescer, converter e dominar seu mercado. E é exatamente isso que vamos construir juntos!
            </p>
            <p className="mt-4 font-semibold text-white">
                ✨ Mais do que sites, criamos oportunidades. Mais do que código, escrevemos histórias de crescimento.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;