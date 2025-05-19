import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const DanielaMagno: React.FC = () => {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img
                src="/images/danimagnosemfundo.png"
                alt="Daniela Magno"
                className="w-48 h-48 rounded-full mx-auto border-4 border-orange-600 mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">Daniela Magno</h1>
              <p className="text-xl text-gray-600">
                Mestre em Saúde Mental - Especialista em Inteligência Emocional
              </p>
            </div>

            <div className="prose max-w-none">
              <h2>Sobre</h2>
              <p>
                Daniela Magno é enfermeira, especialista e mestra em saúde mental pela UNIFESP.
                Com uma trajetória única que combina experiência acadêmica e prática clínica,
                ela se dedica a ajudar pessoas e organizações a desenvolverem inteligência
                emocional e resiliência.
              </p>

              <h2>Formação e Especialização</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Enfermeira, especialista e mestra em saúde mental pela UNIFESP</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Terapeuta especializada em traumas e dependência emocional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Supervisora de estágios em saúde mental na EPE/UNIFESP</span>
                </li>
              </ul>

              <h2>Projetos e Iniciativas</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Coordenadora do projeto "Mulheres Curadas, Curam"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Palestrante do SEBRAE e diversas instituições</span>
                </li>
              </ul>

              <div className="mt-12 text-center">
                <a
                  href="https://danielamagno.com.br/"
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

export default DanielaMagno;