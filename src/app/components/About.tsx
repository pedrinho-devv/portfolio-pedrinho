"use client";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Github, BadgeCheck } from "lucide-react";
import Image from "next/image";
import About from "../../../public/photoabout.jpg";
import { useInView } from "react-intersection-observer";

export default function ProfileCard() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="sobre" className="min-h-screen w-full bg-[#0e0e0e] text-white py-24 px-8">
      <section ref={ref} className="text-center py-20 text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sm text-white backdrop-blur-sm shadow-md mb-4">
          <BadgeCheck className="w-4 h-4 text-white" />
          Programador e UX|UI Designer
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Pedro Augusto,{" "}
          <span className="text-neutral-400">Seu desenvolvedor</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Tornando suas ideias realidade com design e desenvolvimento de alta
          qualidade.
        </p>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div
          ref={ref}
          className="bg-[#1a1a1a] rounded-3xl p-8 w-full md:w-1/2 shadow-2xl"
        >
          <div className="overflow-hidden rounded-3xl mb-8">
            <Image
              src={About}
              alt="Pedro Augusto"
              width={700}
              height={700}
              className="rounded-3xl"
            />
          </div>

          <p className="text-green-400 text-base mb-3">
            <span className="blink glow">●</span> Disponível para Projetos
          </p>

          <h2 className="text-3xl font-semibold">
            Olá, eu sou o Pedro Augusto
          </h2>
          <p className="text-white/70 text-lg mb-6">
            Programador e UX|UI Designer do Piauí
          </p>

          <div className="flex gap-6 my-6">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
            <Github className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-blue-400" />
          </div>

          <a
            href="https://wa.me/5586981827011"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full mt-6 bg-white text-black hover:bg-white/90 text-xl py-7">
              Entre em Contato
            </Button>
          </a>
        </div>

        <div
          ref={ref}
          className="bg-[#1a1a1a] rounded-3xl p-8 w-full md:w-1/2 shadow-2xl"
        >
          <p className="text-white/80 mb-6 text-lg">
            Sou Pedro Augusto, desenvolvedor Front-End apaixonado por
            transformar ideias em interfaces funcionais e intuitivas. Utilizo
            tecnologias modernas para entregar experiências digitais completas,
            com foco em performance, design responsivo e usabilidade. Cada
            projeto é uma oportunidade de unir criatividade e técnica para criar
            soluções eficientes e impactantes.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {[
              "UI Design",
              "UX Design",
              "Programador",
              "Designer",
              "Branding",
              "Webflow",
            ].map((skill) => (
              <Button
                variant="secondary"
                className="bg-[#2c2c2c] text-white text-lg px-6 py-3"
                key={skill}
              >
                {skill}
              </Button>
            ))}
          </div>

          <div className="divide-y divide-white/10">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Shadcn UI",
              "Figma",
              "Framer Motion",
            ].map((tech, i) => (
              <div
                key={i}
                className="flex justify-between py-4 text-base text-white/80"
              >
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
