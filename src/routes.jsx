import { Home, About, Contact, Cart, Product, SearchProduct } from "./Pages";

const getRoutes = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/product/:productID", element: <Product /> },
    { path: "/search/:productName", element: <SearchProduct /> },
  ];

  return routes;
};

export default getRoutes;
