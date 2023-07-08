import { useContext } from "react";
import { PopupContext } from "../Context/PopUpContext";

export default ({
  form,
  title,
  submitButton,
  extra,
}: {
  form: React.ReactNode;
  title: string;
  extra?: React.ReactNode;
  submitButton: React.ReactNode;
}) => {
  const { closePopup } = useContext(PopupContext);
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
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        onClick={() => {
          closePopup();
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
        {submitButton}
        {extra}
      </div>
    </div>
  );
};
