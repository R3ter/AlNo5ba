import { MdEmail } from "react-icons/md";
import "./style.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import Copyright from "../Copyright/Copyright";
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
            <p>اتصل بنا</p>
          </div>
          <div className="column">
            <h3 style={{ textAlign: "center" }}>تواصل معنا</h3>
            <div style={{ display: "flex" }}>
              <BsFillTelephoneFill
                style={{ alignSelf: "center", margin: "0px", fontSize: "18px" }}
              />
              <p>054215425845</p>
            </div>
            <div>
              <MdEmail
                style={{ alignSelf: "center", margin: "0px", fontSize: "18px" }}
              />
              <p>email@gwad.com</p>
            </div>
            <div>
              <HiLocationMarker
                style={{ alignSelf: "center", fontSize: "18px" }}
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