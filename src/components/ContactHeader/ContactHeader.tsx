import "./style.scss";

import { TfiEmail, TfiMobile } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { useContext } from "react";
import SignInPopUp from "../PopUp/SignInPopUp/SignInPopUp";
import { Link } from "react-router-dom";
import SelectLang from "./SelectLang";
import { PopupContext } from "../Context/PopUpContext";
export default function ContactHeader() {
  const { openPopup } = useContext(PopupContext);
  return (
    <div className="ContactHeader">
      <div className="loginLang">
        <div className="lang">
          {/* <MdKeyboardArrowDown
            style={{
              alignSelf: "center",
              paddingLeft: "20px",
              fontSize: "23px",
            }}
          /> */}
          <SelectLang />
          {/* <p
            style={{
              alignSelf: "center",
            }}
          >
            Arabic
          </p> */}
          <MdOutlineLanguage
            style={{ alignSelf: "center", fontSize: "25px" }}
          />
        </div>
        <hr
          style={{
            height: "25px",
            alignSelf: "center",
          }}
        />
        <div
          onClick={() => {
            // onRegiClick.current(true);
            openPopup(<SignInPopUp />);
          }}
          style={{
            cursor: "pointer",
            alignSelf: "center",
            // width: "220px",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="loginButton">نسجيل الدخول / نسجيل حساب جديد</span>
          <FaRegUser
            style={{ alignSelf: "center", fontSize: "20px", flex: 1 }}
          />
        </div>
        {/* <SignInPopUp setShow={onRegiClick} /> */}
      </div>
      <Link to="/contactus">
        <div className="contactInfo">
          <div
            style={{
              alignSelf: "center",
              width: "140px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                alignSelf: "center",
              }}
            >
              walled@wda.com
            </span>
          </div>
          <TfiEmail style={{ alignSelf: "center" }} />
          <hr
            style={{
              height: "25px",
              alignSelf: "center",
            }}
          />
          <div
            style={{
              alignSelf: "center",
              width: "100px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                alignSelf: "center",
              }}
            >
              0524512545
            </span>
          </div>
          <TfiMobile style={{ alignSelf: "center", fontSize: "20px" }} />
        </div>
      </Link>
    </div>
  );
}
