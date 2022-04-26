import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./HalfCarousel.module.css";
import { Navigation, Pagination, A11y, Autoplay, Swiper as SwiperAction } from "swiper";
import { useTranslation } from "react-i18next";
import config from "../../../config/half-carousel.json";
import Container from "../../layout/Container";
import ReactTextTransition from "react-text-transition";

interface HalfCarouselProps {
  children?: React.ReactNode;
}

const HalfCarousel: React.FC<HalfCarouselProps> = () => {
  const { t } = useTranslation();
  const [businessTextIndex, setBusinessTextIndex] = React.useState(0);

  const phrasesText = config.phrases.map((phrase) => t(phrase));
  const companyText = config.images.map((image) => t(image.business));

  const onSlideChange = (swiper: SwiperAction) => {
    setBusinessTextIndex(swiper.realIndex);
  };

  return (
    <section id="k-verse" className={s.root}>
      <Container>
        <div className={s.phrases}>
          <TextTransition text={phrasesText} />
        </div>
        <div className={s.side}>
          <h3>{t("half-carousel-title")}</h3>

          <p>{t("half-carousel-paragraph")}</p>
        </div>
        <div>
          <div className={s["business-pre"]}>{t("half-carousel-business")}</div>
          <div className={s.business}>
            <TextTransition text={companyText} customIndex={businessTextIndex} />
          </div>
        </div>
      </Container>

      <div className={s.carousel}>
        <Swiper
          onSlideChange={onSlideChange}
          className="h-[620px]"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: config.autoplaySecondsDelay * 1000,
          }}
        >
          {config.images.map((slide, i) => (
            <SwiperSlide key={i}>
              <img className={s.slide} src={slide.imgUrl} alt={t(slide.altText)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

interface TextTransitionProps {
  text: string[];
  customIndex?: number;
  delay?: number;
  inline?: boolean;
}

const TextTransition: React.FC<TextTransitionProps> = ({ text, customIndex, delay = 3000, inline = false }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (customIndex !== undefined) return;
    const intervalId = setInterval(() => setIndex((index) => index + 1), delay);
    return () => clearTimeout(intervalId);
  }, [delay, customIndex]);

  return <ReactTextTransition inline={inline} text={text[customIndex ?? index % text.length]} />;
};

export default HalfCarousel;
