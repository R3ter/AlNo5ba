import MainButton from "../../../components/MainButton/MainButton";

export default () => {
  return (
    <div>
      <Field />
      <Field />
      <Field />
      <Field />
      <MainButton text={"ارسال"} />
    </div>
  );
};
const Field = () => {
  return (
    <input
      placeholder="name"
      style={{
        padding: "10px",
        backgroundColor: "#f3f7f7",
        border: "none",
        width: "100%",
      }}
    />
  );
};
