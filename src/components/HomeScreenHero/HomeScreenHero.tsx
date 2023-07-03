import { Link } from "react-router-dom";
import MainButton from "../MainButton/MainButton";
import image from "./../../assets/HomePage.png";
import "./style.scss";
export default () => {
  return (
    <div className="HomeScreenHero">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h2 style={{ textAlign: "right" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
          dolorum. Sed asperiores inventore
        </h2>
        <Link to={"/register"}>
          <MainButton style={{ float: "right" }} text={"اشترك الان"} />
        </Link>
      </div>
    </div>
  );
};
