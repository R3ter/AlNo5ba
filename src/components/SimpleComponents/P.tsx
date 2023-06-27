interface IProps {
  children?: string;
  style?: React.CSSProperties;
}
export default ({ children, style = {} }: IProps) => {
  return <p style={{ textAlign: "right", ...style }}>{children}</p>;
};
