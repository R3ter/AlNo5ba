interface IProps {
  text: string;
}
export default ({ text }: IProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{text}</h1>
    </div>
  );
};
