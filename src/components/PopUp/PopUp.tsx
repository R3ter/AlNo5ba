import { useState } from "react";
import MainButton from "../MainButton/MainButton";

export default ({
  form,
  title,
  submitText,
  extra,
  setShow,
}: {
  submitText: string;
  form: React.ReactNode;
  title: string;
  extra?: React.ReactNode;
  setShow: any;
}) => {
  const [show, setShown] = useState(false);
  setShow.current = (bool: boolean) => {
    setShown(bool);
  };
  return (
    <div
      style={{
        color: "black",
        textAlign: "right",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        display: show ? "flex" : "none",
        justifyContent: "center",
      }}
    >
      <div
        onClick={() => {
          setShown(false);
        }}
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          position: "fixed",
          opacity: 0.5,
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          top: 50,
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "white",
          alignSelf: "center",
          zIndex: 2,
          padding: "50px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", margin: "0px" }}>{title}</h2>
        {form}
        <br></br>
        <MainButton full text={submitText} />
        {extra}
      </div>
    </div>
  );
};
