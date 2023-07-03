import { ReactNode } from "react";
import Logo from "../logo/Logo";
import HeroMenu from "./Menu/HeroMenu";
import "./style.scss";

interface IProps {
  content: ReactNode;
  size: "main" | "secondary";
}
export default ({ content, size }: IProps) => {
  return (
    <div
      className="Hero"
      style={{ height: size == "main" ? "800px" : "350px" }}
    >
      <div className="HeroMenu">
        <HeroMenu />
        <Logo />
      </div>
      {content}
    </div>
  );
};
