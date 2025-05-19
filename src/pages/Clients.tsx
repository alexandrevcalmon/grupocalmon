import React from 'react';
import { Star } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';

const clientLogos = [
  { id: 1, name: 'SEBRAE', className: 'logo-sebrae', path: 'images/logosebrae.png' },
  { id: 2, name: 'FIEMG', className: 'logo-fiemg', path: 'images/logofiemg.png' },
  { id: 3, name: 'Invest Minas', className: 'logo-investminas', path: 'images/logoinvestminas.png' },
  { id: 4, name: 'ACIUB', className: 'logo-aciub', path: 'images/logoaciub.png' },
  { id: 5, name: 'Azevedo', className: 'logo-azevedo', path: 'images/logoazevedo.png' },
  { id: 6, name: 'Núcleo Endoscopia', className: 'logo-nucleo', path: 'images/logonucleoendoscopia.png' },
  { id: 7, name: 'Locx', className: 'logo-locx', path: 'images/logolocx.png' },
  { id: 8, name: 'Tricostura', className: 'logo-tricostura', path: 'images/logotricostura.png' },
];

const Clients = () => {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">Nossos Clientes</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Conheça algumas das empresas que confiam em nossa expertise para
              suas transformações digitais e desenvolvimento humano.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clientLogos.map((client) => (
                <div key={client.id} className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
                  <img 
                    src={client.path}
                    alt={`Logo ${client.name}`} 
                    className={`w-[200px] h-[100px] object-contain ${client.className}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper delay={0.4}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Precisávamos de alguém que sensibilizasse nossos colaboradores sobre a importância da inteligência artificial na rotina de negócios e como ela pode ser uma aliada na nossa produtividade. A palestra do Alexandre superou as expectativas, pois, nas semanas seguintes, identificamos comportamentos dos colaboradores voltados para evolução e busca por ferramentas de IA para melhorar os resultados"
                </p>
                <div className="flex items-center">
                  <img
                    src="images/leonardobarbosa.png"
                    alt="Leonardo Barbosa"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">Leonardo Barbosa</h4>
                    <p className="text-gray-500">Consultor de RH - Invest Minas</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "A capacitação e consultoria individual conduzidas pelo Calmon elevaram significativamente a produtividade de nossa equipe aqui na LocX. Os 36 colaboradores que participaram do treinamento em Inteligência Artificial Generativa agora conseguem produzir conteúdos muito mais relevantes e estabelecer uma comunicação mais assertiva com nossos clientes e parceiros. O resultado foi imediato: passamos a entregar soluções mais eficientes e personalizadas, posicionando a LocX de maneira estratégica para 2024. Sem dúvida, a expertise do Calmon foi fundamental para o nosso crescimento e sucesso."
                </p>
                <div className="flex items-center">
                  <img
                    src="images/paulolocx.jpg"
                    alt="Paulo Henrique"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">Paulo Henrique</h4>
                    <p className="text-gray-500">CEO, LocX</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "As palestras realizadas pelo cientista de dados Alexandre Calmon nas cidades de Itaúna, Carmópolis de Minas e Pará de Minas, no evento Varejo + Experience, organizado pelo Sebrae-MG em 2024, foram um sucesso! Recebemos feedbacks incríveis dos participantes, com uma média de 600 pessoas por palestra. Todos saíram elogiando, inspirados e preparados para explorar a IA Generativa em seus negócios."
                </p>
                <div className="flex items-center">
                  <img
                    src="images/fredsebrae.png"
                    alt="Frederico"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">Frederico</h4>
                    <p className="text-gray-500">Coordenador, Sebrae-MG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default Clients;