import React from 'react';

const Team = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Parceiros</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Alexandre Calmon"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Alexandre Calmon</h3>
            <p className="text-gray-600 mb-2">Fundador e CEO</p>
            <p className="text-sm text-gray-500">
              Cientista de Dados, Especialista em IA Generativa e Transformação Digital
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Daniela Magno"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Daniela Magno</h3>
            <p className="text-gray-600 mb-2">Mestre em Saúde Mental - Terapeuta - Palestrante sobre Inteligência Emocional</p>
            <p className="text-sm text-gray-500">
              Especialista em Inteligência Emocional
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Dr. Carlo Rachid"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Dr. Fernando Menezes</h3>
            <p className="text-gray-600 mb-2">Consultor Médico</p>
            <p className="text-sm text-gray-500">
              Especialista em IA na Medicina - Diagnósticos
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Dr. Fernando Menezes"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Dr. Carlos Rachid</h3>
            <p className="text-gray-600 mb-2">Consultor Médico</p>
            <p className="text-sm text-gray-500">
              Especialista em IA na Medicina - Automações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;