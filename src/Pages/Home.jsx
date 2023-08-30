import SideBar from "../Components/SideBar/SideBar";
import Slider from "../Components/Swiper/Slider";
import Products from "../Components/Products/Products";
import { SearchRounded } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="row home">
      <div className="col-12">
        <div className="search-parent">
          <div className="search-content">
            <div className="row m-0">
              <input
                className="col-12 search-input"
                type="text"
                placeholder="محصول مورد نظر خود را جستوجو کنید"
              />
              <div className="search-icon-parent">
                <SearchRounded fontSize="medium" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <Slider />
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
