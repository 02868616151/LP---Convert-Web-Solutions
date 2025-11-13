
import React from 'react';

const InstagramIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const LinkedInIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#282C34] border-t border-gray-700 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Convert Web Solutions. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Construindo o futuro da sua presença digital.</p>
        <div className="flex justify-center space-x-6 mt-6">
            <a href="https://www.instagram.com/convert.web/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#F47C3C] transition-colors duration-300">
                <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583725076180&locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#F47C3C] transition-colors duration-300">
                <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/company/convert-web-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#F47C3C] transition-colors duration-300">
                <LinkedInIcon />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;