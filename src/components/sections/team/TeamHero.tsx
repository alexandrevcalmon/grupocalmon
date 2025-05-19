import React from 'react';
import Container from '@/components/ui/Container';

const TeamHero = () => {
  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-8">Nossa Equipe</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Conheça os especialistas que fazem parte da Calmon Consultoria, Palestras e Treinamentos, unindo expertise em Inteligência Artificial, Inteligência Emocional e Inovação para transformar negócios, otimizar processos e impulsionar o desenvolvimento humano e corporativo.
        </p>
      </Container>
    </div>
  );
};

export default TeamHero;