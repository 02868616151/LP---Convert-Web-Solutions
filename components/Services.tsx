
import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#2C313A] p-8 rounded-lg border border-gray-700 hover:border-[#F47C3C] hover:shadow-2xl hover:shadow-[#F47C3C]/20 transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-[#F47C3C] mb-4">{icon}</div>
    <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>,
      title: 'Alta Conversão',
      description: 'Estrutura e design focados em transformar visitantes em leads, maximizando seu ROI.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: 'Design Responsivo',
      description: 'Experiência de usuário impecável em todos os dispositivos, do desktop ao mobile.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: 'Performance Otimizada',
      description: 'Landing pages ultrarrápidas que melhoram o ranking no Google e a experiência do usuário.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-[#282C34]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">O Futuro da Prospecção Digital</h2>
           <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Tudo que você precisa para capturar a atenção do seu público-alvo.</p>
          <div className="w-24 h-1 bg-[#F47C3C] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;