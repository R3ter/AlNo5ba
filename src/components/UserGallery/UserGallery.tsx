import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LegacyRef, useState } from "react";

import "./style.scss";
import Transition from "react-transition-group/Transition";
export default () => {
  const [num, setNum] = useState([1, 2, 3]);
  const [inProp, setInProp] = useState(false);
  const images = [
    {
      image: "https://mui.com/static/images/avatar/2.jpg",
      name: "waleed 213",
      comment:
        "Lorem ipsum 132 sit amet, consectetur adipisicing elit. Mollitia, rem reiciendis? Nostrum, eos harum ipsam temporibus illum quibusdam dolores repellendus aperiam eligendi asperiores, earum animi omnis consequuntur at est eveniet.",
    },
    {
      image: "https://mui.com/static/images/avatar/3.jpg",
      name: "waleed 123",
      comment:
        "Lorem ipsum asd sit amet, consectetur adipisicing elit. Mollitia, rem reiciendis? Nostrum, eos harum ipsam temporibus illum quibusdam dolores repellendus aperiam eligendi asperiores, earum animi omnis consequuntur at est eveniet.",
    },
    {
      image: "https://mui.com/static/images/avatar/4.jpg",
      name: "waleed 153",
      comment:
        "Lorem ipsum zxc sit amet, consectetur adipisicing elit. Mollitia, rem reiciendis? Nostrum, eos harum ipsam temporibus illum quibusdam dolores repellendus aperiam eligendi asperiores, earum animi omnis consequuntur at est eveniet.",
    },
    {
      image: "https://mui.com/static/images/avatar/5.jpg",
      name: "waleed 173",
      comment:
        "Lorem ipsum bn sit amet, consectetur adipisicing elit. Mollitia, rem reiciendis? Nostrum, eos harum ipsam temporibus illum quibusdam dolores repellendus aperiam eligendi asperiores, earum animi omnis consequuntur at est eveniet.",
    },
    {
      image: "https://mui.com/static/images/avatar/6.jpg",
      name: "waleed 193",
      comment:
        "Lorem ipsum 1rt54 sit amet, consectetur adipisicing elit. Mollitia, rem reiciendis? Nostrum, eos harum ipsam temporibus illum quibusdam dolores repellendus aperiam eligendi asperiores, earum animi omnis consequuntur at est eveniet.",
    },
  ];
  const disImages = images;
  const [arrow, setArrow] = useState([true, true]);
  return (
    <div className="userGallery">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
          overflow: "hidden",
        }}
      >
        <div style={{ alignSelf: "center", display: "flex" }}>
          <MdKeyboardArrowLeft
            onClick={() => {
              setNum([num[0] - 1, num[1] - 1, num[2] - 1]);
              setInProp(true);
              if (num[0] - 1 < 0) {
                setArrow([true, false]);
              } else {
                setArrow([true, true]);
              }
            }}
            style={{
              alignSelf: "center",
              fontSize: "40px",
              cursor: "pointer",
              color: "#947fb1",
              display: arrow[1] ? "block" : "none",
            }}
          />

          {/* <TransitionGroup component={"ul"}> */}
          {/* // <CSSTransition key={image} timeout={1000} classNames="item"> */}
          {disImages.map(({ image }, index) =>
            index !== num[0] && index !== num[2] && index !== num[1] ? (
              <Avatar
                style={{
                  width: "0px",
                  margin: "0px",
                }}
                src={image}
              />
            ) : (
              <Avatar
                style={{
                  transform: index == num[1] ? "scale(1.4)" : "",
                }}
                src={image}
              />
            )
          )}
          {/* // </CSSTransition> */}
          {/* </TransitionGroup> */}

          <MdKeyboardArrowRight
            onClick={() => {
              // const temp = disImages[0];
              // disImages.shift();
              // const newArr = [...disImages, temp];
              // setDisImages(newArr);
              setInProp(true);

              setNum([num[0] + 1, num[1] + 1, num[2] + 1]);
              if (num[2] + 2 > disImages.length) {
                setArrow([false, true]);
              } else {
                setArrow([true, true]);
              }

              // const temp = disImages[0];
              // setDisImages([...disImages.filter((_, i) => i !== 0), temp]);
              // console.log(num);
            }}
            style={{
              alignSelf: "center",
              fontSize: "40px",
              color: "#947fb1",
              cursor: "pointer",
              display: arrow[0] ? "block" : "none",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Transition
            in={inProp}
            timeout={200}
            onEntered={() => {
              setInProp(false);
            }}
          >
            {(state) => {
              return (
                <p
                  style={{
                    transition: "200ms ease-out",
                    opacity: state == "entering" ? 0.2 : 1,
                  }}
                >
                  {images[num[1]].name}
                </p>
              );
            }}
          </Transition>
        </div>
      </div>
      <div>
        <Transition
          in={inProp}
          timeout={200}
          onEntered={() => {
            setInProp(false);
          }}
        >
          {(state) => {
            return (
              <p
                style={{
                  transition: "200ms ease-out",
                  opacity: state == "entering" ? 0.2 : 1,
                }}
              >
                {images[num[1]].comment}
              </p>
            );
          }}
        </Transition>
      </div>
    </div>
  );
};
interface IAvatar {
  src: string;
  style?: React.CSSProperties;
  ref?: LegacyRef<HTMLImageElement>;
}
const Avatar = ({ src, style = {}, ref }: IAvatar) => {
  return (
    <img
      ref={ref}
      className="avatar"
      src={src}
      style={{
        ...style,
      }}
    />
  );
};
