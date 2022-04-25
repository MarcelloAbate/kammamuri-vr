import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Carousel.module.css";
import config from "../../../config/carousel.json";
import { useTranslation } from "react-i18next";
// import Section from "../../layout/Section";

interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = () => {
  const { t } = useTranslation();

  return (
    <section id="turtle-island">
      <Swiper
        className={s.root}
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
    </section>
  );
};

export default Carousel;
