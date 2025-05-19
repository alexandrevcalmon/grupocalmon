import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { ArrowRight, CheckCircle2, Brain, Heart, LineChart, Users, Shield, Clock, FileCheck, Building2 } from 'lucide-react';
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

const EmotionalIntelligenceService = () => {
  return (
    <div className="pt-16">
      {/* [SESSÃO 1: HEADLINE E CHAMADA DE IMPACTO] */}
      <SectionWrapper>
        <div className="bg-gradient-to-b from-orange-50 to-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center py-16">
              <h1 className="text-4xl font-bold mb-6">
                Inteligência Emocional e Saúde Mental no Empreendedorismo
              </h1>
              <p className="text-2xl font-bold text-orange-600 mb-6">
                Empreenda com mais clareza, equilíbrio e resiliência
              </p>
              <p className="text-xl text-gray-600">
                Descubra como dominar suas emoções pode ser o passo-chave para criar negócios sustentáveis e realizar seu potencial máximo.
              </p>
            </div>
          </Container>
        </div>
      </SectionWrapper>

      {/* [SESSÃO 2: APRESENTAÇÃO E PROMESSA] */}
      <SectionWrapper delay={0.2}>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Uma Nova Abordagem para o Sucesso Empreendedor
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center">
                Em um cenário cada vez mais competitivo, não basta ter boas ideias e ótimas estratégias. A capacidade de gerenciar emoções e manter a saúde mental em dia tornou-se fator determinante para alcançar resultados de alto impacto.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Brain,
                    title: "Reduzir Estresse e Ansiedade",
                    description: "Técnicas para encarar desafios e incertezas com mais tranquilidade."
                  },
                  {
                    icon: LineChart,
                    title: "Aprimorar Decisões",
                    description: "Tomar decisões conscientes e assertivas, embasadas em clareza mental e autoconfiança."
                  },
                  {
                    icon: Users,
                    title: "Fortalecer Relacionamentos",
                    description: "Construir parcerias sólidas e duradouras com clientes, colaboradores e parceiros."
                  },
                  {
                    icon: Heart,
                    title: "Expandir Criatividade",
                    description: "Usar autoconhecimento para liberar o potencial criativo e inovador."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4"
                  >
                    <item.icon className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>

      {/* [SESSÃO 3: CONTEÚDO PRINCIPAL DA PALESTRA] */}
      <SectionWrapper delay={0.3}>
        <section className="py-20 bg-orange-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Conteúdo Principal da Palestra
              </h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Empreendedorismo e Inovação",
                    items: [
                      "Inteligência emocional como combustível para criatividade e geração de soluções inovadoras",
                      "Ferramentas para lidar com pressão por resultados e incertezas do mercado",
                      "Tomada de decisões consciente: equilibra riscos e oportunidades através da regulação emocional"
                    ]
                  },
                  {
                    title: "Autoconfiança e Protagonismo",
                    items: [
                      "Construção de autoestima e amor-próprio como base para sucesso",
                      "Como enfrentar a síndrome da impostora e eliminar comportamentos autossabotadores",
                      "Aprenda a assumir riscos calculados e defender suas ideias com segurança",
                      "Protagonismo no feminino: empoderamento e liderança de alto impacto"
                    ]
                  },
                  {
                    title: "Gestão Financeira e Planejamento",
                    items: [
                      "Conexão entre bem-estar emocional e saúde financeira",
                      "Estratégias para reduzir estresse financeiro e ansiedade relacionada ao dinheiro",
                      "Planejamento financeiro consciente: foco em metas reais e alinhadas ao seu estilo de vida"
                    ]
                  },
                  {
                    title: "Liderança e Conexões",
                    items: [
                      "Empatia e comunicação eficaz para relações duradouras e equipes de alta performance",
                      "Aplicações de inteligência emocional na liderança para motivar e engajar colaboradores",
                      "Networking estratégico: crie uma rede de apoio e oportunidades para o seu negócio",
                      "Desenvolvimento de liderança com foco em saúde mental"
                    ]
                  }
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white p-8 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                    <ul className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>

      {/* [SESSÃO 4: METODOLOGIA E EXPERIÊNCIA TRANSFORMADORA] */}
      <SectionWrapper delay={0.4}>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Uma Jornada de Autoconhecimento e Prática Aplicada
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: FileCheck,
                    title: "Histórias Reais e Estudos de Caso",
                    description: "Conheça exemplos de empreendedores que superaram barreiras emocionais e atingiram resultados extraordinários."
                  },
                  {
                    icon: Users,
                    title: "Dinâmicas de Autoconhecimento",
                    description: "Atividades interativas para você identificar forças, fraquezas e pontos de desenvolvimento."
                  },
                  {
                    icon: Brain,
                    title: "Neurociência Aplicada",
                    description: "Técnicas cientificamente comprovadas para melhorar foco, concentração e resiliência (mindfulness, regulação emocional)."
                  },
                  {
                    icon: Building2,
                    title: "Espaço de Perguntas e Respostas",
                    description: "Momento para tirar dúvidas, compartilhar desafios pessoais e receber orientações personalizadas."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4"
                  >
                    <item.icon className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>

      {/* [SESSÃO 5: SOBRE A PALESTRANTE] */}
      <SectionWrapper delay={0.5}>
        <section className="py-20 bg-orange-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Sobre a Palestrante
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-64 h-64 flex-shrink-0">
                  <img
                    src="/images/danimagnosemfundo.png"
                    alt="Daniela Magno"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Formação e Especialização</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span>Enfermeira, especialista e mestra em saúde mental pela UNIFESP</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span>Terapeuta especializada em traumas, dependência emocional e inteligência relacional</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span>Supervisora de estágios em saúde mental na EPE/UNIFESP e no Instituto de Psiquiatria do HC/USP</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Experiências de Vida e Profissionais</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span>11 anos de cuidados à sua mãe, experiência que impulsionou a busca por ferramentas de autoconhecimento</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span>Coordenadora do projeto "Mulheres Curadas, Curam"</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span>Palestrante do SEBRAE e de inúmeras empresas e instituições</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>

      {/* [SESSÃO 6: CHAMADA PARA AÇÃO] */}
      <SectionWrapper delay={0.6}>
        <section className="py-20 bg-gradient-to-b from-orange-600 to-orange-700 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Este é o Momento de Transformar Seu Negócio (e Sua Vida)
              </h2>
              <p className="text-xl mb-12">
                Você está pronto para dar um salto em direção ao sucesso sustentado pela inteligência emocional e pela saúde mental?
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  "Ferramentas Práticas para gerenciar estresse, ansiedade e pressões do dia a dia",
                  "Estratégias de Crescimento embasadas em autoconfiança e liderança empática",
                  "Suporte à Inovação: Melhore sua capacidade de criar soluções inovadoras",
                  "Ambiente de Networking: Conecte-se com outros empreendedores"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-300 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl mb-8">
                Dê o primeiro passo para um futuro mais resiliente, equilibrado e próspero!
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

export default EmotionalIntelligenceService;