interface IProps {
  children?: string;
}
export default ({ children }: IProps) => {
  return <p style={{ textAlign: "right" }}>{children}</p>;
};
