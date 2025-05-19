import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Pronto para transformar sua empresa?
        </h2>
        <a 
          href="https://minhaagendavirtual.com.br/agenda/calmon/ia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-block"
        >
          Agende uma conversa conosco
        </a>
      </div>
    </section>
  );
};

export default CTA;