import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const FernandoMenezes: React.FC = () => {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img
                src="/images/drfernandomenezes.png"
                alt="Dr. Fernando Menezes"
                className="w-48 h-48 rounded-full mx-auto border-4 border-orange-600 mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">Dr. Fernando Menezes</h1>
              <p className="text-xl text-gray-600">
                Médico Cardiologista / Medicina Interna
              </p>
            </div>

            <div className="prose max-w-none">
              <h2>Sobre</h2>
              <p>
                Dr. Fernando Menezes é um médico cardiologista e especialista em medicina interna
                que tem se destacado pela integração inovadora de IA em suas práticas clínicas.
                Sua abordagem única combina expertise médica com tecnologia de ponta.
              </p>

              <h2>Especialidades</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Utilização de IA em rotinas de triagem e anamnese</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Desenvolvimento de protocolos médicos otimizados por IA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Implementação de soluções de IA em ambiente clínico</span>
                </li>
              </ul>

              <div className="mt-12 text-center">
                <a
                  href="https://www.mipmedicina.com/dr-fernando-reis-menezes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition"
                >
                  Conheça mais sobre o trabalho
                </a>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default FernandoMenezes;