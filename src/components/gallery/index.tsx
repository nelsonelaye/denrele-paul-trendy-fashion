import "./style.scss";
import Line from "../subHeadLine";
import { galleryType } from "./types";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
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
        {/* <Slider {...settings}> */}
        {gallery_items?.map(({ id, src }) => (
          <img src={src} key={id} className="gallery-image" />
        ))}
        {/* </Slider> */}
      </div>

      <div className="slide second-slide">Index</div>
    </div>
  );
};

export default index;
