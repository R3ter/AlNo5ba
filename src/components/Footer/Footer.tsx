import { MdEmail } from "react-icons/md";
import "./style.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div>
      <div className="Footer">
        <div>
          <div className="column">
            <h3>النخبة التعليمية</h3>
            <p>
              خلافا للاعثفاد السائد فإن لوربم إيبصوم ليس نصا عشوائها بل إى له
              تذور مي الأدب اللائيئي الكلاسيكي مند العام 5& فبل الميلاد مما
              يجعله أكتر من 2000 عام في القدم. قام وهو (McClintock Richard)
              "البروفسور "رتشارد ماك لنوك بروميسور اللعة اللحاممة هاقدنصبدئى فى
              فيرحئيا
            </p>
          </div>
          <div className="column">
            <h3>لنكات تهمك</h3>
            <p>الرئيسية</p>
            <p>من نحن</p>
            <p>الخدمات </p>
          </div>
          <div className="column">
            <h3>
              <br></br>
            </h3>
            <p>اشهادات</p>
            <p>العقود والشركة</p>
            <p>سياسات المسخدم</p>
            <p>الاسئلة الشائعة</p>
            <Link to={"/contactUs"}>
              <p>اتصل بنا</p>
            </Link>
          </div>
          <div className="column">
            <h3 style={{ textAlign: "center" }}>تواصل معنا</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <BsFillTelephoneFill
                className="footerIcon"
                style={{
                  padding: "7px",
                  transform: "scaleX(-1)",
                }}
              />
              <p>054215425845</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <MdEmail
                className="footerIcon"
                style={{
                  padding: "7px",
                }}
              />
              <p>email@gwad.com</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <HiLocationMarker
                className="footerIcon"
                style={{ padding: "7px" }}
              />
              <p>Jerusalem - awd </p>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};
