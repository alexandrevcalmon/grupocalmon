import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ArticleRecommendations from '@/components/blog/ArticleRecommendations';
import { Hash } from 'lucide-react';

const BusinessAI = () => {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <Container>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="A Revolução da Inteligência Artificial nos Negócios"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                A Revolução da Inteligência Artificial nos Negócios: Números que Impactam
              </h1>
              <div className="flex items-center text-gray-500 text-sm mb-8">
                <span>05 de Janeiro, 2025</span>
                <span className="mx-2">•</span>
                <span>Alexandre Calmon</span>
              </div>
              
              <div className="prose max-w-none">
                <p className="mb-6">
                  Em um cenário cada vez mais competitivo, a inteligência artificial (IA) vem se consolidando como um diferencial estratégico para empresas que desejam inovar e conquistar melhores resultados. Recentemente, uma pesquisa da Forbes Advisor intitulada "Como as empresas estão usando a inteligência artificial em 2024" revelou dados surpreendentes sobre o impacto da IA no ambiente corporativo.
                </p>

                <h2>Dados que Transformam Estratégias</h2>
                <p>A pesquisa aponta que:</p>
                <ul>
                  <li>56% das empresas utilizam a IA para aprimorar o atendimento ao cliente.</li>
                  <li>51% empregam essa tecnologia em cibersegurança e na gestão de fraudes.</li>
                  <li>64% dos líderes afirmam que a IA fortalece o relacionamento com os clientes.</li>
                  <li>60% esperam um aumento significativo nas vendas após implementar soluções baseadas em IA.</li>
                </ul>
                <p>
                  Entretanto, 24% dos entrevistados demonstram preocupação com o impacto da IA no tráfego dos sites, evidenciando a necessidade de um equilíbrio entre inovação e estratégias digitais bem estruturadas.
                </p>

                <h2>IA: Mais que uma Tendência, um Diferencial Competitivo</h2>
                <p>
                  Esses números deixam claro que a inteligência artificial não é apenas uma moda passageira. Para empresas que buscam crescimento sustentável e uma melhor conexão com seus clientes, a IA se apresenta como uma ferramenta indispensável para se destacar no mercado.
                </p>

                <h2>Descubra o Potencial da IA Generativa para o Seu Negócio</h2>
                <p>
                  Quer explorar como a IA Generativa pode impulsionar o crescimento do seu negócio? Estou à disposição para conversar e traçar estratégias personalizadas. Sou Cientista de Dados e especialista em IA Generativa, com uma trajetória que inclui mais de 15 palestras em grandes eventos para instituições como Sebrae, FIEMG, Governo de Minas Gerais, SICOOB, entre outras. Além disso, conduzi 30 workshops e acumulei mais de 400 horas de consultoria para empresas de diversos segmentos.
                </p>

                <p>
                  Acompanhe meus insights e fique por dentro das inovações que estão transformando o mundo dos negócios!
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    InteligênciaArtificial
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Inovação
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Negócios
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Tecnologia
                  </span>
                </div>
              </div>
            </article>
            
            <aside className="lg:col-span-1">
              <ArticleRecommendations currentArticleId="business-ai" />
            </aside>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default BusinessAI;