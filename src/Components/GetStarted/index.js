import React from "react";
import Mac1 from '../../assets/Illustration 11st.svg'
import './style.sass'
import Location from "../../assets/location.svg"
import User from "../../assets/user.svg"
import Servers from "../../assets/servers.svg"
import divider from "../../assets/divider.svg"

const GetStarted =()=>{
  return(
    <div className="sectionOne">
      <div className="bigContainer">
        <div className="box1">
          <p className="firstText">Want anything to be easy with MyVPN.</p>
          <p className="secondText">Provide a network for all your needs with ease and fun using MyVPN discover
            interesting features from us.</p>
          <button type="button" className="btn-getStarted  mb-lg-4" style={{'borderRadius':'10px'}}>
            <div className={"rubik-bold-white-16px"}>Get Started </div>
          </button>
        </div>
        <div className="mac">
          <img src={Mac1}  alt={"Get Started"} className="mac"/>
        </div>
      </div>
<div className="mycard">
      <div className="divTwo ">
        <div className="threeCom">
          <div className="icon">
           <img src={User} alt={"user"}/>

            </div>
            <div className="location">
                <div className={"rubik-bold-black-pearl-25px"}><b>90+</b></div>
        <div className={"rubik-normal-scarpa-flow-20px"}>Users</div>
      </div>
    </div>

        <div className={"h-75"}><img src={divider} className="h-25" alt={"divider"}/></div>
  <div className="threeCom">
    <div className="icon">
      <img src={Location} alt={"location"}/>
            </div>
            <div className="location">
                <div  className={"rubik-bold-black-pearl-25px"}><b>30+</b></div>
  <div className={"rubik-normal-scarpa-flow-20px"}>Locations</div>
</div>
</div>

        <div className={"h-75"}> <img src={divider}  alt={"divider"}/></div>
<div className="threeCom">
<div className="icon">
  <img src={Servers} alt={"servers"}/>
</div>
<div className="location">
<div  className={"rubik-bold-black-pearl-25px"}><b>50+</b></div>
<div className={"rubik-normal-scarpa-flow-20px"}>Servers</div>
</div>
</div>
</div>
</div>
<div className="mycard-mobile ">
  <div className="card-item  " style={{margin:'20px'}}>
    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded"
         >
    <div className="icon">
      <img src={User} alt={"user"}/>

    </div>
    <div className="location">
      <div className={"rubik-bold-black-pearl-25px"}><b>90+</b></div>
      <div className={"rubik-normal-scarpa-flow-20px"}>Users</div>
    </div>
    </div>
  </div>
  <div className="card-item   " style={{margin:'20px'}}>
    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded"
    >
      <div className="icon">
        <img src={Location} alt={"location"}/>

      </div>
      <div className="location">
        <div className={"rubik-bold-black-pearl-25px"}><b>30+</b></div>
        <div className={"rubik-normal-scarpa-flow-20px"}>Locations</div>
      </div>
    </div>
  </div>
  <div className="card-item  ">
    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded"
    >
      <div className="icon">
        <img src={Servers} alt={"servers"}/>
      </div>
      <div className="location">
        <div  className={"rubik-bold-black-pearl-25px"}><b>50+</b></div>
        <div className={"rubik-normal-scarpa-flow-20px"}>Servers</div>
      </div>
    </div>
  </div>
</div>

</div>
  )

}
export default GetStarted;
