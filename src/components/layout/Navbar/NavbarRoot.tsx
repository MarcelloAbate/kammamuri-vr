import { FC } from "react";
import cn from "classnames";
import s from "./Navbar.module.css";
import useScrolledFromTop from "../../../hooks/useScrolledFromTop";

interface NavbarRootProps {
  children?: React.ReactNode;
}

const NavbarRoot: FC<NavbarRootProps> = ({ children }) => {
  const hasScrolled = useScrolledFromTop();

  return <div className={cn(s.root, { [s["scrolled-root"]]: hasScrolled })}>{children}</div>;
};

export default NavbarRoot;
