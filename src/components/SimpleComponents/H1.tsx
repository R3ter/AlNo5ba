interface IProps {
  children?: string;
  style?: React.CSSProperties;
}
export default ({ children, style = {} }: IProps) => {
  return (
    <h1 style={{ textAlign: "right", color: "#293974", ...style }}>
      {children}
    </h1>
  );
};
