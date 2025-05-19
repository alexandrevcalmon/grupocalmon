import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { ArrowRight, CheckCircle2, Brain, Lightbulb, LineChart, Users, Shield, Clock, FileCheck, Building2 } from 'lucide-react';
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

const AIBusinessService = () => {
  return (
    <div className="pt-16">
      {/* [SESSÃO 1: HEADLINE E CHAMADA DE IMPACTO] */}
      <SectionWrapper>
        <div className="bg-gradient-to-b from-orange-50 to-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center py-16">
              <h1 className="text-4xl font-bold mb-6">
                Capacitação em IA Generativa para Negócios
              </h1>
              <p className="text-2xl font-bold text-orange-600 mb-6">
                Descubra como liberar o potencial criativo, agilizar processos e alavancar resultados
              </p>
              <p className="text-xl text-gray-600">
                Aprenda na prática e aplique imediatamente no seu negócio!
              </p>
            </div>
          </Container>
        </div>
      </SectionWrapper>

      {/* [SESSÃO 2: APRESENTAÇÃO E PROPÓSITO] */}
      <SectionWrapper delay={0.2}>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Por que a IA Generativa é a Chave para o Futuro?
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center">
                Em um ambiente de negócios cada vez mais competitivo, a IA Generativa se consolida como um diferencial estratégico para profissionais e empresas.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Clock,
                    title: "Automatização Inteligente",
                    description: "Automatize tarefas repetitivas e ganhe tempo para o que realmente importa."
                  },
                  {
                    icon: FileCheck,
                    title: "Conteúdo de Qualidade",
                    description: "Produza conteúdo de alta qualidade com rapidez e precisão."
                  },
                  {
                    icon: Brain,
                    title: "Insights Estratégicos",
                    description: "Extraia insights estratégicos de grandes volumes de dados."
                  },
                  {
                    icon: Users,
                    title: "Experiência Personalizada",
                    description: "Personalize a experiência do cliente e aumente o engajamento."
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

      {/* [SESSÃO 3: O QUE VOCÊ VAI APRENDER] */}
      <SectionWrapper delay={0.3}>
        <section className="py-20 bg-orange-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                O que você vai aprender
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Fundamentos da IA Generativa",
                    items: [
                      "Conceitos básicos: entenda o que é IA Generativa e por que ela está revolucionando o mercado",
                      "Explorando aplicações reais: veja exemplos de como empresas estão inovando com essa tecnologia"
                    ]
                  },
                  {
                    title: "Domínio das Ferramentas",
                    items: [
                      "Detalhes de ChatGPT, Claude, Gemini e outras plataformas",
                      "Principais recursos e funcionalidades para cada tipo de tarefa",
                      "Critérios para escolher a melhor ferramenta em cenários distintos"
                    ]
                  },
                  {
                    title: "A Arte dos Prompts Eficazes",
                    items: [
                      "Como formular comandos (prompts) claros, objetivos e contextualizados",
                      "Técnicas para obter respostas mais criativas, coerentes e alinhadas às suas metas",
                      "Boas práticas para interagir com as ferramentas e maximizar a qualidade dos resultados"
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

      {/* [SESSÃO 4: APLICAÇÕES PRÁTICAS] */}
      <SectionWrapper delay={0.4}>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Aplicações Práticas no Seu Setor
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: FileCheck,
                    title: "Automatização de Tarefas",
                    description: "Transforme redigir e-mails, criar relatórios e responder perguntas frequentes em um processo rápido e sem falhas."
                  },
                  {
                    icon: Lightbulb,
                    title: "Geração de Conteúdo Criativo",
                    description: "Crie posts para redes sociais, roteiros de vídeo, textos de blog, slogans e muito mais."
                  },
                  {
                    icon: LineChart,
                    title: "Análise de Dados",
                    description: "Encontre padrões e tendências em grandes volumes de informações, facilitando decisões mais embasadas."
                  },
                  {
                    icon: Users,
                    title: "Experiência do Cliente",
                    description: "Entregue soluções sob medida, elevando o engajamento e a satisfação."
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

      {/* [SESSÃO 5: FORMATO EXCLUSIVO] */}
      <SectionWrapper delay={0.5}>
        <section className="py-20 bg-orange-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Formato Exclusivo — Workshop + Consultoria Individual
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-6">Workshop Prático (3 horas)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Imersão intensa com atividades, demonstrações ao vivo e exercícios colaborativos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Hands-on: aprenda a usar as ferramentas de IA no contexto real do seu dia a dia</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-6">Consultoria Individual (1 hora por participante)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Sessão personalizada com um especialista em IA Generativa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Crie prompts e fluxos de trabalho otimizados, com orientações sob medida</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Desenvolva um plano de ação concreto para implementação imediata</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>

      {/* [SESSÃO 6: BENEFÍCIOS] */}
      <SectionWrapper delay={0.6}>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Benefícios e Retorno para o Seu Negócio
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Clock,
                    title: "Aumento de Produtividade",
                    description: "Automatize tarefas rotineiras e libere tempo para estratégias de alto nível"
                  },
                  {
                    icon: Shield,
                    title: "Melhoria de Qualidade",
                    description: "Entregue conteúdo mais preciso e consistente, elevando o padrão da sua equipe"
                  },
                  {
                    icon: Lightbulb,
                    title: "Inovação e Criatividade",
                    description: "Estimule novas ideias e soluções criativas com auxílio de recursos gerados pela IA"
                  },
                  {
                    icon: LineChart,
                    title: "Vantagem Competitiva",
                    description: "Domine uma tecnologia que está transformando o mercado e destaque-se entre os concorrentes"
                  },
                  {
                    icon: Building2,
                    title: "ROI Rápido",
                    description: "Transforme seu investimento em resultados perceptíveis, economizando recursos"
                  },
                  {
                    icon: Users,
                    title: "Desenvolvimento Profissional",
                    description: "Garanta que sua equipe esteja preparada para o futuro do trabalho"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center"
                  >
                    <item.icon className="h-8 w-8 text-orange-600 mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>

      {/* [SESSÃO 7: PARA QUEM É] */}
      <SectionWrapper delay={0.7}>
        <section className="py-20 bg-orange-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Para quem é esta capacitação
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Profissionais de Todas as Áreas",
                    description: "Aqueles que desejam elevar sua eficiência no dia a dia"
                  },
                  {
                    icon: Lightbulb,
                    title: "Equipes de Marketing e Vendas",
                    description: "Profissionais que querem potencializar processos e se destacar pela agilidade"
                  },
                  {
                    icon: Building2,
                    title: "Gestores e Líderes",
                    description: "Interessados em preparar suas equipes para o cenário de transformação digital"
                  },
                  {
                    icon: Brain,
                    title: "Empreendedores e Autônomos",
                    description: "Buscando soluções inovadoras para impulsionar negócios de forma prática"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg flex items-start space-x-4"
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

      {/* [SESSÃO 7.5: SOBRE O ESPECIALISTA] */}
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

      {/* [SESSÃO 8: CHAMADA PARA AÇÃO] */}
      <SectionWrapper delay={0.8}>
        <section className="py-20 bg-gradient-to-b from-orange-600 to-orange-700 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Prepare-se para Usar a IA Generativa a Seu Favor!
              </h2>
              <p className="text-xl mb-8">
                O futuro do trabalho já chegou e, com ele, a oportunidade de elevar resultados e competitividade no mercado.
              </p>
              <div className="flex flex-col items-center space-y-4">
                <p className="font-semibold">Não perca tempo: as inscrições são limitadas.</p>
                <a
                  href="https://minhaagendavirtual.com.br/agenda/calmon/ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
                >
                  Agende esta Capacitação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default AIBusinessService;