import React, { FC } from "react";
import s from "./Navbar.module.css";
import NavbarRoot from "./NavbarRoot";
import cn from "classnames";
import SidebarMobile from "./SidebarMobile";
import { MenuIcon } from "@heroicons/react/outline";
import navList from "../../../config/navbar.json";

const Navbar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <>
      <NavbarRoot>
        <div className={s["inner-root"]}>
          <div className={s.logo}>
            <a href="/">
              <img src="logo.png" alt="logo" />
            </a>
          </div>
          <nav className={s.nav}>
            <ul className={s["nav-list"]}>
              {navList.map((nav) => (
                <NavItem key={nav.title} title={nav.title} href={nav.href} />
              ))}
            </ul>
          </nav>
          <div className={s["mobile-button"]}>
            <button onClick={() => setIsSidebarOpen(true)}>
              <MenuIcon className={s["sidebar-icon"]} />
            </button>
          </div>
        </div>
      </NavbarRoot>

      <SidebarMobile isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

interface NavItemProps {
  children?: React.ReactNode;
  href: string;
  title: string;
}

export const NavItem: React.FC<NavItemProps> = ({ href, title }) => {
  return (
    <a href={href} className={cn(s["nav-item"])}>
      {title}
    </a>
  );
};

export default Navbar;
