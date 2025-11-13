
import React from 'react';

const PortfolioCard: React.FC<{ imgUrl: string; title: string; category: string }> = ({ imgUrl, title, category }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={imgUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
      <h3 className="text-xl md:text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
      <p className="text-[#F47C3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    { imgUrl: 'https://picsum.photos/seed/tech/600/400', title: 'AURA Tech', category: 'SaaS' },
    { imgUrl: 'https://picsum.photos/seed/finance/600/400', title: 'FinanBoost', category: 'Fintech' },
    { imgUrl: 'https://picsum.photos/seed/health/600/400', title: 'Vitalis Clinic', category: 'Saúde & Bem-estar' },
    { imgUrl: 'https://picsum.photos/seed/realestate/600/400', title: 'Nexus Imóveis', category: 'Imobiliário' },
    { imgUrl: 'https://picsum.photos/seed/food/600/400', title: 'Gourmet Express', category: 'E-commerce' },
    { imgUrl: 'https://picsum.photos/seed/consulting/600/400', title: 'Inova Consultoria', category: 'Serviços Corporativos' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#2C313A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Projetos que <span className="text-[#F47C3C]">Convertem</span></h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Uma amostra do nosso trabalho em transformar ideias em resultados.</p>
          <div className="w-24 h-1 bg-[#F47C3C] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;