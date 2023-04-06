import React from "react";
import "./topbar.scss";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MailIcon from "@mui/icons-material/Mail";
import Menu from "../menu/Menu";

function Topbar({openMenu,setOpenMenu}) {

  return (
    <div>
      <div className={"topbar " +( openMenu && "active")}>
        <div className="wrapper">
          <div className="left">
            <div className="logo">genius.</div>
            <div className="infoItem">
              <PersonAddIcon className="icon" />
              <span>+91 6239458969</span>
            </div>
            <div className="infoItem">
              <MailIcon className="icon" />
              <span>RohitKumar@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setOpenMenu(!openMenu)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
