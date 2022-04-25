import { Swiper, SwiperSlide } from "swiper/react";
import s from "./HalfCarousel.module.css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import config from "../../../config/half-carousel.json";
import Container from "../../layout/Container";

interface HalfCarouselProps {
  children?: React.ReactNode;
}

const HalfCarousel: React.FC<HalfCarouselProps> = () => {
  const { t } = useTranslation();

  return (
    <section id="k-verse" className={s.root}>
      <Container>
        <div className={s.side}>
          <h3>{t("half-carousel-title")}</h3>
          <p>{t("half-carousel-paragraph")}</p>
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

export default HalfCarousel;
