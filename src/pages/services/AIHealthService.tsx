import React from 'react';
import Container from '@/components/ui/Container';
import { ArrowRight, CheckCircle2, Brain, Stethoscope, LineChart, Users, Shield, Clock, FileCheck, Building2 } from 'lucide-react';

const AIHealthService: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section [SEÇÃO 1] */}
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-4xl font-bold mb-6">
              IA Generativa Para Equipes de Saúde: A Revolução que Vai Transformar Diagnósticos, Triagem e Gestão na Sua Instituição
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Aplique a Inteligência Artificial Generativa de forma prática, rápida e segura, mesmo se você não for especialista em tecnologia!
            </p>
            <p className="text-gray-600 mb-12">
              Imagine reduzir custos, otimizar o atendimento e agilizar processos na sua clínica ou hospital — tudo isso enquanto cumpre rigorosamente as exigências de sigilo, LGPD e ética profissional. É exatamente isso que você vai descobrir no nosso Workshop de Inteligência Artificial Generativa, criado especificamente para profissionais de saúde e gestores que querem dar um salto quântico na forma de atender pacientes, gerenciar equipes e aumentar a produtividade.
            </p>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Healthcare AI Technology"
                className="rounded-lg shadow-xl w-full h-48 object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Problem and Solution Section [SEÇÃO 2] */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Por que o Setor de Saúde Precisa da IA Generativa Agora?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Problems */}
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Clock className="h-6 w-6 text-orange-600 mr-3" />
                    Demanda crescente e processos lentos
                  </h3>
                  <p className="text-gray-600">
                    As instituições de saúde enfrentam cada vez mais sobrecarga de trabalho, filas de espera e processos burocráticos.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-orange-600 mr-3" />
                    Exigências de segurança de dados e compliance
                  </h3>
                  <p className="text-gray-600">
                    A Lei Geral de Proteção de Dados (LGPD) e o sigilo médico exigem soluções mais robustas e criteriosas. Vamos abordar como podemos usar IA sem comprometer dados sensíveis.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Brain className="h-6 w-6 text-orange-600 mr-3" />
                    Baixa familiaridade com tecnologia de ponta
                  </h3>
                  <p className="text-gray-600">
                    Muitos profissionais não têm tempo ou suporte para se aprofundar em IA, e acabam perdendo oportunidades de inovação.
                  </p>
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Stethoscope className="h-6 w-6 text-orange-600 mr-3" />
                    Diagnósticos e triagens mais ágeis
                  </h3>
                  <p className="text-gray-600">
                    Modelos como ChatGPT podem auxiliar na coleta de informações e geração de insights clínicos preliminares.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center">
                    <FileCheck className="h-6 w-6 text-orange-600 mr-3" />
                    Gestão e automação de processos
                  </h3>
                  <p className="text-gray-600">
                    Ferramentas de IA podem assumir tarefas repetitivas, liberando os profissionais para focar no que realmente importa: o cuidado ao paciente.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Building2 className="h-6 w-6 text-orange-600 mr-3" />
                    Estratégias customizadas para o seu negócio
                  </h3>
                  <p className="text-gray-600">
                    A consultoria individual garante que você aplique as soluções de IA que realmente farão diferença no seu dia a dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Workshop Content [SEÇÃO 4] */}
      <section className="py-20 bg-orange-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Conteúdo 100% Foco em Saúde
              </h2>
              <p className="text-gray-600">
                Carga Horária Total: 7 horas (ao vivo) + 3 horas de consultoria individual
                <br />
                Formato Online via Microsoft Teams
                <br />
                Datas e Horários flexíveis, definidos junto à sua instituição.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Módulo 1: IA Generativa no Setor de Saúde (3 horas)",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
                  items: [
                    "Panorama da IA Generativa: Conceitos básicos: Machine Learning, Deep Learning e Generative AI.",
                    "Como a IA Generativa está revolucionando o setor de saúde (benefícios e desafios).",
                    "Ferramentas de IA Generativa: ChatGPT, AIStudio, Claude e modelos locais.",
                    "Casos Reais e Depoimentos de diferentes segmentos do setor de saúde.",
                    "Técnicas de Prompt Engineering e conceitos essenciais.",
                    "Compliance e Segurança: LGPD, proteção de dados sensíveis, sigilo médico."
                  ]
                },
                {
                  title: "Módulo 2: Uso Prático da IA Generativa em Triagens e Diagnósticos (2 horas)",
                  image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
                  items: [
                    "Abordagem Médica Assistida pela IA: Fluxo de triagens e anamnese.",
                    "Exemplos de protocolos médicos que podem ser aprimorados.",
                    "Como integrar ChatGPT em rotinas de consultório ou ambulatório.",
                    "Limitações e cuidados éticos/legais (responsabilidade médica).",
                    "Estudos de Caso Reais em cardiologia e outras especialidades.",
                    "Importância da validação profissional e documentação."
                  ]
                },
                {
                  title: "Módulo 3: IA Generativa na Gestão de Instituições de Saúde (2 horas)",
                  image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
                  items: [
                    "Introdução às APIs: Linguagem de programação e funcionamento.",
                    "Automações de Processos: Sistemas low code, No code e chatbots.",
                    "Fluxos de Monitoramento: Análise de indicadores, KPIs e bancos de dados.",
                    "iPaaS e MicroSaaS: Processos de fluxos e enxame de agentes.",
                    "Exemplos Reais de Gestão Inteligente no consultório.",
                    "Reforço de pontos de sigilo, LGPD e segurança digital."
                  ]
                }
              ].map((module, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-bold mb-6">{module.title}</h3>
                  <ul className="space-y-4">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Specialists Section [SEÇÃO 6] */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Quem Estará ao Seu Lado: O Trio de Especialistas
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                image: "/images/alexandrecalmon.png",
                name: "Alexandre Calmon",
                role: "Cientista de Dados e Especialista em IA Generativa",
                description: [
                  "Responsável por consultorias em mais de 200 empresas.",
                  "Conhecimento profundo de ChatGPT, AIStudio e outras plataformas avançadas."
                ]
              },
              {
                image: "/images/drfernandomenezes.png",
                name: "Dr. Fernando Menezes",
                role: "Médico Cardiologista / Medicina Interna",
                description: [
                  "Utiliza IA em rotinas de triagem e anamnese.",
                  "Abordará estudos de caso reais para ilustrar como a IA melhora resultados clínicos."
                ]
              },
              {
                image: "/images/drcarlosrachid.png",
                name: "Dr. Carlo Rachid",
                role: "Médico Vascular",
                description: [
                  "Experiência em gestão e automação de processos em saúde.",
                  "Demonstra como APIs, ERPs e fluxos automatizados revolucionam a administração hospitalar."
                ]
              }
            ].map((specialist, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{specialist.name}</h3>
                <p className="text-gray-600 mb-4">{specialist.role}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {specialist.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Investment Section [SEÇÃO 9] */}
      <section className="py-20 bg-orange-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Investimento e Condições Especiais
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold">Valor do Workshop:</span>
                <span className="text-orange-600 font-bold">Sob Demanda</span>
              </div>
              <p className="text-gray-600">Mínimo de 10 participantes por instituição</p>
              <div className="space-y-4">
                <h4 className="font-bold">Inclui:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <span>Certificação digital via e-certificados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <span>Material de apoio completo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <span>1 hora de consultoria individual com cada especialista</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <span>Suporte via grupo exclusivo de WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section [SEÇÃO 11 & 12] */}
      <section className="py-20 bg-orange-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Não perca tempo!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Você está a um passo de viver uma verdadeira transformação na sua carreira e na forma como a sua instituição cuida dos pacientes. Com a IA Generativa, você pode fazer mais com menos — e com total segurança e confiabilidade.
            </p>
            <a
              href="https://minhaagendavirtual.com.br/agenda/calmon/ia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition hover:scale-105"
            >
              Agende uma Conversa
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AIHealthService;