import React from "react";
import "./style.scss";
import { facts as FactsProps } from "./types";
import Card from "../card";
import Line from "../subHeadLine";
const index = () => {
  const facts_list: Array<FactsProps> = [
    { id: "1", figure: "15+", title: "clients", color: "#D35796" },
    { id: "2", figure: "1K", title: "awards", color: "#9256B7" },
    { id: "3", figure: "10K", title: "projects", color: "#578388" },
  ];

  return (
    <div className="section-space">
      <Line lineclass="sub-head-line-center" text="Facts" />

      <div className="card-list">
        {facts_list.map(({ id, figure, title, color }) => {
          return (
            // <li key={item.id} className="card">
            //   {item.title}
            // </li>
            <Card
              id={id}
              figure={figure}
              title={title}
              color={color}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
