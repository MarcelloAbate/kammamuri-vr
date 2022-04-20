import { FC } from "react";
import cn from "classnames";
import s from "./Footer.module.css";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <footer id="footer" className={rootClassName}>
      <div className={s.logo}>
        <span>{/* Logo */}</span>
      </div>
    </footer>
  );
};

export default Footer;
