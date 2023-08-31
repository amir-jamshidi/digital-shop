import SideBar from "../Components/SideBar/SideBar";
import Slider from "../Components/Swiper/Slider";
import Products from "../Components/Products/Products";
import Search from "../Components/Search/Search";
import { SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div className="row home">
      <div className="col-12">
        <Search />
      </div>

      <div className="col-12">
        <Slider>
          <SwiperSlide>
            <img src="/assets/slider1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/slider2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/slider3.jpg" alt="" />
          </SwiperSlide>
        </Slider>
      </div>

      <div className="d-none d-md-block col-md-4">
        <SideBar />
      </div>

      <div className="col-12 col-md-8">
        <Products />
      </div>
    </div>
  );
};

export default Home;
