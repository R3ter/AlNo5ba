interface IProps {
  text: string;
}
import "./style.scss";
export default ({ text }: IProps) => {
  return (
    <div className="heroTitle">
      <h1 style={{ alignSelf: "center" }}>{text}</h1>
    </div>
  );
};
