// src/components/sections/ServicesCTA.tsx
import React from "react";
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Pronto para transformar seu negócio?
        </h2>
        <a
          href="https://calendly.com/grupocalmon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Agende uma Conversa Conosco
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;