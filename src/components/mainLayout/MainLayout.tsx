"use client";

import { ReactNode, useState } from "react";
import { Header } from "./header/Header";
import { Menu } from "./menu/Menu";
import { BottomElements } from "./bottomElements/BottomElements";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-shaoBlack">
      <Menu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {children}
      <BottomElements />
    </div>
  );
};
