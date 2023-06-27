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
      style={{ height: size == "main" ? "600px" : "350px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeroMenu />
        <Logo />
      </div>
      {content}
    </div>
  );
};
