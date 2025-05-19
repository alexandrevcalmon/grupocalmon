import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Palestra IA Generativa para Negócios */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6 h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="IA Generativa para Negócios"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Link to="/services/ai-business-lecture" className="block group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition">
                Palestra "A Revolução da IA Generativa para Negócios: como a IA Generativa está redefinindo o mundo Corporativo"
              </h3>
            </Link>
            <p className="text-gray-600 mb-6">
              A Inteligência Artificial Generativa está redefinindo o mundo corporativo, impulsionando inovação, 
              otimizando processos e criando novas oportunidades de crescimento. Nesta palestra, Alexandre Calmon 
              explora como essa tecnologia está moldando o futuro dos negócios, transformando a produtividade, 
              a tomada de decisões e a competitividade no cenário global.
            </p>
            <Link to="/services/ai-business-lecture" className="flex items-center text-orange-600 hover:text-orange-700 transition">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Card 2: Palestra Inteligência Emocional e Saúde Mental */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6 h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1599592187465-6dc742367282?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Inteligência Emocional e Saúde Mental"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Link to="/services/emotional-intelligence" className="block group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition">
                Palestra "Inteligência Emocional e Saúde Mental: o caminho para o sucesso no empreendedorismo"
              </h3>
            </Link>
            <p className="text-gray-600 mb-6">
              A palestra explora o impacto da saúde mental e da inteligência emocional no empreendedorismo, 
              abordando temas como inovação, tomada de decisões e sucesso profissional. Daniela Magno, a 
              palestrante, discute tópicos relacionados à regulação emocional para estimular a criatividade 
              e a resiliência, além de autoconfiança, gestão financeira e liderança. A metodologia emprega 
              histórias reais, dinâmicas interativas, neurociência aplicada e práticas de mindfulness, 
              proporcionando um aprendizado inspirador e envolvente.
            </p>
            <Link to="/services/emotional-intelligence" className="flex items-center text-orange-600 hover:text-orange-700 transition">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Card 3: Capacitação em IA Generativa para Negócios */}
          {/*<div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6 h-64 overflow-hidden rounded-lg">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661347828110-435a158faa8e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Capacitação em IA Generativa para Negócios"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Link to="/services/ai-business" className="block group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition">
                Capacitação em IA Generativa para Negócios
              </h3>
            </Link>
            <p className="text-gray-600 mb-6">
              Capacitamos empreendedores para a aplicação prática da Inteligência Artificial Generativa por meio 
              do workshop online "Como usar IA Generativa para Aumentar suas Vendas", oferecendo estratégias 
              eficientes para impulsionar resultados. Além disso, disponibilizamos consultorias individuais 
              personalizadas, auxiliando na implementação dos conceitos aprendidos e garantindo a aplicação 
              eficaz da IA no dia a dia dos negócios.
            </p>
            <Link to="/services/ai-business" className="flex items-center text-orange-600 hover:text-orange-700 transition">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>*/}

          {/* Card 4: Capacitação em IA Generativa para Saúde */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6 h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Capacitação em IA Generativa para Saúde"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Link to="/services/ai-health" className="block group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition">
                Capacitação em IA Generativa para Saúde
              </h3>
            </Link>
            <p className="text-gray-600 mb-6">
              A capacitação "IA Generativa para Profissionais de Saúde" ensina médicos, dentistas, psicólogos 
              e gestores a usar IA para otimizar diagnósticos, triagens e processos clínicos. O programa combina 
              um workshop com três módulos e consultorias individuais com especialistas, abordando ferramentas 
              para produtividade, técnicas de prompts para diagnósticos precisos e automação na saúde. Ministrado 
              por Alexandre Calmon, Dr. Fernando Menezes e Dr. Carlo Rachid, prepara profissionais para integrar 
              IA de forma estratégica no dia a dia.
            </p>
            <Link to="/services/ai-health" className="flex items-center text-orange-600 hover:text-orange-700 transition">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Card 5: Programa "IA GENERATIVA 360º" - CORRIGIDO */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6 h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1738107450304-32178e2e9b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Considerar usar uma imagem diferente para este card
                alt='Programa "IA GENERATIVA 360º"' // Alt text mais específico
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Link to="/services/ai-generate-360" className="block group"> {/* CORRIGIDO: ai-generate-360 */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition">
                Programa "IA GENERATIVA 360º"
              </h3>
            </Link>
            <p className="text-gray-600 mb-6">
            SUA EMPRESA ESTÁ PRONTA PARA O FUTURO OU PRESA NO PASSADO? No cenário empresarial dinâmico de hoje, a pressão por mais 
            produtividade, inovação constante e retenção de talentos é implacável. Tarefas repetitivas consomem um tempo valioso 
            que poderia ser dedicado à estratégia e criatividade.
            </p>
            {/* Este segundo título pode ser apenas texto ou também um link, se desejado */}
            {/* Se for link, também deve ser corrigido: */}
            <Link to="/services/ai-generate-360" className="block group"> {/* CORRIGIDO: ai-generate-360 */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-600 transition">
                A Solução: IA Generativa 360º	
              </h3>
            </Link>
            <Link to="/services/ai-generate-360" className="flex items-center text-orange-600 hover:text-orange-700 transition"> {/* CORRIGIDO: ai-generate-360 */}
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;