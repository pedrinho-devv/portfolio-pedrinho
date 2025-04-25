// src/app/providers.tsx
"use client";

import { ModalProvider } from "@/app/context/modalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}