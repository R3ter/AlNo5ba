import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./style.scss";
export default () => {
  // const images = [
  //   "https://mui.com/static/images/avatar/1.jpg",
  //   "https://mui.com/static/images/avatar/2.jpg",
  //   "https://mui.com/static/images/avatar/3.jpg",
  //   "https://mui.com/static/images/avatar/4.jpg",
  //   "https://mui.com/static/images/avatar/5.jpg",
  //   "https://mui.com/static/images/avatar/6.jpg",
  // ];

  return (
    <div
      className="slider"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 30,
        margin: "auto",
        marginTop: "50px",
        maxWidth: "1000px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ alignSelf: "center", display: "flex" }}>
          <MdKeyboardArrowLeft
            style={{
              alignSelf: "center",
              fontSize: "40px",
              cursor: "pointer",
              color: "#947fb1",
            }}
          />
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar
            style={{ transform: "scale(1.3)" }}
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
          <MdKeyboardArrowRight
            style={{
              alignSelf: "center",
              fontSize: "40px",
              color: "#947fb1",
              cursor: "pointer",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>وليد شسيشص</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          rem reiciendis? Nostrum, eos harum ipsam temporibus illum quibusdam
          dolores repellendus aperiam eligendi asperiores, earum animi omnis
          consequuntur at est eveniet.
        </p>
      </div>
    </div>
  );
};
interface IAvatar {
  src: string;
  style?: React.CSSProperties;
}
const Avatar = ({ src, style = {} }: IAvatar) => {
  return (
    <img
      src={src}
      style={{
        borderRadius: "50%",
        width: "70px",
        height: "70px",
        margin: "20px",
        ...style,
      }}
    />
  );
};
