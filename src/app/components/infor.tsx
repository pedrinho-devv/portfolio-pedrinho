"use client";
import Image from "next/image";
import { FC } from "react";

const TechnologySection: FC = () => {
  return (
    <section className="bg-[#1E1E1E] text-white py-16 px-4 sm:px-6 md:px-16 rounded-tl-lg rounded-tr-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs sm:text-sm uppercase text-blue-400 tracking-widest">
            Inovação & Resultado
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 leading-snug sm:leading-tight">
            Transforme suas ideias em experiências digitais incríveis
          </h2>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Conecto estratégia, design e tecnologia para criar soluções digitais
            que impactam, encantam e convertem. Seu projeto merece mais do que
            um site bonito — merece performance, inovação e crescimento real.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                🔥 Soluções que impulsionam seu negócio
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Desenvolvimento de interfaces intuitivas, focadas em maximizar a
                usabilidade e a satisfação dos seus usuários.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                📱 Design responsivo e experiência mobile-first
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Seu site adaptado para todos os dispositivos, proporcionando
                acesso perfeito onde quer que seu público esteja.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <Image
            src="/images/code-editor.png"
            alt="Interface de desenvolvimento"
            width={500}
            height={320}
            className="rounded-xl shadow-2xl object-contain"
          />
          <p className="text-gray-400 text-center md:text-right mt-6 max-w-sm sm:max-w-md text-sm sm:text-base">
            Estou sempre em evolução com as principais tendências e tecnologias,
            para que você esteja sempre um passo à frente da concorrência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
