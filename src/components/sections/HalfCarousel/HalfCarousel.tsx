import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./HalfCarousel.module.css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import config from "../../../config/half-carousel.json";
import Container from "../../layout/Container";
import ReactTextTransition from "react-text-transition";

interface HalfCarouselProps {
  children?: React.ReactNode;
}

const HalfCarousel: React.FC<HalfCarouselProps> = () => {
  const { t } = useTranslation();

  const phrasesText = config.phrases.map((phrase) => t(phrase));
  const companyText = config.images.map((image) => t(image.business));

  return (
    <section id="k-verse" className={s.root}>
      <Container>
        <div className={s.side}>
          <h3>{t("half-carousel-title")}</h3>
          <p>
            <TextTransition text={phrasesText} />
          </p>

          <p>{t("half-carousel-paragraph")}</p>

          <p>
            {t("half-carousel-company")}
            <TextTransition inline text={companyText} delay={5000} />
          </p>
        </div>
      </Container>

      <div className={s.carousel}>
        <Swiper
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
  delay?: number;
  inline?: boolean;
}

const TextTransition: React.FC<TextTransitionProps> = ({ text, delay = 3000, inline = false }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), delay);
    return () => clearTimeout(intervalId);
  }, [delay]);

  return <ReactTextTransition inline={inline} text={text[index % text.length]} />;
};

export default HalfCarousel;
