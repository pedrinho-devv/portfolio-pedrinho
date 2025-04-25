"use client";

import { useState } from "react";
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

const categorias = ["todos", "Landing Pages", "Ecommerces", "Sites Institucionais"];

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
  <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 z-10 px-4">
    <button
      onClick={prev}
      className="bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 disabled:opacity-50"
      disabled={disabledPrev}
    >
      <ChevronLeft />
    </button>
    <button
      onClick={next}
      className="bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 disabled:opacity-50"
      disabled={disabledNext}
    >
      <ChevronRight />
    </button>
  </div>
);

export default function GaleriaProjetos() {
  const [categoriaAtual, setCategoriaAtual] = useState("todos");
  const [startIndex, setStartIndex] = useState(0);

  const imagensFiltradas =
    categoriaAtual === "todos"
      ? images
      : images.filter((img) => img.categoria === categoriaAtual);

  const imagensVisiveis = imagensFiltradas.slice(startIndex, startIndex + 3);

  const next = () => {
    if (startIndex + 3 < imagensFiltradas.length) {
      setStartIndex((prev) => prev + 3);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 3);
    }
  };

  return (
    <section className="bg-neutral-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filtros */}
        <div className="flex gap-4 justify-center mb-10 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategoriaAtual(cat);
                setStartIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                categoriaAtual === cat
                  ? "bg-white text-black"
                  : "bg-neutral-800 hover:bg-neutral-700"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Carrossel */}
        <div className="relative">
          <Navegacao
            prev={prev}
            next={next}
            disabledPrev={startIndex === 0}
            disabledNext={startIndex + 3 >= imagensFiltradas.length}
          />

          <div className="flex overflow-hidden gap-6 justify-center px-6">
            <AnimatePresence mode="wait">
              {imagensVisiveis.map((img, index) => (
                <motion.div
                  key={`${img.src}-${index}`}
                  className="min-w-[350px] max-w-[400px] rounded-2xl overflow-hidden shadow-xl bg-neutral-800 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={img.src}
                    alt={img.titulo}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
                    <p className="text-xs text-gray-400">{img.tecnologias}</p>
                    <h3 className="text-lg font-semibold">{img.titulo}</h3>
                    <p className="text-sm text-gray-300">{img.descricao}</p>
                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                      <a
                        href={img.live}
                        target="_blank"
                        className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 mb-2"
                      >
                        Demo
                      </a>
                      <a
                        href={img.repo}
                        target="_blank"
                        className="border border-white px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-700 mb-2"
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
        <div className="flex justify-center gap-2 mt-6">
          {Array.from(
            { length: Math.ceil(imagensFiltradas.length / 3) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i * 3)}
                className={`w-8 h-8 rounded-full text-sm font-medium ${
                  startIndex === i * 3
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
