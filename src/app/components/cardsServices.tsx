"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Pre from "../../../public/laptop.png";
import Prev2 from "../../../public/pet.png";
import Prev3 from "../../../public/4nf.png";

export default function HomePage() {
  const projetosLaterais = [
    { title: "Projeto 3", image: Prev2 },
    { title: "Projeto 4", image: Pre },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Projeto Principal com imagem ocupando o espaço corretamente */}
          <motion.a
            href="#"
            className="group relative col-span-1 xl:col-span-2 rounded-2xl border border-neutral-800 bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] shadow-lg hover:scale-[1.01] transition h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full min-h-[500px]">
              <Image
                src={Prev3}
                alt="Projeto Destaque"
                fill
                className="object-cover group-hover:scale-110 transition-all duration-500 rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white text-2xl font-semibold">Ver Projeto →</p>
            </div>
          </motion.a>

          {/* Miniaturas laterais */}
          <div className="grid grid-cols-1 gap-6">
            {projetosLaterais.map((projeto, i) => (
              <motion.a
                key={i}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] shadow-lg hover:scale-[1.02] transition"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
                  <Image
                    src={projeto.image}
                    alt={projeto.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-500 rounded-2xl"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-lg font-semibold">Ver Projeto →</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
