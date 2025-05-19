import React from 'react';
import Container from '@/components/ui/Container';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ArticleRecommendations from '@/components/blog/ArticleRecommendations';
import { Hash } from 'lucide-react';

const FutureWork = () => {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <Container>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="O Futuro do Trabalho com IA"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              <h1 className="text-4xl font-bold mb-4">
                O Futuro do Trabalho com IA: Preparando-se para 2025
              </h1>
              <div className="flex items-center text-gray-500 text-sm mb-8">
                <span>15 de Dezembro, 2024</span>
                <span className="mx-2">•</span>
                <span>Alexandre Calmon</span>
              </div>
              
              <div className="prose max-w-none">
                <p className="mb-6">
                  Com a rápida evolução da Inteligência Artificial, o mercado de trabalho está passando por uma transformação sem precedentes. As mudanças que antes levariam décadas estão acontecendo em questão de meses, e profissionais de todas as áreas precisam se adaptar rapidamente para manterem-se relevantes e competitivos.
                </p>

                <h2>O Impacto da IA no Mercado de Trabalho</h2>
                <p>
                  A IA não está apenas automatizando tarefas repetitivas; está redefinindo completamente como trabalhamos. Profissões tradicionais estão evoluindo, e novas oportunidades estão surgindo. A chave para o sucesso neste novo cenário é entender como trabalhar em sinergia com a IA, aproveitando suas capacidades para aumentar nossa própria produtividade e criatividade.
                </p>

                <h2>Habilidades Essenciais para 2025</h2>
                <p>
                  Para se destacar no mercado de trabalho dos próximos anos, algumas habilidades serão fundamentais:
                </p>
                <ul>
                  <li>Pensamento crítico e resolução criativa de problemas</li>
                  <li>Capacidade de trabalhar em conjunto com IA</li>
                  <li>Adaptabilidade e aprendizado contínuo</li>
                  <li>Inteligência emocional e habilidades interpessoais</li>
                  <li>Compreensão básica de prompt engineering</li>
                </ul>

                <h2>O Papel da IA na Transformação Profissional</h2>
                <p>
                  A IA está se tornando uma ferramenta indispensável em praticamente todas as áreas. Profissionais que souberem utilizá-la estrategicamente terão vantagens significativas. Alguns exemplos de como a IA está transformando diferentes setores:
                </p>
                <ul>
                  <li>Marketing: Criação de conteúdo personalizado e análise de dados em tempo real</li>
                  <li>Saúde: Diagnósticos mais precisos e tratamentos personalizados</li>
                  <li>Educação: Aprendizado adaptativo e experiências personalizadas</li>
                  <li>Finanças: Análise de riscos e detecção de fraudes</li>
                  <li>Desenvolvimento de Produtos: Prototipagem rápida e testes automatizados</li>
                </ul>

                <h2>Preparando-se para o Futuro</h2>
                <p>
                  A melhor maneira de se preparar para o futuro do trabalho é começar agora. Algumas recomendações práticas:
                </p>
                <ul>
                  <li>Invista em capacitação contínua em IA e tecnologias emergentes</li>
                  <li>Desenvolva projetos práticos utilizando ferramentas de IA</li>
                  <li>Participe de comunidades e grupos de discussão sobre IA</li>
                  <li>Mantenha-se atualizado sobre as tendências do seu setor</li>
                  <li>Cultive habilidades humanas que a IA não pode replicar</li>
                </ul>

                <h2>Conclusão</h2>
                <p>
                  O futuro do trabalho com IA não é algo distante - está acontecendo agora. A boa notícia é que, com a preparação adequada, podemos não apenas sobreviver, mas prosperar neste novo cenário. A chave é manter uma mentalidade de crescimento, estar aberto a mudanças e ver a IA como uma aliada, não como uma ameaça.
                </p>

                <p>
                  Se você quer se aprofundar neste tema e preparar sua equipe para o futuro do trabalho com IA, entre em contato conosco. Oferecemos treinamentos e consultorias personalizadas para ajudar profissionais e empresas a navegarem com sucesso por esta transformação.
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    FuturoDoTrabalho
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    InteligênciaArtificial
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Carreira
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Tecnologia
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Hash className="h-4 w-4 mr-1" />
                    Inovação
                  </span>
                </div>
              </div>
            </article>
            
            <aside className="lg:col-span-1">
              <ArticleRecommendations currentArticleId="future-work" />
            </aside>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default FutureWork;