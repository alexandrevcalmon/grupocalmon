import React from 'react';
import Container from '@/components/ui/Container';

const AboutHero = () => {
  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-6">Sobre Nós</h1>
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-gray-600">
          <p>
            A Calmon Consultoria, Palestras e Treinamentos atua na capacitação de empresas e profissionais, oferecendo soluções inovadoras que unem tecnologia, inteligência artificial e desenvolvimento humano. Sob a liderança de Alexandre Calmon, cientista de dados, especialista em IA e neurocientista, nosso foco é preparar negócios e indivíduos para os desafios e oportunidades da era digital, promovendo conhecimento estratégico e aplicação prática.
          </p>
          <p>
            Contamos com um time de profissionais especialistas que atendem desde pequenas empresas até grandes corporações, abrangendo diversos setores, de confecções a complexos de saúde. Com uma abordagem dinâmica e personalizada, trabalhamos para impulsionar a inovação, otimizar processos e fortalecer habilidades essenciais para a tomada de decisões.
          </p>
          <p>
            Através de palestras, workshops e consultorias, auxiliamos nossos clientes a incorporar Inteligência Artificial Generativa, inteligência emocional e estratégias empresariais de forma eficaz e sustentável. Nosso compromisso é transformar conhecimento em resultados, capacitando profissionais e organizações para um futuro mais produtivo, competitivo e inovador.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutHero;