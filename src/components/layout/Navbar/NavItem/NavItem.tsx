import s from "./NavItem.module.css";
import cn from "classnames";

interface NavItemProps {
  children?: React.ReactNode;
  href: string;
  title: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title, className = "" }) => {
  return (
    <a href={href} className={cn(s.root, className)}>
      {title}
    </a>
  );
};

export default NavItem;
