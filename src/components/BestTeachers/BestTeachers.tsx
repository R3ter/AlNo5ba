import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/Io";
import "./style.scss";
import { PiStudentBold } from "react-icons/pi";
import { useRef, useState } from "react";

export default () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [desText, setDescText] = useState(0);
  const teachersList = [
    {
      name: "adwadwad",
      image: "https://mui.com/static/images/avatar/1.jpg",
      studentsNum: 20,
      bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
      culpa quae inventore ratione rem, cumque expedita deleniti dicta
      saepe totam repudiandae numquam, adipisci sunt nulla recusandae
      aliquam ducimus. Excepturi, nobis!`,
    },
    {
      name: "asdasd",
      image: "https://mui.com/static/images/avatar/2.jpg",
      studentsNum: 50,
      bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
      culpa quae inventore ratione rem, cumque expedita deleniti dicta
      saepe totam repudiandae numquam, adipisci sunt nulla recusandae
      aliquam ducimus. Excepturi, nobis!`,
    },
    {
      name: "asdasd",
      image: "https://mui.com/static/images/avatar/3.jpg",
      studentsNum: 2130,
      bio: `Lorem ipsum dolor sitawdt nulla recusandae
      aliquam ducimus. Excepturi, nobis!`,
    },
    {
      name: "adwadwad",
      image: "https://mui.com/static/images/avatar/4.jpg",
      studentsNum: 123,
      bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
      culpa quae inventore ratione adw awd recusandae
      aliquam ducimus. Excepturi, nobis!`,
    },
    {
      name: "asdasd",
      image: "https://mui.com/static/images/avatar/5.jpg",
      studentsNum: 1123,
      bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
      culpa quae inve cumque expedita deleniti dicta
      saepe totam repudiandae numquam, adipisci sunt nulla recusandae
      aliquam ducimus. Excepturi, nobis!`,
    },
    {
      name: "asdasd",
      image: "https://mui.com/static/images/avatar/6.jpg",
      studentsNum: 10,
      bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
      culpa quae inventore ratione raawd`,
    },
  ];
  const [teachers, setTeachers] = useState(teachersList);
  const changeCard = (dir: "next" | "prev") => {
    if (parentRef.current?.className == "bestTeachersFade") {
      return;
    }

    if (parentRef.current) parentRef.current.className = "bestTeachersFade";
    setTimeout(() => {
      if (parentRef.current) parentRef.current.className = "bestTeachers";
      setDescText((desText) => {
        const num =
          dir == "next"
            ? (desText + 1) % teachersList.length
            : desText == 0
            ? teachersList.length - 1
            : (desText - 1) % teachersList.length;

        console.log(num);
        return num;
      });
      if (dir == "next") {
        const temp = teachers[0];
        teachers.shift();
        setTeachers([...teachers, temp]);
        return;
      }
      const temp = teachers[teachers.length - 1];
      teachers.pop();
      setTeachers([temp, ...teachers]);
    }, 500);
    // setTeachers(teachers.filter((e) => e));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div ref={parentRef} className="bestTeachers">
        <div
          style={{
            flexDirection: "column",
            textAlign: "right",
            flex: 0.5,
          }}
        >
          <h1 style={{ color: "#573083" }}>الدورات التدريبيه</h1>
          <p>{teachersList[desText].bio}</p>
          <div className="switchArrows">
            <IoIosArrowDropleft onClick={() => changeCard("next")} />
            <IoIosArrowDropright onClick={() => changeCard("prev")} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 50, flex: 0.8 }}>
          {teachers.slice(0, 3).map(({ image, name, studentsNum }) => (
            <TeacherCard image={image} name={name} studentsNum={studentsNum} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ITeacherCard {
  image: string;
  name: string;
  style?: React.CSSProperties;
  studentsNum: number;
}
const TeacherCard = ({ image, name, studentsNum, style }: ITeacherCard) => (
  <div className="teacherCard" style={{ ...style }}>
    <img src={image} />
    <h2 style={{ margin: "0" }}>{name}</h2>
    <p style={{ margin: "0", display: "flex" }}>
      <PiStudentBold style={{ fontSize: "20px", alignSelf: "center" }} />
      <p>{studentsNum}</p>
    </p>
  </div>
);
