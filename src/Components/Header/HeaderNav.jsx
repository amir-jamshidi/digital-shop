import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      
      <ul className="nav-list">
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link to="/about">درباره ما</Link>
        </li>
        <li>
          <Link to="/contact">تماس با ما</Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
