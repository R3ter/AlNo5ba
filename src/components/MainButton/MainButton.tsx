import { CSSProperties } from "react";

interface IProps {
  text: String;
  onClick?: () => void;
  style?: CSSProperties;
  full?: boolean;
}
export default ({ text, onClick, style, full = false }: IProps) => {
  return (
    <div>
      <button
        onClick={onClick ? onClick : () => {}}
        style={{
          padding: "10px",
          fontSize: "18px",
          paddingRight: "70px",
          cursor: "pointer",
          paddingLeft: "70px",
          borderRadius: full ? "0px" : "10px",
          backgroundColor: "#253475",
          color: "white",
          border: "none",
          width: full ? "100%" : "auto",
          ...style,
        }}
      >
        {text}
      </button>
    </div>
  );
};
