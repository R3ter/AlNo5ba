import "./style.scss";

import { TfiEmail, TfiMobile } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineLanguage } from "react-icons/md";
import { useRef } from "react";
import SignInPopUp from "../PopUp/SignInPopUp/SignInPopUp";
export default () => {
  const onRegiClick = useRef((bool: boolean) => {});
  return (
    <div className="ContactHeader">
      <div className="loginLang">
        <div className="lang">
          <MdKeyboardArrowDown
            style={{
              alignSelf: "center",
              paddingLeft: "20px",
              fontSize: "23px",
            }}
          />
          <p
            style={{
              alignSelf: "center",
            }}
          >
            Arabic
          </p>
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
            onRegiClick.current(true);
          }}
          style={{
            cursor: "pointer",
            alignSelf: "center",
            // width: "220px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              alignSelf: "center",
              fontSize: "13px",
            }}
          >
            نسجيل الدخول / نسجيل حساب جديد
          </span>
          <FaRegUser style={{ alignSelf: "center", fontSize: "20px" }} />
        </div>
        <SignInPopUp setShow={onRegiClick} />
      </div>
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
    </div>
  );
};
