import React from "react";
import MainButton from "../../../components/MainButton/MainButton";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        flex: 1,
        direction: "rtl",
      }}
    >
      <div style={{ display: "flex", gap: 15 }}>
        <Field text="الاسم" />
        <Field text="البريد الالكتروني" />
      </div>
      <div style={{ display: "flex", gap: 15 }}>
        <Field text="رقم الهاتف" />
      </div>
      <textarea
        placeholder="رسالتك هنا ...."
        rows={8}
        style={{
          border: "none",
          resize: "none",
          backgroundColor: "#f2f7f7",
          padding: "10px",
        }}
      />
      <MainButton full text={"ارسال"} />
    </div>
  );
};
const Field = (props: { style?: React.CSSProperties; text: string }) => {
  return (
    <input
      placeholder={props.text}
      style={{
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#f3f7f7",
        border: "none",
        width: "100%",
        ...props.style,
      }}
    />
  );
};
