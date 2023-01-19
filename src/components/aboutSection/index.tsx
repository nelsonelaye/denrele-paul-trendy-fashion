import Line from "../subHeadLine";
import "./style.scss";
import SideImage from "../../assets/images/fl11.png";

const index = () => {
  return (
    <div className="about-section">
      <div className="text-box">
        <Line
          lineclass="sub-head-line-left"
          text="About us"
          headerclass="side-header"
        />
        <p>
          She is a product manager who has seen numerous projects from inception
          to completion. I am presently at WhoGoHost as the product manager.
        </p>

        <p>
          Here are some of the projects ive overseen so far in my career. Here
          are some of the projects ive overseen so far in my career.Here are
          some of the projects ive overseen so far in my career.
        </p>
      </div>
      <div className="side-image">
        {/* <img src={SideImage} alt="A vace of flowers" /> */}
      </div>
    </div>
  );
};

export default index;
