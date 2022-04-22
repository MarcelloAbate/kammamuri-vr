import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Masthead.module.css";
import cn from "classnames";

interface MastheadProps {
  children?: React.ReactNode;
}

const Masthead: React.FC<MastheadProps> = () => {
  const { t } = useTranslation();
  const [isQuoteVisible, setIsQuoteVisible] = React.useState(false);
  const timeout = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const showQuote = () => {
      setIsQuoteVisible(true);
    };
    timeout.current = setTimeout(showQuote, 6200);
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);

  const quoteWrapperCn = cn(s["quote-wrapper"], { hidden: !isQuoteVisible });
  const logoCn = cn(s.logo, { block: !isQuoteVisible, hidden: isQuoteVisible });

  return (
    <>
      <video className={s.video} autoPlay muted loop playsInline>
        <source src="videos/loop.mp4" type="video/mp4" />
        <source src="videos/loop.webm" type="video/webm" />
      </video>
      <header id="home" className={s.root}>
        <div className={s.overlay}>
          <div>
            <img className={logoCn} src="logo-white.png" alt="logo" />
            <div className={quoteWrapperCn}>
              <p className={s.quote}>{t("header-quote")}</p>
              <div className={s.author}>{t("header-author")}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Masthead;
