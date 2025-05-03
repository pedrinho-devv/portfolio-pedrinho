"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Image, User,Phone} from "lucide-react";

// Definindo os itens de navegação
const navItems = [
  { href: "/", icon: <Home size={24} />, label: "Home" },
  { href: "#projetos", icon: <Image size={24} />, label: "Projetos" },
  { href: "#sobre", icon: <User size={24} />, label: "Sobre" },
  { href: "#contato", icon: <Phone size={24} />, label: "Contato" },
];

export const MenuMobile = () => {
  const pathname = usePathname(); // Obtém o caminho atual da URL

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-around rounded-t-3xl bg-zinc-900 bg-opacity-80 backdrop-blur-md px-6 py-3 shadow-lg sm:hidden">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center text-white ${
            pathname === item.href ? "text-cyan-400" : "text-white"
          }`}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};
