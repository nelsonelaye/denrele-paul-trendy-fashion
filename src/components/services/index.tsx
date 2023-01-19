import React from "react";
import "./style.scss";
import Line from "../subHeadLine";
import IconText from "../serviceIconAndText";

const index = () => {
  return (
    <div className="service-section">
      <Line lineclass="sub-head-line-center" text="Services" headerclass="" />
      <div className="service-list">
        <IconText
          title="web development"
          desc="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"
        />
        <IconText
          title="web design"
          desc="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"
        />
        <IconText
          title="presentation design"
          desc="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"
        />
        <IconText
          title="graphics design"
          desc="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"
        />
      </div>
    </div>
  );
};

export default index;
