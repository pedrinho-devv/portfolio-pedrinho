// components/ContactSection.tsx
import { FC } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/../public/Logo.png";

const ContactSection: FC = () => {
  return (
    <section id="contato" className="bg-[#1E1E1E] text-white pt-24 pb-0 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-16">
        {/* Título */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Vamos nos conectar
          </h2>
          <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-3xl">
            Me chama em qualquer rede abaixo. Vamos tirar sua ideia do papel com
            estratégia e performance.
          </p>
        </div>

        {/* Botão de Contato */}
        <div>
          <Link
            href="https://wa.me/5586981827011"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-300">
              Falar comigo
            </button>
          </Link>
        </div>

        {/* Linha e Redes */}
        <div className="relative w-full flex flex-col items-center">
          {/* Linha */}
          <div className="absolute top-1/2 mt-30 w-full h-px bg-gray-700"></div>

          {/* Ícones */}
          <div className="flex flex-wrap justify-center gap-12 z-10 mt-8">
            <a
              href="https://www.instagram.com/pedrinho.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 transition-all duration-300"
            >
              <span className="text-4xl group-hover:text-pink-500 group-hover:scale-125 transition-transform duration-300">
                <FaInstagram />
              </span>
              <span className="text-sm text-gray-400 group-hover:text-white">
                Instagram
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-augusto-sousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 transition-all duration-300"
            >
              <span className="text-4xl group-hover:text-blue-400 group-hover:scale-125 transition-transform duration-300">
                <FaLinkedin />
              </span>
              <span className="text-sm text-gray-400 group-hover:text-white">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/pedrinho-devv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 transition-all duration-300"
            >
              <span className="text-4xl group-hover:text-gray-200 group-hover:scale-125 transition-transform duration-300">
                <FaGithub />
              </span>
              <span className="text-sm text-gray-400 group-hover:text-white">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24  py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src={footerLogo} // ajuste para o seu caminho real da logo
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Pedro Augusto. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
