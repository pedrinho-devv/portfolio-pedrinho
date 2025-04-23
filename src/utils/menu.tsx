import { Home, Phone, Info } from "lucide-react";
import React from "react";

export type MenuItem = {
  name: string;
  link: string;
  icon?: React.ReactElement; 
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
