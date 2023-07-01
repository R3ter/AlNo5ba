export default ({
  text,
  type,
}: {
  text: string;
  type: React.HTMLInputTypeAttribute;
}) => {
  return (
    <div style={{ direction: "rtl" }}>
      <h3>{text}</h3>
      <input
        type={type}
        placeholder={text}
        style={{
          padding: "10px",
          width: "95%",
          borderRadius: "10px",
          border: "1px #b6b0b0 solid",
          paddingRight: "20px",
        }}
      />
    </div>
  );
};
