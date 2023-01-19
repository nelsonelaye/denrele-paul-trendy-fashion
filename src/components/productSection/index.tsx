import "./style.scss";
import Line from "../subHeadLine";
import ProductColumn from "../productColumn";
import { product as ProductTypes } from "./types";
import product1 from "../../assets/images/fl1.png";
import product2 from "../../assets/images/fl2.png";

const index = () => {
  const product_list: Array<ProductTypes> = [
    {
      id: "1",
      imageSrc: product2,
      title: "Something Great About your company ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.",
    },
  ];
  return (
    <div className="product-section">
      <Line
        lineclass="sub-head-line-left"
        text="Our Products"
        headerclass="side-header"
      />

      <div className="products-list">
        <ProductColumn
          id="1"
          imageSrc={product1}
          title="Something Great About your company"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices."
        />

        <ProductColumn
          classname="reverse"
          id="2"
          imageSrc={product2}
          title="Another great thing about your company"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices."
        />
      </div>
    </div>
  );
};

export default index;
