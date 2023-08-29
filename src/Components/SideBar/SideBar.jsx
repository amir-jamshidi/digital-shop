import SidebarItem from "./SidebarItem";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
const SideBar = () => {
  const { fiveBestSeller } = useContext(MainContext);

  return (
    <div className="sidebar">
      <h5 className="sidebar-header">پنج محصول پر فروش</h5>
      {fiveBestSeller && (
        <div className="sidebar-content">
          {fiveBestSeller.map((product) => (
            <SidebarItem key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
