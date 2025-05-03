"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Pre from "../../../public/pre1.jpg";

export default function HomePage() {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Projeto Principal */}
          <motion.a
            href="#"
            className="group relative col-span-1 xl:col-span-2 overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] shadow-lg hover:scale-[1.01] transition"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src={Pre}
                alt="Projeto Destaque"
                fill
                className="object-cover group-hover:scale-110 transition-all duration-500 rounded-2xl"
              />
            </div>

            {/* Texto "Ver Projeto" aparece no hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white text-2xl font-semibold">Ver Projeto →</p>
            </div>
          </motion.a>

          {/* Miniaturas laterais */}
          <div className="grid grid-cols-1 gap-6">
            {["Projeto 2", "Projeto 3"].map((title, i) => (
              <motion.a
                key={i}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] shadow-lg hover:scale-[1.02] transition"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
                  <Image
                    src={Pre}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-500 rounded-2xl"
                  />
                </div>

                {/* Texto "Ver Projeto" só no hover para os pequenos */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-lg font-semibold">
                    Ver Projeto →
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
