import React, {useState} from "react";
import Logo from '../../assets/Logo.svg'
import Menu from '../../assets/menu 1.svg'
import './style.sass'
import SideBar from "../SideBar";
const MenuBar =()=>{
  const [show,setShow]=useState(false);

    return(
        <div className="navContainer">

          <div className="logo-container">
          <img src={Logo} alt="MyVPN Logo" />
          </div>
          <div className="textContainer">

            <label className="text">About</label>
            <label className="text">Features</label>
            <label className="text">Pricing</label>
            <label className="text">Testimonials</label>
            <label className="text">Help</label>

          </div>
          <div className="buttonDiv">
            <p className="signIn">Sign In</p>
            <button type="button" className="signUpButton"><p className="signUpText">Sign up</p>
            </button>
          </div>
          {!show &&<img src={Menu} alt="Menu-icon" className={"menu-icon"} onClick={()=>setShow(!show)}  />}
          <SideBar isHidden={(evt)=>setShow(evt)} hidden={show}/>
        </div>
    )

}
export default MenuBar;
