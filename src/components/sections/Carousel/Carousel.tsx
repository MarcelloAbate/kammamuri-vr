import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Carousel.module.css";
import config from "../../../config/carousel.json";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container";
// import Section from "../../layout/Section";

interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = () => {
  const { t } = useTranslation();

  return (
    <section id="turtle-island">
      <div className="bg-primary py-4">
        <Container>
          <h2 className="text-white text-3xl font-bold border-l-4 border-white pl-4">Carousel</h2>
        </Container>
      </div>
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
          <SwiperSlide>
            <img className={s.slide} src={slide.imgUrl} alt={t(slide.altText)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
