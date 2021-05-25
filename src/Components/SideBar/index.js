import React from "react";
import './style.sass';
import Logo from "../../assets/Logo.svg";
import Close from "../../assets/close.svg";
import facebook from "../../assets/mobile/facebook.svg";
import twitter from "../../assets/mobile/twitter.svg";
import instagram from "../../assets/mobile/instagram.svg";


const SideBar =({isHidden,hidden})=>{




  const closeNav=()=>
  {
    isHidden(false)
  }

  return(
    <div className={hidden?"sideContainer is-toggled":"sideContainer"}>

      <div className="d-flex flex-row mb-5 justify-content-between w-100 pr-3">
        <img src={Logo} alt="MyVPN Logo" />
        <img src={Close} alt="Close" onClick={()=>closeNav()} />

      </div>
      <div className="textContainerMenu">

        <label className="textMenu">About</label>
        <label className="textMenu">Features</label>
        <label className="textMenu">Pricing</label>
        <label className="textMenu">Testimonials</label>
        <label className="textMenu">Help</label>

      </div>
      <div className="buttonDivMenu">
        <p className="signIn-menu">Sign In</p>
        <button type="button" className="signUpButton"><p className="signUpText">Sign up</p>
        </button>
      </div>

      <div className="d-flex flex-column justify-content-between align-items-center w-100" >
        <div className="socialMedia m-2">
          <img className={"social-icon mr-3"} src={facebook} alt={"facebook"}/>
          <img className={"social-icon mr-3"} src={twitter} alt={"twitter"}/>
          <img className={"social-icon "} src={instagram} alt={"instagram"}/>


        </div>
        <label className="credits ml-sm-2">©2021MyVPN</label>
      </div>

    </div>
  )

}
export default SideBar;
