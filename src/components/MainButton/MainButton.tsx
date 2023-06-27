import { CSSProperties } from "react";

interface IProps {
  text: String;
  onClick?: () => void;
  style?: CSSProperties;
}
export default ({ text, onClick, style }: IProps) => {
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
          borderRadius: "10px",
          backgroundColor: "#253475",
          color: "white",
          border: "none",
          ...style,
        }}
      >
        {text}
      </button>
    </div>
  );
};
