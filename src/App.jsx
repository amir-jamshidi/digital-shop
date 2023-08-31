import { useEffect, useState } from "react";
//--
import { useRoutes, useNavigate } from "react-router-dom";
//--
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
//--
import MainContext from "./Contexts/MainContext";
import Toast from "./Utils/Toast";
//--
import getRoutes from "./routes";
import DrawerRight from "./Components/Drawer/DrawerRight";

const App = () => {
  let routesApp = useRoutes(getRoutes());

  const [recentProducts, setRecentProducts] = useState([]);
  const [fiveBestSeller, setFiveBestSeller] = useState([]);
  const [cart, setCart] = useState([]);
  const [drawer, setDrawer] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getAllApi();
    getCartApi();
  }, []);

  //Get All Api Fetch
  const getAllApi = async () => {
    const apiResponse = await fetch("http://localhost:4000/api");
    const apiJson = await apiResponse.json();
    setRecentProducts(apiJson.recentProduts);
    setFiveBestSeller(apiJson.fiveBestSeller);
  };

  //Get Cart Api
  const getCartApi = async () => {
    const cartResponse = await fetch("http://localhost:4000/cart");
    const cartData = await cartResponse.json();
    setCart(cartData);
  };

  //Add Product To Cart
  const addToCart = async (productId) => {
    const alreadyProduct = [...cart].some((p) => p.productId == productId);

    if (alreadyProduct) {
      Toast("warning", "محصول تکراری", "این محصول در سبد خرید شما وجود دارد");
      return;
    }
    const { productPrice, productImg, productName, productColors } = [
      ...recentProducts,
    ].find((p) => p.productId == productId);

    const pImg = productImg[0];
    const pColor = productColors[0];

    let cartObject = {
      productId: productId,
      productName,
      productPrice,
      productImg: pImg,
      productColors: pColor,
      productCount: 1,
    };

    const cartResponse = await fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(cartObject),
    });
    const cartJson = await cartResponse.json();
    if (cartResponse.status === 201) {
      Toast("success", "به سبد اضافه شد", "محصول یه سبد خرید شما اضافه شد");
      setCart((prevcart) => [...prevcart, cartJson]);
    }
  };

  //Remove Product
  const removeItemCart = async (id) => {
    const removeCartResponse = await fetch(`http://localhost:4000/cart/${id}`, {
      method: "DELETE",
    });
    if (removeCartResponse.status == 200) {
      Toast("success", "حذف شد", "محصول از سبد خرید حذف شد");
      const newCart = [...cart];
      const filterCart = newCart.filter((p) => p.id !== id);
      setCart(filterCart);
    }
  };

  //Manage Drawer
  const manageDrawer = (state) => {
    setDrawer(state);
  };

  const searchProduct = (productName) => {
    navigate(`/search/${productName}`);
  };

  return (
    <>
      <MainContext.Provider
        value={{
          recentProducts,
          addToCart,
          cart,
          removeItemCart,
          fiveBestSeller,
          drawer,
          manageDrawer,
          searchProduct,
        }}
      >
        <DrawerRight />
        <Header />
        <div className="container">{routesApp}</div>
        <Footer />
      </MainContext.Provider>
    </>
  );
};
export default App;
