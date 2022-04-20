import Container from "../Container";
import cn from "classnames";
import { FC } from "react";
import s from "./Section.module.css";

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  animationOnScroll?: boolean;
  id?: string;
}

const Section: FC<SectionProps> = ({ id = "", title, subtitle, className = "", children }) => (
  <section id={id} className={cn(s.root, s.separator, className)}>
    <Container>
      {title && subtitle && (
        <div>
          <span className={s.subtitle}>{subtitle}</span>
          <h4 className={s.title}>{title}</h4>
        </div>
      )}

      <div>{children}</div>
    </Container>
  </section>
);

export default Section;
