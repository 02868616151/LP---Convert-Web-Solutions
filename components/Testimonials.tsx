
import React from 'react';

interface Testimonial {
  name: string;
  source: 'Google' | 'Instagram';
  review: string;
  avatar: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    const GoogleIcon = () => (
        <svg className="h-5 w-5 text-blue-500" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.5 24.3C47.5 22.7 47.4 21.2 47.1 19.7H24.2V28.3H37.3C36.7 31.3 35.1 33.8 32.7 35.5V41.3H40.2C44.8 36.8 47.5 31.1 47.5 24.3Z" fill="#4285F4"></path><path d="M24.2 48C30.6 48 35.9 45.8 40.2 42.3L32.7 36.5C30.5 37.9 27.6 38.8 24.2 38.8C18.1 38.8 13.1 34.9 11.1 29.5H3.5V35.3C7.9 43.1 15.4 48 24.2 48Z" fill="#34A853"></path><path d="M11.1 29.5C10.6 28.1 10.3 26.6 10.3 25C10.3 23.4 10.6 21.9 11.1 20.5V14.7H3.5C1.3 19 0 24.8 0 31C0 37.2 1.3 43 3.5 47.3L11.1 41.5C10.6 40.1 10.3 38.6 10.3 37C10.3 35.4 10.6 33.9 11.1 32.5L11.1 29.5Z" fill="#FBBC05"></path><path d="M24.2 9.2C28 9.2 30.9 10.5 33.3 12.7L40.4 5.6C36.1 1.7 30.6 0 24.2 0C15.4 0 7.9 4.9 3.5 12.7L11.1 18.5C13.1 13.1 18.1 9.2 24.2 9.2Z" fill="#EA4335"></path></svg>
    );
    const InstagramIcon = () => (
        <svg className="h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
    );

    return (
        <div className="bg-[#282C34] p-8 rounded-lg border border-gray-700 h-full flex flex-col">
            <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.review}"</p>
            <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <div className="flex items-center space-x-2 text-gray-400">
                        {testimonial.source === 'Google' ? <GoogleIcon /> : <InstagramIcon />}
                        <span>{testimonial.source}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Testimonials: React.FC = () => {
  const testimonialsData: Testimonial[] = [
    {
      name: 'Carla Silva',
      source: 'Google',
      review: 'A Convert Web Solutions transformou nossa captação de leads. A nova landing page é linda, rápida e, o mais importante, converte muito! Profissionalismo nota 1000.',
      avatar: 'https://picsum.photos/seed/person1/100/100',
    },
    {
      name: '@marcenaria_inova',
      source: 'Instagram',
      review: 'Que trabalho incrível! A landing page ficou sensacional, com um visual super moderno e profissional. Já estamos recebendo mais contatos. Recomendo demais!',
      avatar: 'https://picsum.photos/seed/person2/100/100',
    },
    {
      name: 'Pedro Almeida',
      source: 'Google',
      review: 'Desde o primeiro contato até a entrega, a equipe foi super atenciosa e entendeu perfeitamente o que precisávamos. O resultado superou todas as expectativas.',
      avatar: 'https://picsum.photos/seed/person3/100/100',
    },
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-[#282C34]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Aprovação Máxima: O que Nossos Clientes Dizem</h2>
          <div className="w-24 h-1 bg-[#F47C3C] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
