
import React from 'react';
import QuoteForm from './QuoteForm';

const Contact: React.FC = () => {
    const InstagramIcon = () => (<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
    const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);
    const FacebookIcon = () => (<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);


  return (
    <section id="contato" className="py-20 bg-[#2C313A] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Pronto para <span className="text-[#F47C3C]">Converter?</span></h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
              Preencha o formulário abaixo ou entre em contato. Vamos conversar sobre seu projeto e descobrir como podemos impulsionar seu negócio.
            </p>
             <div className="w-24 h-1 bg-[#F47C3C] mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:text-left text-center">
                <h3 className="text-2xl font-bold mb-4">Inicie sua Jornada Digital</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    Nossa consulta é o primeiro passo para criar uma landing page que não só impressiona, mas também entrega resultados tangíveis. Ao preencher o formulário, você nos fornece as informações essenciais para prepararmos uma análise estratégica e personalizada para o seu negócio.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start items-start space-x-6">
                    <div className="flex flex-col items-center space-y-2 text-center w-24">
                        <PhoneIcon />
                        <span className="text-gray-300 text-sm">(47)98422-4063</span>
                    </div>
                    <a href="https://www.instagram.com/convert.web/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-white hover:text-[#F47C3C] transition-colors group text-center w-24">
                        <InstagramIcon />
                        <span className="text-gray-300 group-hover:text-[#F47C3C] text-sm">@convert.web</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61583725076180&locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex flex-col items-center space-y-2 text-white hover:text-[#F47C3C] transition-colors group text-center w-24">
                        <FacebookIcon />
                        <span className="text-gray-300 group-hover:text-[#F47C3C] text-sm">Convert Web</span>
                    </a>
                </div>
            </div>
            <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;