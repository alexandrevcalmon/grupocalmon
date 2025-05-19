import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Blog posts data sorted by date (most recent first)
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
].sort((a, b) => new Date(b.date) - new Date(a.date));

const BlogPreview = () => {
  // Get only the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Produção intensa de conteúdo</h2>
        <p className="text-center text-gray-600 mb-12">Conheça nossos artigos sobre IA, inovação e transformação digital.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
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
                <Link to={`/blog/${post.id}`} className="text-orange-600 hover:text-orange-700 transition">
                  ler mais
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
          >
            Visualizar todos os artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;