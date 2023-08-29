import SideBar from "../Components/SideBar/SideBar";
import Slider from "../Components/Swiper/Slider";
import Products from "../Components/Products/Products";

const Home = () => {
 

  return (
    <div className="row home">
      <div className="col-12">
        <Slider />
      </div>


      <div className="d-none d-md-block col-md-4">
        <SideBar />
      </div>

      <div className="col-12 col-md-8">
        <Products/>
      </div>
    </div>
  );
};

export default Home;
