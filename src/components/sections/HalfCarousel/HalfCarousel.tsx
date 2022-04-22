import { Swiper, SwiperSlide } from "swiper/react";
import s from "./HalfCarousel.module.css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import Section from "../../layout/Section";
import config from "../../../config/carousel.json";
import Container from "../../layout/Container";

interface HalfCarouselProps {
  children?: React.ReactNode;
}

const HalfCarousel: React.FC<HalfCarouselProps> = () => {
  const { t } = useTranslation();

  return (
    <section className={s.root}>
      <Container>
        <div className={s.side}>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus dignissimos deleniti laudantium.
            Cupiditate tenetur maiores excepturi obcaecati ratione eligendi. Natus, possimus? Blanditiis consectetur
            ipsum eaque laudantium aliquam ea inventore?
          </p>
        </div>
      </Container>
      <div className={s.carousel}>
        <Swiper
          className="object-cover h-[620px]"
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
      </div>
    </section>
  );
};

export default HalfCarousel;
