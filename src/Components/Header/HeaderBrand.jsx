import { Link } from "react-router-dom";

const HeaderBrand = () => {
  return (
    <>
      <Link to="/" className="header-title-link">
        <h2 className="header-title">دیجیتال استور</h2>
      </Link>
    </>
  );
};

export default HeaderBrand;
