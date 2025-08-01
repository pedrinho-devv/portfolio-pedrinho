"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn } from "../../lib/variants";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Se largura for 768px ou menos, é mobile
    };

    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    checkMobile(); // Rodar uma vez ao carregar

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-32 sm:pt-48">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <div className="absolute inset-0 bg-gradient-to-tr from-black to-black/10 z-0" />

      {/* Ponteiro personalizado (só aparece se NÃO for mobile) */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 z-50 w-6 h-6 bg-white rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      )}

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto mb-16 w-full max-w-7xl px-5 sm:mb-32 xl:px-0 flex flex-col items-start gap-20">
        <motion.div className="flex max-w-[620px] flex-col gap-10">
          <div className="flex w-full flex-col gap-5">
            <motion.h1
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              className="max-w-[320px] text-[32px] font-bold leading-tight text-white sm:max-w-[422px] sm:text-5xl mt-10"
            >
              PEDRO AUGUSTO
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              className="max-w-[530px] text-lg text-[#CBCACA] sm:text-[26px] md:leading-tight"
            >
              Desenvolvedor Web e UX|UI Design pronto para transformar suas
              ideias em realidade.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="flex gap-4"
          >
            <a
              href="https://wa.me/5586981827011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-[#00D8E0] px-4 py-3 text-center text-sm font-bold uppercase text-[#00D8E0] transition-all duration-300 hover:scale-105 sm:text-base"
            >
              Contato
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-augusto-sousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 px-4 py-3 text-center text-sm font-bold uppercase text-white transition-all duration-300 hover:scale-105 sm:text-base"
            >
              Linkedin
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;