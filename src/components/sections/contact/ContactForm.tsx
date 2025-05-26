import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Youtube } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants/company';

const ContactForm = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Envie sua mensagem</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition flex items-center justify-center"
              >
                Enviar mensagem
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Informações de Contato</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
             
              {/* Social Media */}
              <div className="pt-8">
                <h3 className="font-semibold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href={COMPANY_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-gray-600" />
                  </a>
                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-gray-600" />
                  </a>
                  <a
                    href={COMPANY_INFO.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;