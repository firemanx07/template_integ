import React from "react";

import "./style.sass"
import boxcheck from "../../assets/box-check.svg"
import box from "../../assets/box.svg"
const Plans=()=> {
return(
  <div className="boxes">
    <div className="box-container">
       <img src={box} alt={"box"}/>
      <p className="freePlan">Free Plan</p>
      <div className="fourText">
        <div className="iconText">
            <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Unlimited Bandwitch</p>
            </div>
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Encrypted Connection</p>
            </div>
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">No Traffic Logs</p>
            </div>
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Works on All Devices</p>
            </div>
        </div>
        <div className=" buttonDiv2">
            <p className=" freeText">Free</p>
            <button type=" button" className=" btn btn-outline-danger select">
                <p className=" selectText">Select</p>
            </button>
        </div>
    </div>
    <div className=" box-container">
         <img src={box} alt={"box"}/>
        <p className=" freePlan">Standard Plan</p>
        <div className=" fourText">
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Unlimited Bandwitch</p>
            </div>
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Encrypted Connection</p>
            </div>
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">No Traffic Logs</p>
            </div>
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Works on All Devices</p>
            </div>
            <div className=" iconText">
              <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Connect Anyware</p>
            </div>
        </div>
        <div className=" buttonDiv2">
            <p className=" freeText"><b>$9</b>/ mo</p>
            <button type=" button" className=" btn btn-outline-danger select">
                <p className=" selectText">Select</p>
            </button>
        </div>
    </div>
    <div className=" box-container ">
         <img src={box} alt={"box"}/>
        <p className=" freePlan">Premium Plan</p>
        <div className=" fourText">
            <div className=" iconText">
                 <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Unlimited Bandwitch</p>
            </div>
            <div className=" iconText">
                 <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Encrypted Connection</p>
            </div>
            <div className=" iconText">
                 <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">No Traffic Logs</p>
            </div>
            <div className=" iconText">
                 <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Works on All Devices</p>
            </div>
            <div className=" iconText">
                 <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Connect Anyware</p>
            </div>
            <div className=" iconText">
                 <img src={boxcheck} alt={"box"}/>
                <p className=" littleText">Get New Features</p>
            </div>
        </div>
        <div className=" buttonDiv2">
            <p className=" freeText"><b>$12</b>/ mo</p>
            <button type=" button" className=" btn btn-outline-danger  select">
                <p className=" selectText">Select</p>
            </button>
        </div>
    </div>
</div>
)
}
export default Plans
