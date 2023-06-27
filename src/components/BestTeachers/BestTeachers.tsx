import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/Io";
export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        margin: "auto",
        marginTop: "100px",
        justifyContent: "center",
        maxWidth: "1500px",
        marginBottom: "100px",
      }}
    >
      <div style={{ flexDirection: "column", textAlign: "right", flex: 0.5 }}>
        <h1 style={{ color: "#573083" }}>الدورات التدريبيه</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio culpa
          quae inventore ratione rem, cumque expedita deleniti dicta saepe totam
          repudiandae numquam, adipisci sunt nulla recusandae aliquam ducimus.
          Excepturi, nobis!
        </p>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <IoIosArrowDropleft
            style={{ fontSize: "70px", color: "#573083", margin: "15px" }}
          />
          <IoIosArrowDropright
            style={{ fontSize: "70px", color: "#573083", margin: "15px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 50, flex: 0.8 }}>
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </div>
  );
};
const TeacherCard = () => (
  <div
    style={{
      textAlign: "right",
    }}
  >
    <img
      src="https://mui.com/static/images/avatar/4.jpg"
      width={"200"}
      height={"200"}
    />
    <h2 style={{ margin: "0" }}>name</h2>
    <p style={{ margin: "0" }}>students num</p>
  </div>
);
