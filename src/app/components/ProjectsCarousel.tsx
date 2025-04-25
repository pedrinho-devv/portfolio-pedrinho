"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  {
    src: "/pre1.jpg",
    categoria: "cozinha",
    titulo: "Projeto Cozinha Moderna",
    descricao:
      "Uma cozinha planejada com iluminação natural e elementos sofisticados.",
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

const Navegacao = ({
  prev,
  next,
  disabledPrev,
  disabledNext,
}: {
  prev: () => void;
  next: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
}) => (
  <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 z-10 px-6">
    <button
      onClick={prev}
      className="bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-200 disabled:opacity-50"
      disabled={disabledPrev}
    >
      <ChevronLeft size={32} />
    </button>
    <button
      onClick={next}
      className="bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-200 disabled:opacity-50"
      disabled={disabledNext}
    >
      <ChevronRight size={32} />
    </button>
  </div>
);

export default function GaleriaProjetos() {
  const [startIndex, setStartIndex] = useState(0);

  const imagensVisiveis = images.slice(startIndex, startIndex + 2); // Agora, 2 imagens por vez no desktop

  const next = () => {
    if (startIndex + 2 < images.length) {
      setStartIndex((prev) => prev + 2); // Avança de 2 em 2
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 2); // Retrocede de 2 em 2
    }
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
          <Navegacao
            prev={prev}
            next={next}
            disabledPrev={startIndex === 0}
            disabledNext={startIndex + 2 >= images.length} // Verifica para 2 itens
          />

          <div className="flex overflow-hidden gap-8 justify-center px-6">
            <AnimatePresence mode="wait">
              {imagensVisiveis.map((img, index) => (
                <motion.div
                  key={`${img.src}-${index}`}
                  className="min-w-[350px] lg:min-w-[450px] max-w-[500px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-800 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Paginadores */}
        <div className="flex justify-center gap-4 mt-8">
          {Array.from({ length: Math.ceil(images.length / 2) }, (_, i) => (  // Agora 2 itens por vez
            <button
              key={i}
              onClick={() => setStartIndex(i * 2)}
              className={`w-10 h-10 rounded-full text-lg font-medium ${
                startIndex === i * 2
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
