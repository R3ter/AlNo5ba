import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/Io";
import "./style.scss";
export default () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="bestTeachers">
        <div style={{ flexDirection: "column", textAlign: "right", flex: 0.5 }}>
          <h1 style={{ color: "#573083" }}>الدورات التدريبيه</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            culpa quae inventore ratione rem, cumque expedita deleniti dicta
            saepe totam repudiandae numquam, adipisci sunt nulla recusandae
            aliquam ducimus. Excepturi, nobis!
          </p>
          <div className="switchArrows">
            <IoIosArrowDropleft />
            <IoIosArrowDropright />
          </div>
        </div>
        <div style={{ display: "flex", gap: 50, flex: 0.8 }}>
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </div>
    </div>
  );
};
const TeacherCard = () => (
  <div className="teacherCard">
    <img src="https://mui.com/static/images/avatar/4.jpg" />
    <h2 style={{ margin: "0" }}>name</h2>
    <p style={{ margin: "0" }}>students num</p>
  </div>
);
