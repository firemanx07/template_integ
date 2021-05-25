import React from "react";
import facebook from "../../assets/mobile/facebook.svg"
import Logo from "../../assets/Logo.svg"
import instagram from "../../assets/mobile/instagram.svg"
import twitter from "../../assets/mobile/twitter.svg"
import "./style.sass"
const Footer=()=> {
return(
  <div className={"ftdiv"}>
    <div className="cardDiv">
      <div className="subscribeDiv">
        <label className="subscribe">Subscribe Now for Get Special Features!</label>
        <p className="text1">Let's subscribe with us and find the fun.</p>
      </div>
      <div>
        <button type="button" className="btn-getStarted button">Subscribe Now</button>
      </div>
    </div>
    <div className="footer">
      <div className="firstDiv">
        <img className="logo" src={Logo} alt={"logo"}/>
        <p className="myVpn"><b>MyVPN</b> is a private virtual network that has unique features and has high security.
        </p>
        <div className="socialMedia ">
          <img className={"social-icon mr-sm-3"} src={facebook} alt={"facebook"}/>
          <img className={"social-icon mr-sm-3"} src={twitter} alt={"twitter"}/>
          <img className={"social-icon "} src={instagram} alt={"instagram"}/>


        </div>
        <label className="credits ml-sm-2">©2021MyVPN</label>
      </div>
      <div className="threeCol">
        <div className="footerCol">
          <label><b>Product</b></label>
          <label>Download</label>
          <label>Pricing</label>
          <label>Locations</label>
          <label>Server</label>
          <label>Countries</label>
          <label>Blog</label>
        </div>
        <div className="footerCol">
          <label><b>Engage</b></label>
          <label>LaslesVPN ?</label>
          <label>FAQ</label>
          <label>Tutorials</label>
          <label>About Us</label>
          <label>Privacy Policy</label>
          <label>Terms of Service</label>
        </div>
        <div className="footerCol">
          <label><b>Earn Money</b></label>
          <label>Affiliate</label>
          <label>Become Partner</label>
        </div>
      </div>
    </div>
  </div>
)
}
export default Footer
