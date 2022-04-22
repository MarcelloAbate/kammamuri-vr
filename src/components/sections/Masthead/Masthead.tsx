import { useTranslation } from "react-i18next";
import s from "./Masthead.module.css";

interface MastheadProps {
  children?: React.ReactNode;
}

const Masthead: React.FC<MastheadProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <video className={s.video} autoPlay muted loop playsInline>
        <source src="videos/loop.mp4" type="video/mp4" />
        <source src="videos/loop.webm" type="video/webm" />
      </video>
      <header id="home" className={s.root}>
        <div className={s.overlay}>
          <h1 className={s.title}>{t("header-title")}</h1>
          <h2 className={s.subtitle}>{t("header-subtitle")}</h2>
        </div>
      </header>
    </>
  );
};

export default Masthead;
