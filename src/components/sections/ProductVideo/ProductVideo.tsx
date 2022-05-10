import s from "./ProductVideo.module.css";

interface ProductVideoProps {
  children?: React.ReactNode;
}

const ProductVideo: React.FC<ProductVideoProps> = () => {
  return (
    <section id="turtle-island" className={s.root}>
      <video className={s.video} autoPlay muted loop playsInline>
        <source src="videos/kammamuri-vr-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default ProductVideo;
