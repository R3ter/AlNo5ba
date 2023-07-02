import { Link } from "react-router-dom";
import "./style.scss";
export default () => {
  return (
    <div
      className="heroMenu"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "40%",
        margin: "40px",
        fontSize: "20px",
      }}
    >
      <Link to={"/register"}>
        <div>اشترك الان</div>
      </Link>
      <Link to={"/courses"}>
        <div>الخدمات</div>
      </Link>
      <Link to={"/aboutUs"}>
        <div>من نحن</div>
      </Link>
      <Link to={"/"}>
        <div>الرئيسية</div>
      </Link>
    </div>
  );
};
