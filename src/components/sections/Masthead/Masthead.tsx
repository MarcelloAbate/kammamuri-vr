import { useTranslation } from "react-i18next";
import s from "./Masthead.module.css";

interface MastheadProps {
  children?: React.ReactNode;
}

const Masthead: React.FC<MastheadProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <video className={s.video} autoPlay muted loop playsInline>
        <source src="header-video.mov" />
      </video>
      <div className={s.overlay}>
        <h1 className={s.title}>{t("header-title")}</h1>
        <h2 className={s.subtitle}>{t("header-subtitle")}</h2>
      </div>
    </div>
  );
};

export default Masthead;
