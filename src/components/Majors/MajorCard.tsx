interface IProps {
  title: string;
  image: string;
  desc: string;
}
export default ({ title, desc, image }: IProps) => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "white",
        width: "250px",
        borderRadius: "0 0 10px 10px",
        marginBottom: "50px",
      }}
    >
      <img width={"100%"} height={"200px"} src={image} />
      <h2 style={{ margin: "0", fontSize: "20px", color: "#8870a9" }}>
        {title}
      </h2>
      <p
        style={{
          margin: "1",
          lineHeight: "20px",
          fontSize: "15px",
          marginBottom: "30px",
        }}
      >
        {desc}
      </p>
    </div>
  );
};
