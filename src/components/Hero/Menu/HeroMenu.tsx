import { Link } from "react-router-dom";
import "./style.scss";
export default () => {
  return (
    <div className="heroMenu">
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
