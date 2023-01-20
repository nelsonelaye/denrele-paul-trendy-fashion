import "./styles.scss";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import Logo from "../logo";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <p>Live the life you want</p>
      <div className="footer-socials">
        <RiFacebookFill
          fontSize="20px"
          color="#fff"
          style={{ margin: "0 20px", cursor: "pointer" }}
        />
        <FaTwitter
          fontSize="20px"
          color="#fff"
          style={{ margin: "0 20px", cursor: "pointer" }}
        />
        <TiSocialInstagram
          fontSize="20px"
          color="#fff"
          style={{ margin: "0 20px", cursor: "pointer" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
