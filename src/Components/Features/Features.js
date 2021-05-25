import React from "react";
import "./styles.sass"
import man2 from "../../assets/Illustration 22.svg"
import check from "../../assets/check.svg"

const Features=()=> {

  return (
    <div>
    <div className="bigDiv">
    <div className="div1">
      <img className="image" src={man2} alt={"Mac2"}/>

    </div>
    <div className="container1">
      <div className="wraap">
        <div className="dive">
          <div>
            <p className="firstText">We Provide Many Features You Can Use</p>
          </div>
          <div>
            <p className="secondText">You can explore the features that we provide with fun and have their own
              functions each feature.</p>
          </div>
        </div>
        <div className="dive2">
          <div className="twoComp">
            <img className="svgIcon" src={check} alt={"check"}/>
            <p className="thirdText">Powerfull online protection.</p>
          </div>
          <div className="twoComp">
            <img className="svgIcon" src={check} alt={"check"}/>
            <p>Internet without borders.</p>
          </div>
          <div className="twoComp">
            <img className="svgIcon" src={check} alt={"check"}/>
            <p>Supercharged VPN</p>
          </div>
          <div className="twoComp">
            <img className="svgIcon" src={check} alt={"check"}/>
            <p>No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="twoComponents">
    <label className="text3">Choose Your Plan</label>
    <p className="text4">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
  </div>
    </div>
)
}
export default Features
