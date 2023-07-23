import UserGallery from "../UserGallery/UserGallery";
import "./style.scss";
export default () => {
  return (
    <div className="studentsReviews">
      <h2 style={{ color: "#273572", fontSize: "30px" }}>اراء الطلاب</h2>
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
