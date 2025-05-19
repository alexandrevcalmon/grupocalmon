import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const CarloRachid: React.FC = () => {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img
                src="/images/drcarlosrachid.png"
                alt="Dr. Carlo Rachid"
                className="w-48 h-48 rounded-full mx-auto border-4 border-orange-600 mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">Dr. Carlo Rachid</h1>
              <p className="text-xl text-gray-600">
                Médico Vascular e Especialista em Automação na Saúde
              </p>
            </div>

            <div className="prose max-w-none">
              <h2>Sobre</h2>
              <p>
                Dr. Carlo Rachid é um médico vascular com vasta experiência em gestão e automação
                de processos em saúde. Sua expertise única combina conhecimento médico com
                profunda compreensão de tecnologia e inovação.
              </p>

              <h2>Especialidades</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Experiência em gestão e automação de processos em saúde</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Implementação de APIs e ERPs em ambientes hospitalares</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Desenvolvimento de fluxos automatizados para administração hospitalar</span>
                </li>
              </ul>

              <div className="mt-12 text-center">
                <a
                  href="https://www.instagram.com/dr.carlo.rachid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition"
                >
                  Siga no Instagram
                </a>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default CarloRachid;