import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  title: string;
  description: string;
}

interface BestMomentsSectionProps {
  media?: MediaItem[];
}

const defaultMedia: MediaItem[] = [
  {
    type: "image",
    url: "/images/Foto01.jpg",
    title: "Palestra Governo de Minas",
    description: "Palestra sobre IA Generativa"
  },
  {
    type: "image",
    url: "/images/Foto02.jpg",
    title: "Evento Campus Party Brasil",
    description: "Painel sobre Empreendedorismo e Inovação"
  },
  {
    type: "image",
    url: "/images/Foto03.jpg",
    title: "Palestra Sicoob",
    description: "Projeto iAiE"
  },
  {
    type: "image",
    url: "/images/Foto04.jpg",
    title: "Palestra FIEMG",
    description: "IA Generativa na Industria 4.0"
  },
  {
    type: "image",
    url: "/images/Foto05.jpg",
    title: "Workshop CDL-Divinópolis",
    description: "Capacitação em IA Generativa"
  },
  {
    type: "image",
    url: "/images/Foto06.jpg",
    title: "Palestra Sebrae-MG",
    description: "Revolução da Inteligência Artificial"
  },
  {
    type: "image",
    url: "/images/Foto07.jpg",
    title: "Capital Empreendedor - Sebrae Nacional",
    description: "Inovação e Empreendedorismo"
  },
  {
    type: "image",
    url: "/images/Foto08.jpg",
    title: "Evento Varejo +mais - Sebrae ",
    description: "Palestra sobre IA no Varejo"
  },
  {
    type: "image",
    url: "/images/Foto10.jpg",
    title: "Capacitação Empresa LocX",
    description: "WorkShop + Consultoria em IA"
  },
  {
    type: "image",
    url: "/images/Foto11.jpg",
    title: "Capacitação CDL - Divinópolis",
    description: "WorkShop + Consultoria em IA"
  },
  {
    type: "image",
    url: "/images/Foto12.jpg",
    title: "Capacitação Empresa Tricostura",
    description: "WorkShop + Consultoria em IA"
  },
  {
    type: "image",
    url: "/images/Foto13.jpg",
    title: "Capacitação Empresa Azevedo Contábil",
    description: "WorkShop + Consultoria em IA"
  },
  {
    type: "image",
    url: "/images/Foto14.jpg",
    title: "Capacitação Empresa Somar Engenharia",
    description: "WorkShop + Consultoria em IA"
  }
];

const BestMomentsSection = ({ media = defaultMedia }: BestMomentsSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-gray-50/70 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Melhores Momentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos momentos mais marcantes das nossas palestras,
            workshops e consultorias
          </p>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border-orange-200 hover:bg-orange-50 hover:text-orange-600 hidden md:flex"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory md:scrollbar-hide mobile-scrollbar"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#F97316 #F3F4F6'
            }}
          >
            {media.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-start group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border-orange-200 hover:bg-orange-50 hover:text-orange-600 hidden md:flex"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <style>{`
        .mobile-scrollbar::-webkit-scrollbar {
          height: 4px;
          background: #F3F4F6;
        }
        
        .mobile-scrollbar::-webkit-scrollbar-thumb {
          background: #F97316;
          border-radius: 4px;
        }
        
        @media (min-width: 768px) {
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>
    </section>
  );
};

export default BestMomentsSection;