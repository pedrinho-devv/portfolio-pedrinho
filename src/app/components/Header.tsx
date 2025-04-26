"use client";

import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MenuMobile } from "./menumobile";

export default function Header() {
  return (
    <header className="fixed right-1/2 z-[50] mx-auto flex w-full max-w-5xl translate-x-1/2 items-center justify-between border border-white/20 px-5 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-[1.009] sm:mt-5 sm:w-[98%] sm:rounded-3xl md:backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-2 sm:px-3">
        <div className="flex items-center gap-3">
          <Link href="#">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={100} // largura real da imagem ou algo aproximado
              height={50} // altura real da imagem ou algo aproximado
              priority
              quality={100}
              className="w-20 h-auto sm:w-24"
            />
          </Link>
        </div>

        <nav className="flex items-center gap-10">
          {/* Menu desktop - visível apenas em xl+ */}
          <div className="hidden items-center gap-8 uppercase text-white xl:flex">
            <a
              href="#sobre"
              className="duration-400 text-xl font-semibold transition-all hover:text-[#00D8E0]"
            >
              Sobre Nós
            </a>
            <a
              href="#projects"
              className="duration-400 text-xl font-semibold transition-all hover:text-[#00D8E0]"
            >
              Projetos
            </a>
            <a
              href="#depoimentos"
              className="duration-400 text-xl font-semibold transition-all hover:text-[#00D8E0]"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="duration-400 text-xl font-semibold transition-all hover:text-[#00D8E0]"
            >
              Contato
            </a>
            <div className="bg-[#00D8E0] px-9 py-3 rounded-2xl hover:bg-transparent hover:border hover:border-[#00D8E0] hover:text-[#00D8E0] transition-all duration-300 cursor-pointer">
              <GithubIcon />
            </div>
          </div>

          {/* Menu mobile - visível abaixo de xl */}
          <div className="xl:hidden">
            <MenuMobile />
          </div>
        </nav>
      </div>
    </header>
  );
}
