"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  {
    src: "/pet.png",
    categoria: "Landing Page",
    titulo: "Landing Page - Pet Shop",
    descricao: "Site responsivo para pet shop.",
    tecnologias: "Next · Tailwind · Framer Motion · TypeScript",
    live: "#",
    repo: "#",
  },
  {
    src: "/4nf.png",
    categoria: "Ecommerce",
    titulo: "E-commerce de Roupas",
    descricao: "Loja online com design responsivo.",
    tecnologias: "Typescript · React · Tailwind · shadcn/ui",
    live: "#",
    repo: "#",
  },
  {
    src: "/cintia.jpg",
    categoria: "Landing Page",
    titulo: "Landing Page - Advocacia",
    descricao: "Site responsivo para escritório de advocacia.",
    tecnologias: "Next · Tailwind · Framer Motion · TypeScript · shadcn/ui",
    live: "#",
    repo: "#",
  },
];

export default function GaleriaProjetos() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (startIndex + itemsPerSlide < images.length) {
      setDirection(1);
      setStartIndex((prev) => prev + itemsPerSlide);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex((prev) => prev - itemsPerSlide);
    }
  };

  const imagensVisiveis = images.slice(startIndex, startIndex + itemsPerSlide);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projetos"
      className="bg-neutral-950 text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="relative w-full text-center py-16">
          <h2 className="text-6xl md:text-8xl font-bold text-white/10 absolute inset-0 flex items-center justify-center select-none">
            Projetos
          </h2>
          <h3 className="relative text-3xl md:text-5xl font-semibold z-10">
            Meus
          </h3>
        </div>

        {/* Carrossel com navegação lateral */}
        <div className="relative min-h-[620px] md:min-h-[540px]">
          {/* Botões laterais */}
          <button
            onClick={prev}
            className="absolute left-2 top-[35%] bg-white/20 text-white backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white/40 transition disabled:opacity-30"
            disabled={startIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-[35%] bg-white/20 text-white backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white/40 transition disabled:opacity-30"
            disabled={startIndex + itemsPerSlide >= images.length}
          >
            <ChevronRight size={24} />
          </button>

          {/* Slides */}
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={startIndex}
                className="flex gap-8 justify-center flex-wrap"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {imagensVisiveis.map((img, index) => (
                  <div
                    key={`${img.src}-${index}`}
                    className="bg-neutral-800 rounded-2xl overflow-hidden shadow-xl flex flex-col w-full sm:max-w-[380px] md:max-w-[460px] transition-all"
                  >
                    <img
                      src={img.src}
                      alt={img.titulo}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 flex flex-col justify-between h-full gap-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          {img.categoria}
                        </p>
                        <h3 className="text-xl font-bold mt-1">{img.titulo}</h3>
                        <p className="text-sm text-gray-300 mt-2">
                          {img.descricao}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400">{img.tecnologias}</p>
                      <div className="flex gap-4 flex-wrap justify-center mt-4">
                        <a
                          href={img.live}
                          target="_blank"
                          className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
                        >
                          Demo
                        </a>
                        <a
                          href={img.repo}
                          target="_blank"
                          className="border border-white px-5 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition"
                        >
                          Repositório
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Paginadores */}
        <div className="flex justify-center gap-3 mb-10">
          {Array.from(
            { length: Math.ceil(images.length / itemsPerSlide) },
            (_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i * itemsPerSlide > startIndex ? 1 : -1);
                  setStartIndex(i * itemsPerSlide);
                }}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition ${
                  startIndex === i * itemsPerSlide
                    ? "bg-white text-black"
                    : "bg-neutral-700 hover:bg-neutral-600"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
