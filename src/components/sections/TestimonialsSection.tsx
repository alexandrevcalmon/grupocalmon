import React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
import { TESTIMONIALS as defaultTestimonials } from "../../data/testimonials";
import Button from "../ui/Button";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-orange-100 to-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Depoimentos de quem já experimentou nossos serviços
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border-orange-200 hover:bg-orange-50 hover:text-orange-600 hidden md:flex testimonial-prev"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Swiper
            modules={[Pagination, EffectFade, Navigation]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-orange-500',
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            className="testimonials-swiper"
          >
            {defaultTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
                  <div className="flex flex-col items-center">
                    <Quote className="w-12 h-12 text-orange-500 mb-8 flex-shrink-0" />
                    
                    <div className="w-full mb-8 min-h-[200px] flex items-center">
                      <p className="text-lg md:text-xl text-gray-600 text-center">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                          draggable="false"
                        />
                      </div>

                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-orange-600">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-600">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border-orange-200 hover:bg-orange-50 hover:text-orange-600 hidden md:flex testimonial-next"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe 
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/37Y33WdmQ8o"
              title="Depoimentos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-swiper {
          padding-bottom: 3rem !important;
        }
        
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(0, 0, 0, 0.2);
          opacity: 0.5;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f97316 !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;