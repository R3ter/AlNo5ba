import { CSSProperties, useEffect, useState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
interface IFormValue {
  [key: string]: string;
}

export default ({
  text,
  type,
  value,
  errorMsg,
  keyForm,
  validate,
  pushErrorMsg,
  style = {},
}: {
  errorMsg?: string;
  keyForm?: string;
  value?: IFormValue;
  style?: CSSProperties;

  text: string;
  pushErrorMsg?: string;
  validate?: (input: string) => boolean;
  type: React.HTMLInputTypeAttribute;
}) => {
  const [error, setError] = useState(pushErrorMsg || "");
  useEffect(() => {
    if (pushErrorMsg) setError(pushErrorMsg);
  }, [pushErrorMsg]);
  return (
    <div style={{ direction: "rtl", width: "100%", ...style }}>
      <h3>{text}</h3>
      <input
        type={type}
        placeholder={text}
        onChange={(e) => {
          if (value && keyForm) value[keyForm] = e.target.value;
          if (validate) {
            if (!validate(e.target.value) && e.target.value !== "") {
              setError(errorMsg || "");

              return;
            }
            setError("");
          }
        }}
        style={{
          padding: "10px",
          width: "95%",
          borderRadius: "10px",
          border: error ? "2px red solid" : "1px #b6b0b0 solid",
          paddingRight: "20px",
          paddingLeft: "0px",
        }}
      />

      {error && (
        <div
          style={{
            margin: "-10px",
            marginRight: "20px",
            color: "red",
            display: "flex",
          }}
        >
          <BiSolidErrorCircle
            style={{
              alignSelf: "center",
              marginLeft: "10px",
              fontSize: "17px",
            }}
          />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
