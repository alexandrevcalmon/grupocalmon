import React from 'react';
import { Globe, Building2, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Globe className="h-12 w-12 text-orange-500 mx-auto mb-6" />
            <h3 className="text-lg font-bold mb-3">Para eventos</h3>
            <p className="text-sm text-gray-600">
              Palestras impactantes com os melhores conteúdos e experiências, 
              <span className="font-medium"> entregando conhecimento validado</span> e 
              <span className="font-medium"> orientações para reinventar negócios</span>.
            </p>
          </div>
          <div className="text-center">
            <Building2 className="h-12 w-12 text-orange-500 mx-auto mb-6" />
            <h3 className="text-lg font-bold mb-3">Para Corporações</h3>
            <p className="text-sm text-gray-600">
              Empresas de todos os portes precisam 
              <span className="font-medium"> se reinventar na era digital</span>, 
              <span> adotando uma cultura de inovação e transformação tecnológica para fortalecer sua competitividade e impulsionar o crescimento</span> em seus 
              negócios.
            </p>
          </div>
          <div className="text-center">
            <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-6" />
            <h3 className="text-lg font-bold mb-3">Para Associações</h3>
            <p className="text-sm text-gray-600">
              Entidades que precisam reconhecer as transformações dos seus mercados e ajudar 
              <span className="font-medium"> associados a superar os desafios desta Mudança de Era</span>.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-orange-700 transition"
          >
            Conheça nossos serviços
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;