import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Calmon</span>
            </div>
            <p className="text-gray-400">
              Transformando negócios através da inovação e desenvolvimento humano com
              palestras e treinamentos de alto impacto.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition">Sobre</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-orange-500 transition">Palestras</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-orange-500 transition">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <span>(11) 98130-0027</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <span>contato@grupocalmon.com.br</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Calmon Consultoria, Palestras e Treinamentos - CNPJ: 47.350.455/0001-09. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;