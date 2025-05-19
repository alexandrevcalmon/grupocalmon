import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const AlexandreCalmon: React.FC = () => {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img
                src="/images/alexandrecalmon.png"
                alt="Alexandre Calmon"
                className="w-48 h-48 rounded-full mx-auto border-4 border-orange-600 mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">Alexandre Calmon</h1>
              <p className="text-xl text-gray-600">
                Cientista de Dados e Especialista em IA Generativa
              </p>
            </div>

            <div className="prose max-w-none">
              <h2>Sobre</h2>
              <p>
                Uma Jornada de Inovação em Tecnologia e Inteligência Artificial
              </p>
              <p>
                A paixão de Alexandre Calmon pela tecnologia o acompanha há mais de 20 anos. Ele mergulhou na área de ciência de dados há 7 anos, mas foi com o lançamento do ChatGPT e a explosão da IA Generativa, há 2 anos, que encontrou seu verdadeiro chamado.
              </p>
              <p>
                Alexandre percebeu, naquele momento, que o mundo dos negócios nunca mais seria o mesmo. A IA Generativa não era apenas uma tendência passageira, mas sim uma revolução com o poder de transformar empresas, carreiras e a própria sociedade.
              </p>
              <p>
                Ele decidiu, então, dedicar-se exclusivamente a ajudar organizações a navegar por essa nova era. Sua formação em Ciência de Dados, especialização em Inteligência Artificial e pós-graduações em Neurociência e Comportamento Humano se uniram para criar uma base sólida e única para essa missão.
              </p>

              <h2>Conquistas e Especialidades</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Mais de 200 empresas capacitadas em IA Generativa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>400+ horas de consultoria individual em 2024</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Palestrante em grandes eventos: Sebrae, FIEMG, Governo de Minas, SICOOB</span>
                </li>
              </ul>

              <h2>Depoimentos</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="italic mb-4">
                    "Precisávamos de alguém que sensibilizasse nossos colaboradores sobre a importância
                    da inteligência artificial na rotina de negócios e como ela pode ser uma aliada na
                    nossa produtividade. A palestra do Alexandre superou as expectativas."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/leonardobarbosa.png"
                      alt="Leonardo Barbosa"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">Leonardo Barbosa</h4>
                      <p className="text-gray-600">Consultor de RH - Invest Minas</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="italic mb-4">
                    "As palestras realizadas pelo cientista de dados Alexandre Calmon foram um sucesso!
                    Recebemos feedbacks incríveis dos participantes, com uma média de 600 pessoas por
                    palestra."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/fredsebrae.png"
                      alt="Frederico"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">Frederico</h4>
                      <p className="text-gray-600">Coordenador, Sebrae-MG</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="https://alexandrecalmon.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition"
                >
                  Visite o site pessoal
                </a>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default AlexandreCalmon;