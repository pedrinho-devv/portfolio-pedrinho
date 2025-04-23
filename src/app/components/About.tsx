"use client";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Github } from "lucide-react";
import Image from "next/image";
import About from "../../../public/photoabout.jpg";

export default function ProfileCard() {
  return (
    <section className="min-h-screen w-full bg-[#0e0e0e] text-white py-20 px-4">
     
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Card da Esquerda */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full md:w-1/2 shadow-lg">
          <div className="overflow-hidden rounded-xl mb-6">
            <Image
              src={About}
              alt="Pedro Augusto"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>

          <p className="text-green-400 text-sm mb-2">
            ● Disponível para Projetos
          </p>
          <h2 className="text-2xl font-semibold">Olá, eu sou o Pedro Augusto</h2>
          <p className="text-white/60 text-sm mb-4">
            Programador e UX|UI Designer do Piauí
          </p>

          {/* Ícones sociais */}
          <div className="flex gap-4 my-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <Github className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-blue-400" />
          </div>

          <Button className="w-full mt-4 bg-white text-black hover:bg-white/90">
            Entre em Contato
          </Button>
        </div>

        {/* Card da Direita */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full md:w-1/2 shadow-lg">
          <p className="text-white/80 mb-4">
            Sou Pedro Augusto, desenvolvedor Front-End apaixonado por
            transformar ideias em interfaces funcionais e intuitivas. Utilizo
            tecnologias modernas para entregar experiências digitais completas,
            com foco em performance, design responsivo e usabilidade. Cada
            projeto é uma oportunidade de unir criatividade e técnica para criar
            soluções eficientes e impactantes.
          </p>

          {/* Tags de skills */}
          <div className="flex flex-wrap gap-2 mb-6">
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
                className="bg-[#2c2c2c] text-white"
                key={skill}
              >
                {skill}
              </Button>
            ))}
          </div>

          {/* Experiências */}
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
                className="flex justify-between py-3 text-sm text-white/80"
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
