import Container from "../Container";
import { FC } from "react";
import s from "./Section.module.css";

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  animationOnScroll?: boolean;
  id?: string;
  clean?: boolean;
}

const Section: FC<SectionProps> = ({ id = "", title, className = "", clean = false, children }) => (
  <section id={id} className="bg-white">
    <Container clean={clean} className={s.root}>
      {title && (
        <div>
          <h2 className={s.title}>{title}</h2>
        </div>
      )}

      <div className={className}>{children}</div>
    </Container>
  </section>
);

export default Section;
