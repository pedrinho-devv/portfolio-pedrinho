"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  {
    src: "/pre1.jpg",
    categoria: "cozinha",
    titulo: "Projeto Cozinha Moderna",
    descricao: "Uma cozinha planejada com iluminação natural e elementos sofisticados.",
    tecnologias: "React · Tailwind",
    live: "#",
    repo: "#",
  },
  {
    src: "/pre1.jpg",
    categoria: "banheiro",
    titulo: "Banheiro Contemporâneo",
    descricao: "Design funcional com foco em minimalismo e conforto.",
    tecnologias: "Next.js · SCSS",
    live: "#",
    repo: "#",
  },
  {
    src: "/pre1.jpg",
    categoria: "sala",
    titulo: "Sala Estilo Industrial",
    descricao: "Ambiente com referências industriais e acabamento moderno.",
    tecnologias: "Vue · Tailwind",
    live: "#",
    repo: "#",
  },
  {
    src: "/pre1.jpg",
    categoria: "cozinha",
    titulo: "Cozinha Clean",
    descricao: "Combinação de branco e madeira para uma atmosfera leve.",
    tecnologias: "HTML · CSS",
    live: "#",
    repo: "#",
  },
  {
    src: "/pre1.jpg",
    categoria: "sala",
    titulo: "Sala Rústica Moderna",
    descricao: "Texturas naturais e elementos decorativos acolhedores.",
    tecnologias: "React · Styled Components",
    live: "#",
    repo: "#",
  },
];

export default function GaleriaProjetos() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const [direction, setDirection] = useState(0); // <- novo para saber se está indo para frente ou trás

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const next = () => {
    if (startIndex + itemsPerSlide < images.length) {
      setDirection(1); // Indo para frente
      setStartIndex((prev) => prev + itemsPerSlide);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setDirection(-1); // Indo para trás
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
    <section className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="relative w-full text-center py-24">
          <h2 className="text-7xl md:text-9xl font-bold text-white/10 absolute inset-0 flex items-center justify-center select-none">
            Projetos
          </h2>
          <h3 className="relative text-4xl md:text-6xl font-semibold text-white z-10">
            Meus
          </h3>
        </div>

        {/* Carrossel */}
        <div className="relative">
          {/* Navegação */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 z-10 px-6">
            <button
              onClick={prev}
              className="bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-200 disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={next}
              className="bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-200 disabled:opacity-50"
              disabled={startIndex + itemsPerSlide >= images.length}
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="flex overflow-hidden gap-8 justify-center px-6 relative min-h-[600px]">
            <AnimatePresence custom={direction} mode="wait">
              {imagensVisiveis.map((img, index) => (
                <motion.div
                  key={`${img.src}-${index}-${startIndex}`} // adiciona startIndex para forçar re-render
                  className="absolute top-0"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <div className="min-w-[300px] md:min-w-[450px] max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl bg-neutral-800 flex flex-col cursor-grab active:cursor-grabbing">
                    <img
                      src={img.src}
                      alt={img.titulo}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                      <p className="text-sm text-gray-400">{img.tecnologias}</p>
                      <h3 className="text-xl font-semibold">{img.titulo}</h3>
                      <p className="text-lg text-gray-300">{img.descricao}</p>
                      <div className="flex gap-4 mt-6 flex-wrap justify-center">
                        <a
                          href={img.live}
                          target="_blank"
                          className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 mb-2"
                        >
                          Demo
                        </a>
                        <a
                          href={img.repo}
                          target="_blank"
                          className="border border-white px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-700 mb-2"
                        >
                          Repositório
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Paginadores */}
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: Math.ceil(images.length / itemsPerSlide) }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i * itemsPerSlide > startIndex ? 1 : -1);
                setStartIndex(i * itemsPerSlide);
              }}
              className={`w-10 h-10 rounded-full text-lg font-medium ${
                startIndex === i * itemsPerSlide
                  ? "bg-white text-black"
                  : "bg-neutral-700 hover:bg-neutral-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
