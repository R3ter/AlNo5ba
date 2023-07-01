import "./style.scss";

import { TfiEmail, TfiMobile } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineLanguage } from "react-icons/md";
import RegistrationPopUs from "../PopUp/ResistrationPopUp/RegistrationPopUs";
import { useRef } from "react";
export default () => {
  const onRegiClick = useRef((bool: boolean) => {});
  return (
    <div className="ContactHeader">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "140px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
            width: "220px",
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
        <RegistrationPopUs setShow={onRegiClick} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          textAlign: "center",
          marginRight: "30px",
        }}
      >
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
