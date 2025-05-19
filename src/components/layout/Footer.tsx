import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants/company';
import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="images/logogrupocalmonfundobranco10.png" 
                alt="Grupo Calmon" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Transformando negócios através da inovação e desenvolvimento humano com
              palestras e treinamentos de alto impacto.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                <span>
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name} - CNPJ: {COMPANY_INFO.cnpj}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;