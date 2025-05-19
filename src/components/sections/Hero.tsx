import React from 'react';
import { Building2, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/Foto03.jpg")',
        height: 'calc(100vh + 200px)'
      }}
    > 
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Há 10 anos auxiliando empresas e profissionais a impulsionar o futuro com<br />
          <span className="text-orange-500">Conhecimento, Estratégia e Inovação</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          Descubra como a inovação e o conhecimento podem transformar negócios, impulsionar carreiras e desenvolver líderes extraordinários.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://minhaagendavirtual.com.br/agenda/calmon/ia" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F6B221] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#e5a420] transition flex items-center justify-center"
          >
            <Building2 className="mr-2 h-5 w-5" />
            Quero capacitar minha empresa
          </a>
          <a 
            href="https://minhaagendavirtual.com.br/agenda/calmon/ia" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#F6B221] px-6 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition flex items-center justify-center"
          >
            <Lightbulb className="mr-2 h-5 w-5" />
            Quero uma palestra inovadora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;