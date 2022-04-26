import { FC } from "react";
import s from "./Footer.module.css";
import Container from "../Container";
import footer from "../../../config/footer.json";
import { useTranslation } from "react-i18next";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className={s.root}>
          <div className={s.side}>
            <img className={s.logo} src="logo.png" alt="Logo" />
            {/* <p className={s.paragraph}>{t("footer-paragraph")}</p> */}
          </div>

          <div className={s.sections}>
            {footer.map((section) => (
              <div key={section.title} className={s.section}>
                <h3 className={s["section-title"]}>{section.title}</h3>
                <ul className="mt-4 space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className={s.link}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-primary-600 xl:text-center">{t("footer-bottom")}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
