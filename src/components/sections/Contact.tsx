import React from 'react';
import { ArrowRight, Globe, Mail, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants/company';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
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
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition flex items-center justify-center"
              >
                Enviar mensagem
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <Globe className="h-5 w-5 mr-3 text-orange-600" />
                Brasil
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3 text-orange-600" />
                {COMPANY_INFO.email}
              </p>
              <p className="flex items-center text-gray-600">
                <Building2 className="h-5 w-5 mr-3 text-orange-600" />
                {COMPANY_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;