import { Link } from "react-router-dom";
import MainButton from "../MainButton/MainButton";
import image from "./../../assets/HomePage.png";
export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "10vw",
        marginRight: "10vw",
      }}
    >
      <div>
        <img
          style={{
            height: "100%",
          }}
          src={image}
          alt=""
        />
      </div>
      <div style={{ marginTop: "100px" }}>
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
