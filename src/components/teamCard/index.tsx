import "./styles.scss";
import { props as AppProps } from "./types";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const index = ({ name, bio, src, role }: AppProps) => {
  return (
    <div className="team-card">
      <img src={src} alt={name} className="team-image" />
      <h4 className="team-name">{name}</h4>
      <div className="team-role">{role}</div>
      <div className="team-bio">{bio}</div>
      <div className="socials">
        <AiFillFacebook
          color="#2F80ED"
          fontSize="20px"
          style={{ margin: "0 10px", cursor: "pointer" }}
        />
        <AiFillInstagram
          color="#C13584"
          fontSize="20px"
          style={{ margin: "0 10px", cursor: "pointer" }}
        />
        <FaTwitter
          color="#00A8F0"
          fontSize="20px"
          style={{ margin: "0 10px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default index;
