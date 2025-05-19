import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';

const Topics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Principais Temas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-6" />
            <h3 className="text-lg font-bold mb-3">IA Generativa nos Negócios</h3>
            <p className="text-sm text-gray-600">
              Descubra como utilizar IA Generativa para impulsionar produtividade, inovação e tomada de decisões estratégicas em diversos setores.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            <Users className="h-12 w-12 text-orange-600 mx-auto mb-6" />
            <h3 className="text-lg font-bold mb-3">Liderança com Inteligência Emocional na Era do IA</h3>
            <p className="text-sm text-gray-600">
              Aprimore suas habilidades emocionais para liderar com equilíbrio, empatia e estratégia em um mundo impulsionado pela Inteligência Artificial.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            <Briefcase className="h-12 w-12 text-orange-600 mx-auto mb-6" />
            <h3 className="text-lg font-bold mb-3">Transformação Digital e Inovação</h3>
            <p className="text-sm text-gray-600">
              Capacite sua corporação para adaptar-se, crescer e se destacar na era da revolução tecnológica e da Inteligência Artificial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics