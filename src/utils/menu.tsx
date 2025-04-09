import { Home, Phone, Info } from "lucide-react";
import React from "react";

export type MenuItem = {
  name: string;
  link: string;
  icon?: React.ReactElement; // ← aqui você diz que "icon" é opcional e é um JSX.Element
};

export const menu: MenuItem[] = [
  {
    name: "Início",
    link: "/",
    icon: <Home />,
  },
  {
    name: "Sobre",
    link: "/sobre",
    icon: <Info />,
  },
  {
    name: "Contato",
    link: "/contato",
    icon: <Phone />,
  },
];
