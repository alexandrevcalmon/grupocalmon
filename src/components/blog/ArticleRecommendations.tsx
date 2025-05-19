import React from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
}

interface ArticleRecommendationsProps {
  currentArticleId: string;
}

const articles: Article[] = [
  {
    id: 'marketing-ai',
    title: 'A Revolução da IA Generativa no Marketing: Transformando o Jogo da Publicidade',
    date: '10 de Janeiro, 2025',
    author: 'Alexandre Calmon',
    excerpt: 'A Inteligência Artificial Generativa está redefinindo as regras do marketing e da publicidade.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'business-ai',
    title: 'A Revolução da Inteligência Artificial nos Negócios: Números que Impactam',
    date: '05 de Janeiro, 2025',
    author: 'Alexandre Calmon',
    excerpt: 'Em um cenário cada vez mais competitivo, a inteligência artificial (IA) vem se consolidando como um diferencial estratégico.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'future-work',
    title: 'O Futuro do Trabalho com IA: Preparando-se para 2025',
    date: '15 de Dezembro, 2024',
    author: 'Alexandre Calmon',
    excerpt: 'Com a rápida evolução da Inteligência Artificial, o mercado de trabalho está passando por uma transformação sem precedentes.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
];

const ArticleRecommendations: React.FC<ArticleRecommendationsProps> = ({ currentArticleId }) => {
  const recommendations = articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, 2);

  return (
    <div className="border-l border-gray-200 pl-8">
      <h2 className="text-xl font-bold mb-6">Artigos Recomendados</h2>
      <div className="space-y-8">
        {recommendations.map((article) => (
          <div key={article.id} className="group">
            <Link to={`/blog/${article.id}`} className="block">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition"
              />
              <h3 className="font-bold mb-2 group-hover:text-orange-600 transition line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.author}</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                {article.excerpt}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleRecommendations;