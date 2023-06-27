import img4 from "./../../assets/img4.png";
export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "70px",
        marginBottom: "70px",
      }}
    >
      <img
        src={img4}
        style={{ position: "absolute", zIndex: -10, left: -50 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "1000px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <NumberWithText number={150} text="عدد الطلاب" />
        <NumberWithText number={500} text="عدد الكوسات" />
        <NumberWithText number={100} text="عدد المعلميين" />
      </div>
    </div>
  );
};
interface INumberWithText {
  text: string;
  number: number;
}
const NumberWithText = ({ text, number }: INumberWithText) => {
  return (
    <div style={{ color: "#273572" }}>
      <h2 style={{ marginBottom: 0, fontSize: "40px" }}>{number}+</h2>
      <p style={{ marginTop: -20 }}>{text}</p>
    </div>
  );
};
