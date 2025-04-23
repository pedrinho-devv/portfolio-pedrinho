"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { menu } from "@/utils/menu";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useModal } from "../context/modalContext";

export const MenuMobile = () => {
  const { setIsModalOpen } = useModal();
  const [open, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center justify-center gap-3 xl:hidden"
      >
        <Menu className="text-white" size={35} />
      </div>

      {open &&
        createPortal(
          <AnimatePresence mode="wait">
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed left-0 top-0 z-[1001] h-screen w-full bg-black/50 "
              />
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                    type: "spring",
                  },
                }}
                exit={{
                  opacity: 0,
                  x: 100,
                  transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
                }}
                className="fixed right-0 top-0 z-[100] flex h-screen w-[80%] flex-col border-l border-gray-200/20 bg-zinc-800/90 text-white backdrop-blur-[5px] md:w-2/3 md:backdrop-blur-xl"
              >
                <X
                  size={30}
                  className="m-4 cursor-pointer self-end"
                  onClick={() => setIsOpen(false)}
                />
                <div className="flex h-full flex-col items-center gap-8 text-white">
                  <Link
                    href="/"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Image
                      width={80}
                      height={40}
                      src="/logo.png"
                      alt="Logo"
                      className="w-32"
                    />
                  </Link>
                  <div className="my-5 flex flex-col gap-8">
                    <p
                      onClick={() => {
                        setIsOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="cursor-pointer rounded-lg bg-gradient-to-r bg-[#00D8E0] px-5 py-4 text-xl font-medium uppercase text-white xl:flex"
                    >
                      Faça seu orçamento
                    </p>
                    <ul className="flex flex-col gap-4 text-left text-xl font-semibold text-white">
                      {menu.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.link}
                            className="flex items-center justify-center gap-2 rounded-xl p-2 text-2xl text-white duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {!!item.icon && item.icon}
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-9 flex flex-col items-center gap-10">
                    <p className="text-center max-w-[320px] text-2xl font-medium text-white sm:max-w-full sm:font-bold">
                      @2025 Pedro de Sousa
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
