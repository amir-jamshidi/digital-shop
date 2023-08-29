import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Slider = () => {
  return (
    <div className="home-slider">
      <Swiper
      spaceBetween={25}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img src="/assets/slider1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
