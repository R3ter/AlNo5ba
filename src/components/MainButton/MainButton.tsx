import { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface IProps {
  text: String;
  onClick?: (arg0: Function) => void;
  style?: CSSProperties;
  full?: boolean;
  isLoading?: boolean;
}
export default ({ text, onClick, style, full = false }: IProps) => {
  const [isLoading, setLoading] = useState(false);
  const setLoaing = (bool: boolean) => {
    setLoading(bool);
  };
  return (
    <div>
      <button
        onClick={() => {
          if (onClick && !isLoading) return onClick(setLoading);
        }}
        style={{
          padding: "10px",
          whiteSpace: "nowrap",
          fontSize: "18px",
          paddingRight: "70px",
          cursor: !isLoading ? "pointer" : "auto",
          paddingLeft: "70px",
          borderRadius: full ? "0px" : "10px",
          backgroundColor: !isLoading ? "#253475" : "#5d637e",
          color: "white",
          border: "none",
          height: "50px",
          width: full ? "100%" : "auto",
          ...style,
        }}
      >
        {!isLoading ? (
          text
        ) : (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0",
            }}
          >
            {full ? (
              <p style={{ margin: 0, marginRight: "10px" }}>
                ....الرجاء الانتظار
              </p>
            ) : (
              ""
            )}
            <ClipLoader color="#36d7b7" />
          </p>
        )}
      </button>
    </div>
  );
};
