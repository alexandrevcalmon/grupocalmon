export interface Testimonial {
  author: string;
  role: string;
  image: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Leonardo Barbosa",
    role: "Consultor de RH - Invest Minas",
    image: "/images/leonardobarbosa.png",
    text: "Precisávamos de alguém que sensibilizasse nossos colaboradores sobre a importância da inteligência artificial na rotina de negócios..."
  },
  {
    author: "Paulo Henrique",
    role: "CEO, LocX",
    image: "/images/paulolocx.jpg",
    text: "A capacitação e consultoria individual conduzidas pelo Calmon elevaram significativamente a produtividade de nossa equipe aqui na LocX..."
  },
  {
    author: "Frederico",
    role: "Coordenador, Sebrae-MG",
    image: "/images/fredsebrae.png",
    text: "As palestras realizadas pelo cientista de dados Alexandre Calmon nas cidades de Itaúna, Carmópolis de Minas e Pará de Minas..."
  },
  {
    author: "Karla Martins",
    role: "Consultora de Clínicas Médicas",
    image: "/images/karlamartins.png",
    text: "Esta capacitação do Calmon foi um marco para o meu trabalho como consultora de clínicas médicas..."
  }
];