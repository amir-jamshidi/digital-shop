import { Copyright } from "@mui/icons-material";

const Footer = () => {
 
  return (
    <div className="footer">
      <div className="container">
        <h6 className="footer-title">
          تمامی حقوق این سایت برای دیجیتال استور محفوظ می باشد
        </h6>
        <h6 className="footer-icon">
          <Copyright />
        </h6>
      </div>
    </div>
  );
 
};

export default Footer;

