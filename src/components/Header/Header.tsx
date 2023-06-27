import { ReactNode } from "react";
import ContactHeader from "../ContactHeader/ContactHeader";
import Hero from "../Hero/Hero";
import "./style.scss";

interface IProps {
  headerContent: ReactNode;
  size: "main" | "secondary";
}
export default ({ headerContent, size }: IProps) => {
  return (
    <div className="Header">
      <ContactHeader />
      <Hero content={headerContent} size={size} />
    </div>
  );
};
