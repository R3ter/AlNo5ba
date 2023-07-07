import { Link } from "react-router-dom";
import logo from "./../../assets/logo2.png";
import "./style.scss";
export default () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img width={120} height={120} src={logo} />
      </Link>
    </div>
  );
};
