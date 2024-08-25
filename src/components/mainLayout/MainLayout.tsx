"use client";

import { ReactNode, useState } from "react";
import { Header } from "./header/Header";
import { Menu } from "./menu/Menu";
import { Footer } from "./footer/Footer";
import { BottomElements } from "./bottomElements/BottomElements";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-screen h-screen bg-shaoBlack">
      <Menu menuOpen={menuOpen} />
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {children}
      <BottomElements />
      <Footer />
    </div>
  );
};
