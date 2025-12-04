import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * slides: [{ title, description, image, reverse }]
 */
export default function HeroCarousel({ slides, interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(nextSlide, interval);
    return () => clearInterval(t);
  }, [interval]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-300 to-white py-12">
      {slides.map((slide, index) => {
        const isActive = index === current;

        return (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center px-6 transition-opacity duration-700 ${
              isActive ? "opacity-100 relative" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Container que mantiene layout y se invierte con md:flex-row-reverse */}
            <div
              className={`max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 ${
                slide.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Texto */}
              <div
                className={`flex-1 text-black text-center md:text-left ${
                  slide.reverse ? "md:text-right md:pr-8" : "md:pl-8"
                }`}
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-800">
                  {slide.description}
                </p>
              </div>

              {/* Imagen */}
              <div
                className={`flex-1 flex justify-center md:justify-end ${
                  slide.reverse ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-md md:max-w-lg object-contain"
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Flechas */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10"
        aria-label="Siguiente"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-[#FCA311] w-5" : "bg-white/70"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
