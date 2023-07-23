import "./style.scss";

import { TfiEmail, TfiMobile } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { Fragment, useContext } from "react";
import SignInPopUp from "../PopUp/SignInPopUp/SignInPopUp";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import SelectLang from "./SelectLang";
import { PopupContext } from "../Context/PopUpContext";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { IoLogOutOutline } from "react-icons/io5";
export default function ContactHeader() {
  const { openPopup } = useContext(PopupContext);
  const navigate = useNavigate();
  const login = useRouteLoaderData("root") as {
    firstName: string;
    lastName: string;
  } | null;
  console.log(login);
  return (
    <div className="ContactHeader">
      <div className="loginLang">
        <div className="lang">
          <SelectLang />

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
        {!login ? (
          <div
            onClick={() => {
              // onRegiClick.current(true);
              openPopup(<SignInPopUp />);
            }}
            style={{
              cursor: "pointer",
              alignSelf: "center",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <span className="loginButton">نسجيل الدخول / نسجيل حساب جديد</span>
            <FaRegUser
              style={{ alignSelf: "center", fontSize: "20px", flex: 1 }}
            />
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <PopupState variant="dialog" popupId="demo-popup-menu">
              {(popupState) => (
                <Fragment>
                  <div
                    style={{
                      marginRight: "30px",
                      display: "flex",
                      direction: "rtl",
                      cursor: "pointer",
                      alignSelf: "center",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                    {...bindTrigger(popupState)}
                  >
                    <FaRegUser
                      style={{ alignSelf: "center", marginLeft: "10px" }}
                    />
                    مرحبا : {login.firstName + " " + login.lastName}
                  </div>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={() => {
                        navigate("/profile");
                        popupState.close();
                      }}
                    >
                      <ListItemIcon>
                        <FaRegUser
                          style={{
                            alignSelf: "center",
                            fontSize: "20px",
                            flex: 1,
                            color: "#3b6fb2",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText style={{}}>Profile</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <ListItemIcon>
                        <IoLogOutOutline
                          style={{
                            alignSelf: "center",
                            fontSize: "25px",
                            flex: 1,
                            color: "#b23b3b",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText>Logout</ListItemText>
                    </MenuItem>
                  </Menu>
                </Fragment>
              )}
            </PopupState>
          </div>
        )}
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
