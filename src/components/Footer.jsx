import { AppBar } from "@mui/material";
import { mainMenuItems } from "../constants";

const Footer = () => {
  return (
    <AppBar position="fixed" sx={{ bottom: 0, top: "auto"}}>
      <footer>
        <div className="footer__wrapper">
          <div className="footer__nav-items">
              {mainMenuItems.map((item) => (
                <div className="footer__nav-item" key={item}>{item}</div>
              ))}
          </div>
          <div className="footer__copyright">
            <p>created with 💖 using React & Vite</p>
            <p>CopyRight &copy; 2023 Dipak Paudel </p>
          </div>
        </div>
      </footer>
    </AppBar>
  );
};

export default Footer;
