import "./styles.scss";
import SubHeadLine from "../subHeadLine";
import SubHeadIntro from "../subHeadIntro";
import { teamType } from "./types";
import TeamCard from "../teamCard";
import t1 from "../../assets/images/team1.png";
import t2 from "../../assets/images/team2.png";
import t3 from "../../assets/images/team3.png";
import t4 from "../../assets/images/team4.png";
import t5 from "../../assets/images/team5.png";
import t6 from "../../assets/images/team6.png";

const index = () => {
  const team_list: Array<teamType> = [
    {
      id: "1",
      name: "Kerry Lorem",
      role: "business developer",
      bio: "Tope is an amazing product manager and helps us improve our team efficiency by 50%.",
      src: t1,
    },
    {
      id: "2",
      name: "Kerry Lorem",
      role: "business developer",
      bio: "Talk about bring professional to word professional. Highly recommend.",
      src: t2,
    },
    {
      id: "3",
      name: "Kerry Lorem",
      role: "business developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.",
      src: t3,
    },
    {
      id: "4",
      name: "Kerry Lorem",
      role: "business developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.",
      src: t4,
    },
    {
      id: "5",
      name: "Kerry Lorem",
      role: "business developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.",
      src: t5,
    },
    {
      id: "6",
      name: "Kerry Lorem",
      role: "business developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.",
      src: t6,
    },
  ];

  return (
    <div className="team-section">
      <SubHeadLine lineclass="sub-head-line-center" text="Our Team" />
      <p className="team-intro">
        We have an impressive team of professionals and seasoned business
        experts.
      </p>
      {/* <SubHeadIntro
        text=""
      /> */}
      <div className="team-list">
        {team_list?.map(({ id, name, role, bio, src }) => (
          <TeamCard name={name} role={role} bio={bio} src={src} key={id} />
        ))}
      </div>
    </div>
  );
};

export default index;
