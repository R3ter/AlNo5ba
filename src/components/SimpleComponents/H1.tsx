interface IProps {
  children?: string;
}
export default ({ children }: IProps) => {
  return <h1 style={{ textAlign: "right", color: "#293974" }}>{children}</h1>;
};
