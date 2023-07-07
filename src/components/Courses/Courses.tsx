import { Link } from "react-router-dom";
import H1 from "../SimpleComponents/H1";
import P from "../SimpleComponents/P";
import "./style.scss";
export default () => {
  const courses = [
    {
      name: "dawadw",
      image:
        "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam asperiores vitae qui cum repellendus magnam culpa
        laudantium. Ut temporibus excepturi maiores totam! Reprehenderit
        quis sit sapiente dolores quidem, molestiae ut.`,
    },
    {
      name: "dawadw",
      image:
        "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam asperiores vitae qui cum repellendus magnam culpa
        laudantium. Ut temporibus excepturi maiores totam! Reprehenderit
        quis sit sapiente dolores quidem, molestiae ut.`,
    },
  ];
  return (
    <div className="courses">
      <div className="coursesDiv">
        <h1>الكورسات</h1>
        <div style={{ gap: 60, display: "flex", flexDirection: "column" }}>
          {courses.map(({ name, image, description }) => {
            return (
              <Link to={"/course"}>
                <div className="courseCard">
                  <div>
                    <H1>{name}</H1>
                    <P>{description}</P>
                  </div>
                  <img src={image} alt="" />
                </div>
                <hr />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
