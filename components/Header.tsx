import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#avaliacoes', label: 'Avaliações' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <header className="bg-[#282C34]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="text-2xl font-bold text-glow">
          Convert Web<span className="text-[#F47C3C]">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-white hover:text-[#F47C3C] transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="#contato" onClick={(e) => handleScroll(e, '#contato')} className="btn-primary text-sm py-2 px-6">
            Fale Conosco
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#282C34] absolute w-full">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-white hover:text-[#F47C3C] transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#contato" onClick={(e) => handleScroll(e, '#contato')} className="btn-primary text-sm py-2 px-6">
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
