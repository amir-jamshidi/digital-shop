import { Home, About, Contact, Cart, Product } from "./Pages";

const getRoutes = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/product/:productID", element: <Product /> },
  ];

  return routes;
};

export default getRoutes;
