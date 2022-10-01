import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

const Carousel = ({ children, className, options }) => {
  return (
    <OwlCarousel className={className} options={options}>
      {children}
    </OwlCarousel>
  );
};

export default Carousel;
