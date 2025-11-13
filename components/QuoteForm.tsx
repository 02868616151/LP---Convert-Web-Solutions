
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const subject = `Solicitação de Orçamento de ${data.name}`;
        const body = `
Olá,

Gostaria de solicitar um orçamento com os seguintes detalhes:

- Nome Completo: ${data.name}
- E-mail: ${data.email}
- Telefone / WhatsApp: ${data.phone}
- Empresa: ${data.company || 'Não informado'}
- Tipo de Serviço: ${data.service}
- Principais Objetivos: ${data.objective}
- Orçamento Estimado: ${data.budget || 'Não informado'}
- Prazo Desejado: ${data.deadline || 'Não informado'}

Atenciosamente,
${data.name}
        `.trim().replace(/^\s+/gm, '');

        const mailtoLink = `mailto:convertwebsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-[#282C34] p-8 rounded-lg border border-[#F47C3C] text-center shadow-2xl shadow-[#F47C3C]/20 h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-white mb-3">Obrigado!</h3>
                <p className="text-gray-300">Seu pedido de orçamento foi enviado com sucesso. Entraremos em contato em breve!</p>
            </div>
        );
    }

    const inputStyle = "w-full bg-[#282C34] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F47C3C] transition-all duration-300";
    const labelStyle = "block text-sm font-medium text-gray-300 mb-2";

    return (
        <div className="bg-[#282C34] p-8 rounded-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className={labelStyle}>Nome Completo</label>
                        <input type="text" id="name" name="name" required className={inputStyle} placeholder="Seu nome" />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelStyle}>E-mail</label>
                        <input type="email" id="email" name="email" required className={inputStyle} placeholder="seu@email.com" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="phone" className={labelStyle}>Telefone / WhatsApp</label>
                        <input type="tel" id="phone" name="phone" required className={inputStyle} placeholder="(47) 98422-4063" />
                    </div>
                    <div>
                        <label htmlFor="company" className={labelStyle}>Empresa (Opcional)</label>
                        <input type="text" id="company" name="company" className={inputStyle} placeholder="Nome da sua empresa" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="service" className={labelStyle}>Tipo de Serviço</label>
                    <select id="service" name="service" required className={inputStyle}>
                        <option value="">Selecione um serviço</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Website Institucional">Website Institucional</option>
                        <option value="Outro">Outro (especifique nos objetivos)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="objective" className={labelStyle}>Principais Objetivos</label>
                    <textarea id="objective" name="objective" rows={4} required className={inputStyle} placeholder="Ex: Gerar mais leads, aumentar a visibilidade da marca..."></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="budget" className={labelStyle}>Orçamento Estimado (Opcional)</label>
                        <input type="text" id="budget" name="budget" className={inputStyle} placeholder="Ex: R$ 3.000 - R$ 5.000" />
                    </div>
                    <div>
                        <label htmlFor="deadline" className={labelStyle}>Prazo Desejado (Opcional)</label>
                        <input type="text" id="deadline" name="deadline" className={inputStyle} placeholder="Ex: 30 dias" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full btn-primary text-lg">
                        Solicitar Orçamento
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;
