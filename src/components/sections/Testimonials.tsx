import React from "react";

const testimonials = [
  {
    text: "Precisávamos de alguém que sensibilizasse nossos colaboradores sobre a importância da inteligência artificial na rotina de negócios...",
    author: "Leonardo Barbosa",
    role: "Consultor de RH - Invest Minas",
    image: "/images/leonardobarbosa.png"
  },
  {
    text: "A capacitação e consultoria individual conduzidas pelo Calmon elevaram significativamente a produtividade de nossa equipe aqui na LocX...",
    author: "Paulo Henrique",
    role: "CEO, LocX",
    image: "/images/paulolocx.jpg"
  },
  {
    text: "As palestras realizadas pelo cientista de dados Alexandre Calmon nas cidades de Itaúna, Carmópolis de Minas e Pará de Minas...",
    author: "Frederico",
    role: "Coordenador, Sebrae-MG",
    image: "/images/fredsebrae.png"
  },
  {
    text: "Esta capacitação do Calmon foi um marco para o meu trabalho como consultora de clínicas médicas...",
    author: "Karla Martins",
    role: "Consultora de Clínicas Médicas",
    image: "/images/karlamartins.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#3C1F10] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Quando o cliente diz que é bom...
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          {testimonials.map((item, index) => (
            <div key={index} className="space-y-4">
              <p className="text-sm italic mb-6 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm">{item.author}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;