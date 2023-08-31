import Slider from "./../Swiper/Slider";
import { SwiperSlide } from "swiper/react";
const ProductImg = ({ findProduct }) => {
  return (
    <div className="col-12 mb-3 col-lg-3 mb-lg-0">
      <Slider isProduct={true}>
        {findProduct.productImg.map((img , index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImg;
