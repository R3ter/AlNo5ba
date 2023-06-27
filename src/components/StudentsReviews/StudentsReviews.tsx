import UserGallery from "../UserGallery/UserGallery";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "100px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#273572" }}>اراء الطلاب</h2>
      <div>
        <p>
          خلافا للاعتقاد السائد فإن لوريم إيبسوم ليس نصا عشوائيا، بل إن له جذور
          مي الأدب اللاتيني
        </p>
        <div>
          <UserGallery />
        </div>
      </div>
    </div>
  );
};
