import { useEffect, useRef, useState } from "react";
import img4 from "./../../assets/img4.png";
import "./style.scss";
export default () => {
  const [counter, setCounter] = useState([0, 0, 0]);
  const numbers = [200, 16, 50];
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let timer: number;
    let counting = false;

    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && counting == false) {
          counting = true;
          console.log("awdwda");
          timer = setInterval(() => {
            setCounter((counter) => [
              counter[0] + (counter[0] < numbers[0] ? 1 : 0),
              counter[1] + (counter[1] < numbers[1] ? 1 : 0),
              counter[2] + (counter[2] < numbers[2] ? 1 : 0),
            ]);
            if (
              counter[0] == numbers[0] &&
              counter[1] == numbers[1] &&
              counter[2] == numbers[2]
            ) {
              if (timer) {
                clearTimeout(timer);
              }
            }
            return timer;
          }, 10);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={elementRef} className="numbers">
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
        <NumberWithText number={counter[0]} text="عدد الطلاب" />
        <NumberWithText number={counter[1]} text="عدد الكوسات" />
        <NumberWithText number={counter[2]} text="عدد المعلميين" />
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
    <div className="numberWithText">
      <h2>{number}+</h2>
      <p>{text}</p>
    </div>
  );
};
