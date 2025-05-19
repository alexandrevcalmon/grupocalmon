import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ArticleRecommendations from '@/components/blog/ArticleRecommendations';
import { Hash } from 'lucide-react';

const MarketingAI = () => {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <Container>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="A Revolução da IA Generativa no Marketing"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                A Revolução da IA Generativa no Marketing: Transformando o Jogo da Publicidade
              </h1>
              <div className="flex items-center text-gray-500 text-sm mb-8">
                <span>10 de Janeiro, 2025</span>
                <span className="mx-2">•</span>
                <span>Alexandre Calmon</span>
              </div>
              
              <div className="prose max-w-none">
                <p className="mb-6">
                  A Inteligência Artificial Generativa está redefinindo as regras do marketing e da publicidade. Essa tecnologia inovadora permite criar campanhas tão personalizadas que chegam a dialogar de forma íntima e autêntica com cada consumidor. Estamos vivendo um momento incrível de transformação, onde a criatividade e a eficiência se unem para proporcionar experiências impactantes.
                </p>

                <h2>Campanhas que Conectam de Verdade</h2>
                <p>
                  Imagine desenvolver campanhas capazes de estabelecer uma conversa direta com o público, como aquele papo que cria uma conexão genuína. Com a IA Generativa, esse cenário já é realidade. Ferramentas avançadas como Midjourney e Animatediff estão elevando a qualidade dos conteúdos, transformando vídeos comuns em produções de tirar o fôlego e abrindo caminho para ideias antes inimagináveis.
                </p>

                <h2>Um Exemplo que Encanta</h2>
                <p>
                  Para ilustrar essa revolução, pense em um vídeo onde a versão original é comparada a duas versões geradas pela IA. O resultado é simplesmente surreal: imagens que desafiam o convencional e mostram o potencial ilimitado dessa tecnologia em transformar o marketing.
                </p>

                <h2>O Futuro do Marketing Está Aqui</h2>
                <p>
                  E o melhor de tudo? Isso é apenas o começo! As possibilidades da IA Generativa estão se multiplicando e a evolução dessa tecnologia é rápida, trazendo oportunidades únicas para quem deseja inovar e se destacar no mercado.
                </p>

                <h2>Transforme Seu Negócio com a IA Generativa</h2>
                <p>
                  Se você deseja descobrir como a IA Generativa pode revolucionar a sua estratégia de marketing, a Calmon Consultoria, Palestras e Treinamento está pronta para ajudar. Com ampla experiência, acumulada por meio de mais de 400 horas de consultoria e diversas palestras realizadas para empresas renomadas como Sebrae, FIEMG e SICOOB, podemos implementar essa revolução no seu negócio e explorar todo o potencial dessa tecnologia para criar campanhas criativas, rápidas e de alto impacto.
                </p>

                <p>
                  Entre em contato ou siga-nos para receber mais insights práticos e estratégicos sobre o futuro do marketing!
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Marketing
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    InteligênciaArtificial
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Publicidade
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Inovação
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Tecnologia
                  </span>
                </div>
              </div>
            </article>
            
            <aside className="lg:col-span-1">
              <ArticleRecommendations currentArticleId="marketing-ai" />
            </aside>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default MarketingAI;