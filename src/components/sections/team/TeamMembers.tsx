import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TeamMembers = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="images/alexandrecalmon.png"
              alt="Alexandre Calmon"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Alexandre Calmon</h3>
            <p className="text-gray-600 mb-2">Fundador e CEO</p>
            <p className="text-gray-600 mb-2">Cientista de Dados, Especialista em IA Generativa </p>
            <p className="text-sm text-gray-500 mb-4">
             Palestrante - Consultor
            </p>
            <Link 
              to="/team/alexandre-calmon"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition"
            >
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="images/danimagnosemfundo.png"
              alt="Daniela Magno"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Daniela Magno</h3>
            <p className="text-gray-600 mb-2">Diretora de IE</p>
            <p className="text-gray-600 mb-2">Mestre em Saúde Mental - Inteligência Emocional</p>
            <p className="text-sm text-gray-500 mb-4">
             Palestrante - Terapeuta
            </p>
            <Link 
              to="/team/daniela-magno"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition"
            >
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="images/drcarlosrachid.png"
              alt="Dr. Carlo Rachid"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Dr. Carlo Rachid</h3>
            <p className="text-gray-600 mb-2">Especialista Parceiro de IA na Medicina</p>
            <p className="text-sm text-gray-500 mb-4">
             Automações com IA
            </p>
            <Link 
              to="/team/carlo-rachid"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition"
            >
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="images/drfernandomenezes.png"
              alt="Dr. Fernando Menezes"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Dr. Fernando Menezes</h3>
            <p className="text-gray-600 mb-2">Especialista Parceiro de IA na Medicina</p>
            <p className="text-sm text-gray-500 mb-4">
             Diagnósticos com IA 
            </p>
            <Link 
              to="/team/fernando-menezes"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition"
            >
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;