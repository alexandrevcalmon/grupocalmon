import React from 'react';
import { Target, Award, Heart } from 'lucide-react';

const AboutMission = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Target className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-3">Missão</h3>
            <p className="text-sm text-gray-600">
              Capacitar empresas e profissionais a crescerem e se adaptarem às transformações do mundo, promovendo inovação, conhecimento e desenvolvimento humano para decisões mais estratégicas e impactantes.
            </p>
          </div>
          <div className="text-center">
            <Award className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-3">Visão</h3>
            <p className="text-sm text-gray-600">
              Ser referência no Brasil em inovação e desenvolvimento humano, capacitando empresas e profissionais para enfrentar desafios e aproveitar oportunidades em um mundo em constante transformação.
            </p>
          </div>
          <div className="text-center">
            <Heart className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-3">Valores</h3>
            <p className="text-sm text-gray-600">
              Compromisso com a excelência, inovação e ética, promovendo desenvolvimento humano e impacto positivo. Buscamos gerar mudanças duradouras, impulsionando profissionais e empresas para um futuro mais preparado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;