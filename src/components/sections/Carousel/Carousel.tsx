import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Carousel.module.css";
import config from "../../../config/carousel.json";

interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <Swiper
      className={s.root}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: config.autoplaySecondsDelay * 1000,
        disableOnInteraction: true,
      }}
    >
      {config.images.map((slide, i) => (
        <SwiperSlide>
          <img className={s.slide} src={slide.imgUrl} alt={slide.altText} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
