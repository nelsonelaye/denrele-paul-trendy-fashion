import "./style.scss";
import Line from "../subHeadLine";
import { galleryType } from "./types";
import g1 from "../../assets/images/fl1.png";
import g2 from "../../assets/images/fl11.png";
import g3 from "../../assets/images/fl4.png";
import g4 from "../../assets/images/fl7.jpg";

const index = () => {
  const gallery_items: Array<galleryType> = [
    {
      id: "1",
      src: g1,
    },
    {
      id: "2",
      src: g2,
    },
    {
      id: "3",
      src: g3,
    },
    {
      id: "4",
      src: g4,
    },
  ];
  return (
    <div className="gallery">
      <div className="top">
        <Line
          lineclass="sub-head-line-left"
          text="Gallery"
          headerclass="side-header"
        />
      </div>

      <div className="slide first-slide">
        {gallery_items?.map(({ id, src }) => (
          <img src={src} key={id} className="gallery-image" />
        ))}
      </div>
      <div className="slide second-slide">Index</div>
    </div>
  );
};

export default index;
