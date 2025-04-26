"use client";
import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion'; // Importando o framer-motion
import { useInView } from 'react-intersection-observer'; // Importando para detectar a visibilidade

const TechnologySection: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez
    threshold: 0.5, // Quando 50% do componente estiver visível
  });

  return (
    <section className="bg-[#1E1E1E] text-white py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Conteúdo de Texto */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Começa invisível e abaixo
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Aparece quando estiver visível
          transition={{ duration: 0.6 }} // Duração da animação
        >
          <span className="text-xs sm:text-sm uppercase text-blue-400 tracking-widest">
            Inovação & Resultado
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 leading-snug sm:leading-tight">
            Transforme suas ideias em experiências digitais incríveis
          </h2>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Conecto estratégia, design e tecnologia para criar soluções digitais que impactam, encantam e convertem.
            Seu projeto merece mais do que um site bonito — merece performance, inovação e crescimento real.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">🔥 Soluções que impulsionam seu negócio</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Desenvolvimento de interfaces intuitivas, focadas em maximizar a usabilidade e a satisfação dos seus usuários.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">📱 Design responsivo e experiência mobile-first</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Seu site adaptado para todos os dispositivos, proporcionando acesso perfeito onde quer que seu público esteja.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Imagem + frase estratégica */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }} // Começa invisível e à direita
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }} // Aparece suavemente
          transition={{ duration: 0.6, delay: 0.2 }} // Delay para a imagem aparecer um pouco depois
          className="flex flex-col items-center md:items-end"
        >
          <Image
            src="/images/code-editor.png" // ajuste o caminho conforme o seu projeto
            alt="Interface de desenvolvimento"
            width={500}
            height={320}
            className="rounded-xl shadow-2xl object-contain"
          />
          <p className="text-gray-400 text-center md:text-right mt-6 max-w-sm sm:max-w-md text-sm sm:text-base">
            Estou sempre em evolução com as principais tendências e tecnologias, para que você esteja sempre um passo à frente da concorrência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
