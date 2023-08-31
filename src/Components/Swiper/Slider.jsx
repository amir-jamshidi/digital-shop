import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = ({ isProduct = false, children }) => {
  
  return (
    <div className={isProduct ? "home-slider mb-0" : "home-slider"}>
      <Swiper
        spaceBetween={25}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={isProduct ? [Pagination] : [Pagination, Autoplay]}
      >
      
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
