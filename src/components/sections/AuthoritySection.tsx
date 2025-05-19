import React from "react";
import { Award, Users, TrendingUp, GraduationCap } from "lucide-react";
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';

interface AuthoritySectionProps {
  consultantName?: string;
  consultantBio?: string;
  videoUrl?: string;
  achievements?: Array<{
    metric: string;
    label: string;
  }>;
}

const AuthoritySection: React.FC<AuthoritySectionProps> = ({
  consultantName = "Alexandre Calmon",
  consultantBio = "Uma Jornada de Inovação em Tecnologia e Inteligência Artificial.\n\nOlá! Sou Alexandre Calmon, e minha paixão por tecnologia me acompanha há mais de 20 anos. Mergulhei de cabeça na área de ciência de dados há 7 anos, mas foi com o lançamento do ChatGPT e a explosão da IA Generativa, há 2 anos, que encontrei meu verdadeiro chamado.\n\nPercebi, naquele momento, que o mundo dos negócios nunca mais seria o mesmo. A IA Generativa não era apenas uma tendência passageira, mas sim uma revolução com o poder de transformar empresas, carreiras e a própria sociedade.\n\nDecidi, então, me dedicar exclusivamente a ajudar empresas como a sua a navegar por essa nova era. Minha formação em Ciência de Dados, especialização em Inteligência Artificial e pós-graduações em Neurociência e Comportamento Humano se uniram para criar uma base sólida e única para essa missão.",
  videoUrl = "https://player.vimeo.com/video/1033826373",
  achievements = [
    { metric: "300+", label: "Empresas Capacitadas" },
    { metric: "1.000h+", label: "Horas de Consultoria em 2024" },
    { metric: "15+", label: "Anos de Experiência" },
    { metric: "6+", label: "Grandes Instituições Atendidas" },
  ],
}) => {
  return (
    <SectionWrapper>
      <section className="w-full bg-gradient-to-b from-orange-100 to-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="w-48 h-48 flex-shrink-0">
                  <img
                    src="/images/alexandrecalmon.png"
                    alt={consultantName}
                    className="w-full h-full object-cover rounded-full border-4 border-orange-600"
                  />
                </div>
                <h2 className="text-4xl font-bold text-center md:text-left text-gray-900">{consultantName}</h2>
              </div>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                {consultantBio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">
                  Mais do que um consultor, me considero um parceiro estratégico dos meus clientes. Ao longo dessa jornada, tive a oportunidade de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Capacitar e transformar:</strong> Realizei consultorias e treinamentos para mais de 200 empresas, que hoje utilizam a IA Generativa para otimizar processos, gerar ideias e impulsionar resultados. Só em 2024, foram mais de 400 horas de consultoria individual, ajudando pessoas reais a aplicar a IA em seu dia a dia.
                  </li>
                  <li>
                    <strong>Inspirar e Conectar:</strong> Ministrei palestras em grandes eventos, compartilhando cases de sucesso, tendências e insights para instituições como Governo de Minas, Sebrae, FIESP, FIEMG, AMBEV, Sicoob e várias outras.
                  </li>
                </ul>
                <div className="space-y-6">
                  <blockquote className="text-center italic text-orange-600 font-medium px-8 py-4 border-l-4 border-r-4 border-orange-600 mx-auto max-w-3xl bg-white rounded-lg shadow-sm">
                    "Minha missão é clara: levar soluções de IA Generativa personalizadas e de alto impacto para você e sua empresa. Seja capacitando sua equipe para dominar as ferramentas mais recentes, seja inspirando sua liderança com uma visão estratégica do futuro, estou aqui para ajudar você a ser protagonista na era da inovação."
                  </blockquote>
                  <p className="text-center text-xl text-gray-900 font-medium">
                    Vamos conversar? Adoraria entender seus desafios e mostrar como a Inteligência Artificial pode fazer a diferença no seu negócio.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="w-full aspect-video rounded-lg overflow-hidden bg-white shadow-lg">
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Revolução da Inteligência Artificial Generativa"
                />
              </div>

              <div className="w-full aspect-video rounded-lg overflow-hidden bg-white shadow-lg">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/ul2Sbnjfgvc?si=NNvg-6A3Y1ICNwZI" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  {index === 0 && (
                    <Users className="w-8 h-8 text-orange-600 mb-2" />
                  )}
                  {index === 1 && (
                    <Award className="w-8 h-8 text-orange-600 mb-2" />
                  )}
                  {index === 2 && (
                    <GraduationCap className="w-8 h-8 text-orange-600 mb-2" />
                  )}
                  {index === 3 && (
                    <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                  )}
                  <span className="text-3xl font-bold text-orange-600">
                    {achievement.metric}
                  </span>
                  <span className="text-sm text-gray-600">
                    {achievement.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SectionWrapper>
  );
};

export default AuthoritySection;