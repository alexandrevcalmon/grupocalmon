import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Zap, // Productivity
  HeartHandshake, // Bem-Estar
  Award, // Liderança
  Lightbulb, // Criatividade, Inovação
  BarChartBig, // Produtividade, Resultados
  Users, // Equipe, Colaboradores
  Brain, // Estratégia, Inteligência
  ShieldCheck, // Confiança, Segurança
  BookOpen, // Módulos
  Layers, // Ferramentas
  MessageSquare, // Prompts
  Target, // Objetivos
  PlayCircle, // Conteúdo Gravado
  HelpCircle, // Dúvidas
  CalendarDays, // Agendamento
  Share2, // Compartilhar
  ClipboardCheck, // Diagnóstico
  Crown, // Líderes
  Rocket, // Inovadores
  Building, // Organizações
  Star, // Único, Benefício
  Package, // Planos
  Phone,
  Mail,
  Globe,
  Briefcase, // Experiência
  TrendingUp, // Crescimento
  Sparkles, // Revolução
  UserCheck, // Condução por
  Clock, // Tempo
  RefreshCw // ÍCONE PARA ATUALIZAÇÃO CONTÍNUA - ADICIONADO
} from 'lucide-react';

// Helper components (simplified from your example, adapt as needed)
const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`}>{children}</div>
);

const SectionWrapper = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay, duration: 0.6 }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.section>
);

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
      staggerChildren: 0.15
    }
  }
};

// Custom theme colors based on PDF
const themeColors = {
  primary: 'text-amber-700', // Deeper orange/brown
  primaryBg: 'bg-amber-700',
  lightBg: 'bg-amber-50', // Creamy/light orange
  darkText: 'text-stone-800',
  mediumText: 'text-stone-600',
  lightText: 'text-stone-100',
  accent: 'text-amber-600',
  accentBg: 'bg-amber-600',
};

const AIGenerate360 = () => {
  return (
    <div className={`pt-12 font-serif ${themeColors.darkText} bg-[#FAF8F5]`}> {/* Main page background similar to PDF */}
      {/* Logo Placeholder - Assuming SVG or Image */}
      {/*<div className="flex justify-center py-8">
        {/* Replace with actual logo
        <div className="flex items-center space-x-3">
            <svg width="80" height="80" viewBox="0 0 24 24" className="text-amber-600 fill-current">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.67L4.65 11.5 12 15.33l7.35-3.83L12 9.67zM2 17l10 5 10-5-10-5-10 5z"/>
            </svg>
            {<div>
                <span className={`block text-xs ${themeColors.mediumText}`}>GRUPO</span>
                <span className={`text-4xl font-bold ${themeColors.primary}`}>CALMON</span>
            </div>
        </div>
      </div>*/}

      {/* [SESSÃO 1: HEADLINE E CHAMADA DE IMPACTO - Page 1] */}
      <SectionWrapper className={`py-16 ${themeColors.lightBg}`}>
        <Container>
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl font-bold ${themeColors.primary} mb-6`}>
              Transforme Sua Empresa com Inteligência Artificial Generativa: A Revolução Começa Agora!
            </h1>
            <p className={`text-xl ${themeColors.mediumText} mb-4`}>
              Sua Empresa Está Pronta Para o Futuro ou Presa no Passado? No cenário empresarial dinâmico de hoje, a pressão por mais produtividade, inovação constante e retenção de talentos é implacável.
            </p>
            <p className={`text-lg ${themeColors.mediumText}`}>
              Tarefas repetitivas consomem um tempo valioso que poderia ser dedicado à estratégia e criatividade.
            </p>
            <p className={`mt-6 text-md ${themeColors.mediumText}`}>
              por <span className="font-semibold">Alexandre Calmon</span>
            </p>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 2: DESAFIO ATUAL - Page 2] */}
      <SectionWrapper className="py-20 bg-white">
        <Container>
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-12`}>
            Desafio Atual
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div variants={fadeIn} className="p-6 border-l-4 border-amber-600 bg-amber-50 rounded-r-lg">
              <h3 className={`text-2xl font-semibold ${themeColors.primary} mb-3`}>1. O Desafio Inicial</h3>
              <p className={`${themeColors.mediumText}`}>
                Sua empresa está evoluindo na velocidade que o mercado exige? No cenário empresarial dinâmico de hoje, a pressão por mais produtividade, inovação constante e retenção de talentos é implacável. Tarefas repetitivas consomem um tempo valioso que poderia ser dedicado à estratégia e criatividade.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6 border-l-4 border-amber-600 bg-amber-50 rounded-r-lg">
              <h3 className={`text-2xl font-semibold ${themeColors.primary} mb-3`}>2. O Problema</h3>
              <p className={`${themeColors.mediumText}`}>
                O risco de burnout entre colaboradores é uma realidade preocupante, minando o moral e a eficiência. Muitas empresas sentem que estão ficando para trás na corrida tecnológica, incapazes de aproveitar o verdadeiro potencial de ferramentas transformadoras como a Inteligência Artificial Generativa.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 3: A SOLUÇÃO - Page 3] */}
      <SectionWrapper className={`py-20 ${themeColors.lightBg}`}>
        <Container>
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-16`}>
            A Solução: Programa IA Generativa 360º
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Produtividade", description: "Descubra como o Programa IA Generativa 360° com Alexandre Calmon pode catapultar sua produtividade, bem-estar e liderança para o próximo nível, garantindo que sua equipe não apenas acompanhe, mas lidere a transformação digital. Se você reconhece esses desafios, saiba que não está sozinho. A boa notícia é que existe uma saída clara e estratégica para transformar esses obstáculos em oportunidades exponenciais de crescimento e bem-estar." },
              { icon: HeartHandshake, title: "Bem-Estar", description: "Este não é apenas um curso; é uma imersão estratégica desenhada para cultivar uma mentalidade inovadora e humanizada em suas equipes. Nós entendemos que o sucesso sustentável vai além da tecnologia: reside na capacidade de seus colaboradores utilizarem a IA para produzir mais com menos esforço, liberar tempo para o pensamento estratégico e, fundamentalmente, melhorar a qualidade de vida no trabalho." },
              { icon: Award, title: "Liderança", description: "Chegou a hora de transcender os desafios e abraçar uma transformação completa e contínua. O Programa de Capacitação IA Generativa 360°, conduzido pessoalmente por Alexandre Calmon, especialista com mais de 33 anos de experiência e histórico comprovado com gigantes do mercado como Claro, Santander e Vale S.A., é a sua resposta. Com o Grupo Calmon, você não apenas adota a IA; você a domina para construir um futuro mais produtivo, engajado e rentável." }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <item.icon className={`h-12 w-12 ${themeColors.accent} mx-auto mb-6`} />
                <h3 className={`text-2xl font-semibold ${themeColors.primary} mb-4`}>{item.title}</h3>
                <p className={`${themeColors.mediumText} text-sm leading-relaxed`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 4: LIBERTE O POTENCIAL - Page 4] */}
      <SectionWrapper className="py-20 bg-white">
        <Container className="max-w-5xl mx-auto">
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-12`}>
            Liberte o Potencial Máximo da Sua Equipe
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={fadeIn} className="md:w-1/3 flex justify-center">
              {/* Placeholder for "VOE ALTO COM IA" image - replace with actual image if available */}
              <div className="bg-amber-100 p-6 rounded-lg shadow-md text-center">
                <Sparkles className={`h-16 w-16 ${themeColors.accent} mx-auto mb-4`} />
                <h4 className={`text-xl font-semibold ${themeColors.primary}`}>VOE ALTO COM IA</h4>
                <p className={`${themeColors.mediumText} text-sm`}>PROGRAMA IA GENERATIVA 360º</p>
                <p className={`${themeColors.mediumText} text-sm`}>Potencialize sua produtividade com inteligência artificial</p>
              </div>
            </motion.div>
            <motion.div variants={staggerContainer} className="md:w-2/3 space-y-8">
              {[
                { icon: Clock, title: "Mais Tempo para Criatividade e Estratégia", description: "Ao investir no Programa IA Generativa 360°, sua empresa não está apenas adquirindo um treinamento, mas sim um arsenal de vantagens competitivas que se traduzem em resultados tangíveis e transformadores. Imagine suas equipes dedicando mais tempo à criatividade e estratégia, liberadas das amarras de tarefas operacionais repetitivas." },
                { icon: BarChartBig, title: "Produtividade e Bem-estar Integrados", description: "Visualize um ambiente de trabalho onde a produtividade floresce lado a lado com o bem-estar, graças à integração da expertise em saúde mental de Daniela Magno, alinhada proativamente com às discussões da NR-1 (Segurança e Saúde no Trabalho)." },
                { icon: Brain, title: "Decisões Mais Rápidas e Embasadas", description: "Este programa é o catalisador para elevar a motivação, o engajamento e, consequentemente, a retenção dos seus talentos mais valiosos. Com a IA Generativa, suas decisões se tornarão mais rápidas e embasadas, a criatividade será amplificada em todas as áreas – do marketing às operações – e sua marca empregadora se fortalecerá, atraindo os melhores profissionais do mercado." }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg">
                  <item.icon className={`h-8 w-8 ${themeColors.accent} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className={`text-xl font-semibold ${themeColors.primary} mb-2`}>{item.title}</h3>
                    <p className={`${themeColors.mediumText} text-sm`}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
              <motion.p variants={fadeIn} className={`text-center mt-6 ${themeColors.mediumText}`}>
                Prepare-se para uma cultura de inovação e bem-estar que impulsiona o crescimento sustentável.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 5: O QUE TORNA ÚNICO - Page 5] */}
      <SectionWrapper className={`py-20 ${themeColors.lightBg}`}>
        <Container>
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-12`}>
            O Que Torna o Programa IA Generativa 360º Único
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Transformação Cultural e Estratégica", description: "Não apenas treinamento em ferramentas." },
              { icon: UserCheck, title: "Condução por Alexandre Calmon", description: "Experiência prática em grandes corporações." },
              { icon: HeartHandshake, title: "Integração com Saúde Mental", description: "Expertise de Daniela Magno, Mestra pela UNIFESP." },
              { icon: RefreshCw, title: "Atualização Contínua", description: "Mentorias mensais de dúvidas e tendências." } // RefreshCw é usado aqui (linha ~221)
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
                <item.icon className={`h-10 w-10 ${themeColors.accent} mx-auto mb-4`} />
                <h3 className={`text-lg font-semibold ${themeColors.primary} mb-2`}>{item.title}</h3>
                <p className={`${themeColors.mediumText} text-sm`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeIn} className={`mt-12 text-center max-w-3xl mx-auto ${themeColors.mediumText}`}>
            Em um mercado repleto de promessas superficiais, o Programa IA Generativa 360° do Grupo Calmon se destaca por sua profundidade, abordagem humanizada e foco em resultados sustentáveis. A condição especial de lançamento, com acesso pioneiro e garantido mesmo após futuros reajustes, demonstra nossa confiança no valor que entregamos e nosso desejo de construir parcerias duradouras.
          </motion.p>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 6: MÓDULOS DO PROGRAMA - Page 6] */}
      <SectionWrapper className="py-20 bg-white">
        <Container className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-12`}>
            Módulos do Programa IA Generativa 360º
          </motion.h2>
          <motion.div variants={staggerContainer} className="space-y-6">
            {[
              { num: 1, title: "Boas-Vindas e Apresentação do Instrutor", icon: PlayCircle },
              { num: 2, title: "O Cenário da Revolução Tecnológica", icon: Globe },
              { num: 3, title: "Explosão de Ferramentas de IA Generativa", icon: Layers },
              { num: 4, title: "Prompt Engineering – Fundamentos e Técnicas Avançadas", icon: MessageSquare },
              { num: 5, title: "Exemplos de Prompts por Setor", icon: Target },
              { num: 6, title: "ChatGPT: Introdução ao ChatGPT", icon: Brain },
              { num: 7, title: "Ferramentas de IA Generativa – Review", icon: CheckCircle2 },
              { num: 8, title: "Mentorias Online ao vivo – Plantão de Dúvidas (Mensal, coletivas, que ficaram gravadas)", icon: HelpCircle },
              { num: 9, title: "Mentorias Online ao vivo – Atualizações (Mensal, coletivas, que ficaram gravadas)", icon: Users }
            ].map((item) => (
              <motion.div key={item.num} variants={fadeIn} className="bg-amber-50 p-6 rounded-lg shadow-sm flex items-center space-x-4">
                <div className={`${themeColors.accentBg} ${themeColors.lightText} rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg`}>
                  {item.num}
                </div>
                <item.icon className={`h-6 w-6 ${themeColors.accent} flex-shrink-0`} />
                <h3 className={`text-lg font-medium ${themeColors.darkText}`}>{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeIn} className={`mt-10 text-center ${themeColors.mediumText}`}>
            Nosso programa foi meticulosamente estruturado para guiá-lo desde os fundamentos até as aplicações mais avançadas da IA Generativa, sempre com foco prático e estratégico.
          </motion.p>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 7: PARA QUEM É & TESTEMUNHOS - Page 7] */}
      <SectionWrapper className={`py-20 ${themeColors.lightBg}`}>
        <Container>
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-16`}>
            Para Quem Foi Desenhado Este Programa
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-10 mb-20 max-w-5xl mx-auto">
            {[
              { icon: Crown, title: "Líderes Visionários", description: "CEOs, Diretores, Gerentes que buscam vanguarda e eficiência." },
              { icon: Rocket, title: "Profissionais Inovadores", description: "Marketing, Vendas, RH, Operações que desejam otimizar processos e criar soluções disruptivas." },
              { icon: Building, title: "Organizações de Todos os Portes", description: "De startups a grandes corporações, que reconhecem a IA Generativa como motor de transformação." }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <item.icon className={`h-12 w-12 ${themeColors.accent} mx-auto mb-6`} />
                <h3 className={`text-xl font-semibold ${themeColors.primary} mb-3`}>{item.title}</h3>
                <p className={`${themeColors.mediumText} text-sm`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 variants={fadeIn} className={`text-3xl font-bold text-center ${themeColors.primary} mb-12`}>
            Veja o Que Dizem Aqueles Que Já Vivenciaram a Transformação
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Leonardo Barbosa", company: "Invest Minas - Governo de Minas Gerais", quote: "A palestra sensibilizou nossos colaboradores sobre a importância da IA. Semanas depois, a equipe já buscava ferramentas para melhorar resultados.", imgSrc: "/images/leonardobarbosa.png" }, // Replace with actual image path
              { name: "Paulo Henrique, CEO", company: "Empresa LoCX", quote: "Capacitação e consultoria elevaram drasticamente nossa produtividade. Entregamos soluções mais eficientes e personalizadas.", imgSrc: "/images/paulolocx.jpg" }, // Replace with actual image path
              { name: "Lucas, Coordenador de Marketing", company: "ACIUB - Associação Comercial e Industrial de Uberlândia-MG", quote: "Didática incrível e consultoria sob medida resolveram nossas maiores dores; investimento mais que válido.", imgSrc: "/images/lucasaciub.png" }, // Replace with actual image path
              { name: "Frederico, Consultor de Negócios", company: "Sebrae", quote: "As palestras de Alexandre Calmon no evento Varejo + Experience, organizado pelo Sebrae-MG, impactaram cerca de 600 pessoas por cidade.", imgSrc: "/images/fredsebrae.png" } // Replace with actual image path
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                {/* Placeholder for image */}
                <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-4 overflow-hidden">
                   <img src={testimonial.imgSrc} alt={testimonial.name} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
                <p className={`italic ${themeColors.mediumText} text-sm mb-4 flex-grow`}>"{testimonial.quote}"</p>
                <div>
                  <p className={`font-semibold ${themeColors.primary}`}>{testimonial.name}</p>
                  <p className={`${themeColors.mediumText} text-xs`}>{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>
      
      {/* [SESSÃO 8: PLANOS DE INVESTIMENTO - Page 8] */}
      <SectionWrapper className="py-20 bg-white">
        <Container>
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-12`}>
            Planos de Investimento Flexíveis
          </motion.h2>
          
          <motion.div variants={fadeIn} className="overflow-x-auto mb-12">
            <table className="min-w-full bg-white border border-amber-200 rounded-lg shadow">
              <thead className={`${themeColors.lightBg}`}>
                <tr>
                  <th className={`py-3 px-6 text-left text-sm font-semibold ${themeColors.primary} uppercase`}>Planos</th>
                  <th className={`py-3 px-6 text-left text-sm font-semibold ${themeColors.primary} uppercase`}>Acessos Simultâneos</th>
                  <th className={`py-3 px-6 text-left text-sm font-semibold ${themeColors.primary} uppercase`}>Mensal (Anual)</th>
                  <th className={`py-3 px-6 text-left text-sm font-semibold ${themeColors.primary} uppercase`}>Mensal (Semestral)</th>
                </tr>
              </thead>
              <tbody className={`${themeColors.mediumText}`}>
                {[
                  { name: "Starter-5", access: "Até 5", annual: "R$ 246,00", semiannual: "R$ 295,20" },
                  { name: "Starter-10", access: "Até 10", annual: "R$ 394,00", semiannual: "R$ 472,80" },
                  { name: "Starter-25", access: "Até 25", annual: "R$ 630,00", semiannual: "R$ 756,00" },
                  { name: "Starter-50", access: "Até 50", annual: "R$ 1.008,00", semiannual: "R$ 1.210,00" },
                  { name: "Starter-100", access: "Até 100", annual: "R$ 1.613,00", semiannual: "R$ 1.935,00" },
                  { name: "Pacote Extra de Expansão", access: "Limitado a 20 empresas", annual: "R$ 2.134,00", semiannual: "R$ 2.560,00", highlight: true },
                ].map((plan, index) => (
                  <tr key={index} className={`border-b border-amber-100 ${plan.highlight ? 'bg-amber-100 font-semibold' : 'hover:bg-amber-50'}`}>
                    <td className="py-4 px-6">{plan.name}</td>
                    <td className="py-4 px-6">{plan.access}</td>
                    <td className="py-4 px-6">{plan.annual}</td>
                    <td className="py-4 px-6">{plan.semiannual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p variants={fadeIn} className={`${themeColors.mediumText} text-sm text-center mb-6`}>
            Formas de Pagamentos: Pix ou Boleto, cobrado mensalmente via banco Inter. Os boletos são enviados para o e-mail informado pelo cliente 15 dias antes do vencimento.
          </motion.p>
          <motion.p variants={fadeIn} className={`${themeColors.mediumText} text-sm text-center italic mb-10`}>
            Importante: o plano contempla o número de acessos simultâneos, não o número de colaboradores. Isso significa que, se um colaborador sair, basta substituir o e-mail do usuário que saiu pelo do novo membro sem nenhum custo adicional, garantindo que toda sua equipe permaneça capacitada e atualizada.
          </motion.p>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-10">
            <motion.div variants={fadeIn} className="bg-amber-50 p-6 rounded-lg">
              <h3 className={`text-xl font-semibold ${themeColors.primary} mb-4`}>Benefícios incluídos em todas as opções Starter:</h3>
              <ul className={`space-y-2 list-disc list-inside ${themeColors.mediumText} text-sm`}> {/* CORRIGIDO: Template literal para classes */}
                <li>Workshop Online Gravado – Atualizado Continuamente</li>
                <li>2h Mentoria Plantão Tira-Dúvidas coletiva (mensal, online ao vivo)</li>
                <li>1h Mentoria de Atualizações coletiva (mensal, online ao vivo)</li>
                <li>1 palestra motivacional "A Revolução da Inteligência Artificial" coletiva (mensal, online ao vivo)</li>
                <li>1 palestra motivacional "Gestão Emocional, Seu Sucesso Profissional" coletiva (mensal, online ao vivo)</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-amber-100 p-6 rounded-lg border-2 border-amber-600">
              <h3 className={`text-xl font-semibold ${themeColors.primary} mb-4`}>Benefícios do Pacote Extra de Expansão:</h3>
              <ul className={`space-y-2 list-disc list-inside ${themeColors.mediumText} text-sm`}> {/* CORRIGIDO: Template literal para classes */}
                <li>4h/mês de mentorias exclusivas com Alexandre Calmon (2h quinzenal, online ao vivo)</li>
                <li>1 palestra motivacional "A Revolução da Inteligência Artificial" exclusiva no lançamento (online ao vivo ou presencial a combinar) - Alexandre Calmon</li>
                <li>1 palestra motivacional "Gestão Emocional, Seu Sucesso Profissional" exclusiva no lançamento (online ao vivo ou presencial a combinar) – Daniela Magno</li>
                <li>1h de direcionamento terapêutico de grupo exclusiva (mensal, online ao vivo) – Daniela Magno</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-16 text-center bg-amber-600 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Uma Oportunidade ÚNICA Para Pioneiros: Abrace o Futuro Sem Limites</h3>
            <p className="mb-4">Oferta por Tempo Limitado: Pacote Extra de Expansão apenas para as 20 primeiras empresas em todo o Brasil.</p>
            <p>Para celebrar o lançamento, nosso atendimento será dedicado a um grupo seleto de 20 empresas no pacote extra, disponibilizando 80 horas mensais (4h/mês por empresa) exclusivas com este preço superespecial.</p>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 9: CONHEÇA A FORÇA MOTRIZ - Page 9 & 10] */}
      <SectionWrapper className={`py-20 ${themeColors.lightBg}`}>
        <Container>
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-16`}>
            Conheça a Força Motriz Por Trás da Sua Transformação: <br className="hidden md:block" /> Grupo Calmon, Alexandre Calmon e Daniela Magno
          </motion.h2>
          
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Propósito-Núcleo", description: "Elevar pessoas e empresas a novos patamares com IA Generativa." },
              { icon: Briefcase, title: "Missão", description: "Capacitar organizações com programas que geram resultados tangíveis." },
              { icon: ShieldCheck, title: "Valores", description: "Ética radical, transparência e foco em saúde mental." },
              { icon: TrendingUp, title: "Visão", description: "Ser o parceiro mais confiável em capacitação de IA na América Latina." }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
                <item.icon className={`h-10 w-10 ${themeColors.accent} mx-auto mb-4`} />
                <h3 className={`text-lg font-semibold ${themeColors.primary} mb-2`}>{item.title}</h3>
                <p className={`${themeColors.mediumText} text-sm`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl">
            {/* Container das fotos ajustado para melhor centralização */}
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-10 mb-10">
                {/* Placeholder for Alexandre Calmon image */}
                <div className="w-48 h-48 bg-stone-100 rounded-full overflow-hidden"> {/* Removido mx-auto md:mx-0 pois o flex pai cuida disso */}
                    <img src="/images/alexandrecalmon.png" alt="Alexandre Calmon" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
                {/* Placeholder for Daniela Magno image */}
                <div className="w-48 h-48 bg-stone-100 rounded-full overflow-hidden"> {/* Removido mx-auto md:mx-0 */}
                    <img src="/images/danimagnosemfundo.png" alt="Daniela Magno" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
            </div>

            {/* Título centralizado */}
            <h3 className={`text-2xl font-bold ${themeColors.primary} mb-6 text-center`}>O Grupo Calmon</h3>
            <div className={`space-y-8 ${themeColors.mediumText}`}> {/* CORRIGIDO: Template literal para classes */}
              <div>
                <h4 className={`text-xl font-semibold ${themeColors.primary} mb-2`}>1. Propósito e Missão</h4>
                <p>O Grupo Calmon nasceu com um propósito-núcleo claro e poderoso: elevar pessoas e empresas a novos patamares, utilizando a Inteligência Artificial Generativa para libertar tempo, aumentar a produtividade, cuidar da saúde mental e fortalecer a retenção de talentos. Nossa missão é capacitar organizações de todos os portes com programas de IA Generativa 360° que eliminem tarefas repetitivas, estimulem o pensamento estratégico e gerem resultados tangíveis, sempre promovendo qualidade de vida e criando ambientes onde os melhores talentos desejam permanecer.</p>
              </div>
              <div>
                <h4 className={`text-xl font-semibold ${themeColors.primary} mb-2`}>2. Visão</h4>
                <p>Nossa visão para os próximos cinco anos é sermos reconhecidos na América Latina como o parceiro mais confiável e inovador em capacitação contínua em IA Generativa, transformando a rotina de 10 mil profissionais por ano. Nossos valores inegociáveis são o comprometimento com valor real, ética radical, confiabilidade e transparência, humanização e saúde mental em foco, fortalecimento de equipes e retenção de talentos, e uma ousadia visionária.</p>
              </div>
              <div>
                <h4 className={`text-xl font-semibold ${themeColors.primary} mb-2`}>3. Liderança</h4>
                <p>À frente desta iniciativa está Alexandre Calmon, CEO do Grupo Calmon, um profissional com mais de 33 anos de uma carreira multifacetada e de impacto. Cientista de dados, neurocientista, ex-consultor da Deloitte e mentor da ABStartups, Alexandre acumulou mais de 1.000 horas em mentorias e consultorias para empresas do calibre de Governo de Minas, FIEMG, FIESP, Sebrae, Ambev, FMU e ACIUB. Sua combinação única de profundo conhecimento técnico, visão estratégica de negócios e uma didática envolvente tem o poder de transformar equipes e impulsionar a inovação de forma prática e humanizada.</p>
                <p className="mt-3">Ao lado de Daniela Magno, terapeuta especialista e mestra em saúde mental pela Universidade Federal de São Paulo, que traz uma contribuição vital ao programa com palestras e direcionamentos sobre gestão emocional e bem-estar, o Grupo Calmon oferece uma abordagem verdadeiramente 360° para o desenvolvimento de pessoas e organizações na era da IA.</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* [SESSÃO 10: PRÓXIMOS PASSOS - Page 11] */}
      <SectionWrapper className="py-20 bg-white">
        <Container className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn} className={`text-3xl md:text-4xl font-bold text-center ${themeColors.primary} mb-16`}>
            Próximos Passos
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { icon: CalendarDays, title: "Agende uma Call", description: "Agende uma Conversa (30 minutos) com Alexandre Calmon." },
              { icon: Share2, title: "Compartilhe Objetivos", description: "Compartilhe seus Objetivos." },
              { icon: ClipboardCheck, title: "Receba Diagnóstico", description: "Receba um Diagnóstico Sem Compromisso!" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-amber-50 p-8 rounded-lg shadow-md">
                <item.icon className={`h-12 w-12 ${themeColors.accent} mx-auto mb-6`} />
                <h3 className={`text-xl font-semibold ${themeColors.primary} mb-3`}>{item.title}</h3>
                <p className={`${themeColors.mediumText} text-sm`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* [FOOTER - Page 12] */}
      <footer className={`py-12 ${themeColors.lightBg} border-t border-amber-200`}>
        <Container className={`text-center ${themeColors.mediumText}`}>
            {/* Logo no footer - SUBSTITUÍDO */}
            <div className="flex justify-center mb-6">
              <img 
                src="/images/logogrupocalmon.png" 
                alt="Logo Grupo Calmon" 
                className="h-16" // Pode querer uma altura um pouco menor para o footer
              />
            </div>
          {/* ... resto do conteúdo do footer (contato, www, telefones, copyright) ... */}
          <p className="mb-2 flex items-center justify-center">
            <Mail className={`h-5 w-5 mr-2 ${themeColors.accent}`} />
            Contato: <a href="mailto:contato@grupocalmon.com" className={`${themeColors.primary} hover:underline`}>contato@grupocalmon.com</a>
          </p>
          <p className="mb-2 flex items-center justify-center">
            <Globe className={`h-5 w-5 mr-2 ${themeColors.accent}`} />
            <a href="http://www.grupocalmon.com.br" target="_blank" rel="noopener noreferrer" className={`${themeColors.primary} hover:underline`}>www.grupocalmon.com.br</a>
          </p>
          <p className="mb-6 flex items-center justify-center">
            <Phone className={`h-5 w-5 mr-2 ${themeColors.accent}`} />
            +55 11 98130-0027 | +55 37 99137-3075
          </p>
          <p className="text-sm">© 2025 Grupo Calmon. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </div>
  );
};

export default AIGenerate360;