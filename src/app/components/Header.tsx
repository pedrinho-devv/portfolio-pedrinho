"use client";

import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MenuMobile } from "./menumobile";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-1/2 z-[50] w-full max-w-5xl -translate-x-1/2 items-center justify-between border border-white/20 px-5 py-2 backdrop-blur-md sm:mt-5 sm:w-[98%] sm:rounded-3xl md:backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-2 sm:px-3">
          <div className="flex items-center gap-3 sm:justify-center">
            <Link href="/">
              <Image
                src="/newlogo.png"
                alt="Logo"
                width={100}
                height={50}
                priority
                quality={100}
                className="w-20 h-auto sm:w-24"
              />
            </Link>
          </div>

          <nav className="flex items-center gap-10">
            {/* Menu desktop - visível apenas em xl+ */}
            <div className="hidden xl:flex items-center gap-8 uppercase text-white">
              <Link href="#Sobre" className="text-xl font-semibold transition-all duration-300 hover:text-[#00D8E0]">
                Sobre Nós
              </Link>
              <Link href="#projetos" className="text-xl font-semibold transition-all duration-300 hover:text-[#00D8E0]">
                Projetos
              </Link>
              <Link href="#info" className="text-xl font-semibold transition-all duration-300 hover:text-[#00D8E0]">
                Informação
              </Link>
              <Link href="#contato" className="text-xl font-semibold transition-all duration-300 hover:text-[#00D8E0]">
                Contato
              </Link>

              <Link
                href="https://github.com/pedrinho-devv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 px-7 py-3 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <GithubIcon />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Menu Mobile */}
      <div className="xl:hidden">
        <MenuMobile />
      </div>
    </>
  );
}
