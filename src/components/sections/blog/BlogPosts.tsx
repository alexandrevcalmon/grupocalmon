import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'marketing-ai',
    title: 'A Revolução da IA Generativa no Marketing: Transformando o Jogo da Publicidade',
    date: '10 de Janeiro, 2025',
    author: 'Alexandre Calmon',
    excerpt: 'A Inteligência Artificial Generativa está redefinindo as regras do marketing e da publicidade. Essa tecnologia inovadora permite criar campanhas tão personalizadas que chegam a dialogar de forma íntima e autêntica com cada consumidor.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'business-ai',
    title: 'A Revolução da Inteligência Artificial nos Negócios: Números que Impactam',
    date: '05 de Janeiro, 2025',
    author: 'Alexandre Calmon',
    excerpt: 'Em um cenário cada vez mais competitivo, a inteligência artificial (IA) vem se consolidando como um diferencial estratégico para empresas que desejam inovar e conquistar melhores resultados.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'future-work',
    title: 'O Futuro do Trabalho com IA: Preparando-se para 2025',
    date: '15 de Dezembro, 2024',
    author: 'Alexandre Calmon',
    excerpt: 'Com a rápida evolução da Inteligência Artificial, o mercado de trabalho está passando por uma transformação sem precedentes. Descubra como se preparar para as mudanças que estão por vir.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
];

const BlogPosts = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-orange-600 transition">
                    {post.title}
                  </Link>
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
                >
                  Ler mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;