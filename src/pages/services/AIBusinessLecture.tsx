import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AuthoritySection from '@/components/sections/AuthoritySection';
import BestMomentsSection from '@/components/sections/BestMomentsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { ArrowRight, CheckCircle2, Brain, Stethoscope, LineChart, Users, Shield, Clock, FileCheck, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AIBusinessLecture = () => {
  return (
    <div className="pt-16">
      {/* 1. Hero Section */}
      <SectionWrapper>
        <div className="bg-gradient-to-b from-orange-50 to-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center py-16">
              <h1 className="text-4xl font-bold mb-6">
                Palestra: A Revolução da IA Generativa nos Negócios
              </h1>
              <h2 className="text-2xl font-bold text-orange-600 mb-6">
                Como Impulsionar Inovação e Competitividade no Cenário Global
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Uma palestra transformadora que revelará como a Inteligência Artificial Generativa está remodelando o mundo corporativo e fornecerá estratégias fundamentais para liderar a transformação digital em sua empresa.
              </p>
              <p className="text-gray-600 mb-12">
                Nesta palestra dinâmica e repleta de casos práticos, você descobrirá como grandes empresas estão utilizando IA Generativa para revolucionar seus negócios. Com duração de 1h30, esta apresentação combina conceitos avançados com exemplos reais e aplicáveis, permitindo que você implemente as estratégias aprendidas imediatamente em sua organização.
              </p>
              <div className="mt-8">
                <img
                  src="/images/palestrafiesp.jpg"
                  alt="Palestra FIESP sobre IA Generativa"
                  className="rounded-lg shadow-xl w-full h-[200px] object-cover"
                />
              </div>
            </div>
          </Container>
        </div>
      </SectionWrapper>

      {/* 2. Benefits Section */}
      <SectionWrapper delay={0.2}>
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Benefícios para sua Empresa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
                  <Brain className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Compreensão Estratégica</h3>
                    <p className="text-gray-600">
                      Entenda profundamente como a IA Generativa pode transformar processos e criar novas oportunidades de negócio.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
                  <LineChart className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Vantagem Competitiva</h3>
                    <p className="text-gray-600">
                      Descubra como se posicionar à frente da concorrência utilizando as mais recentes inovações em IA.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
                  <Users className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Capacitação da Equipe</h3>
                    <p className="text-gray-600">
                      Prepare sua equipe para abraçar e implementar soluções de IA de forma eficiente e produtiva.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Gestão de Riscos</h3>
                    <p className="text-gray-600">
                      Aprenda a identificar e mitigar riscos associados à implementação de IA em sua organização.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </section>
      </SectionWrapper>

      {/* 3. Topics Section */}
      <SectionWrapper delay={0.3}>
        <section className="py-20 bg-orange-50/70">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Principais Tópicos Abordados
              </h2>
              <div className="space-y-6">
                {[
                  "Panorama atual da IA Generativa e seu impacto nos negócios",
                  "Casos de uso práticos em diferentes setores",
                  "Estratégias de implementação e gestão de mudança",
                  "Aspectos éticos e regulatórios da IA",
                  "Tendências futuras e preparação estratégica",
                  "Frameworks para avaliação e implementação de soluções de IA"
                ].map((topic, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      </SectionWrapper>

      {/* 4. Features Section */}
      <SectionWrapper delay={0.4}>
        <section className="py-20 bg-gray-50/70">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Características da Palestra
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Clock,
                    title: "Duração Otimizada",
                    description: "1 hora e 30 minutos de conteúdo dinâmico e envolvente"
                  },
                  {
                    icon: FileCheck,
                    title: "Material Complementar",
                    description: "Acesso a recursos e materiais exclusivos pós-palestra"
                  },
                  {
                    icon: Building2,
                    title: "Customização",
                    description: "Conteúdo adaptado ao seu setor e necessidades específicas"
                  },
                  {
                    icon: Stethoscope,
                    title: "Diagnóstico",
                    description: "Avaliação do nível de maturidade digital da sua empresa"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4"
                  >
                    <feature.icon className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      </SectionWrapper>

      {/* Specialist Section */}
      <SectionWrapper delay={0.75}>
        <section className="py-20 bg-orange-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Conheça o Especialista
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-64 h-64 flex-shrink-0">
                  <img
                    src="/images/alexandrecalmon.png"
                    alt="Alexandre Calmon"
                    className="w-full h-full object-cover rounded-full border-4 border-orange-600"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Alexandre Calmon</h3>
                    <p className="text-gray-600 mb-6">
                      Cientista de Dados, Especialista em IA Generativa e Neurocientista com mais de 15 anos de experiência em tecnologia e inovação.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Credenciais e Conquistas</h4>
                    <ul className="space-y-3 text-gray-600">
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
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span>Especialização em Neurociência e Comportamento Humano</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://alexandrecalmon.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 transition"
                    >
                      Conheça mais sobre o trabalho do Alexandre
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>

      {/* Best Moments Section */}
      <SectionWrapper delay={0.5}>
        <BestMomentsSection />
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper delay={0.7}>
        <TestimonialsSection />
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper delay={0.8}>
        <section className="py-20 bg-gradient-to-b from-orange-600 to-orange-700 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Prepare sua empresa para liderar a próxima onda de Inovação
              </h2>
              <p className="text-xl mb-8">
                Não deixe sua empresa ficar para trás na corrida da transformação digital.
                Agende agora mesmo esta palestra e descubra como a IA Generativa pode revolucionar seu negócio.
              </p>
              <a
                href="https://minhaagendavirtual.com.br/agenda/calmon/ia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
              >
                Agende esta Palestra
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default AIBusinessLecture;