import React from "react";
import '../../assets/css/Admin.css'; 
import { useState } from "react";
import CanvasJSReact from '@canvasjs/react-charts';
import Footer from "../Utils/Footer";
import SideBar from "../Utils/SideBar";
import WeekSale from "./WeekSale";
import YearSale from "./YearSale";
import NetProfit from "./NetProfit";


const DashBoard = () =>{
    
    return(
        <>
        <div style={{display: "flex"}}>
            <SideBar/>
        <div style={{marginLeft: "250px"}}>
            <div className="head-text" style={{marginLeft: "480px"}}>DASHBOARD</div>
            <div style={{display: "inline-flex", marginLeft: "250px"}}>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Products Sold<br></br>1421<br></br><img style={{marginLeft: "180px", marginTop: "20px"}} src="shopping-cart.png" height="40px" width="40px" alt=""></img></div></div>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Net Profit<br></br>₹ 20,00,505<br></br><img style={{marginLeft: "180px", marginTop: "20px"}} src="rupee.png" height="40px" width="40px" alt=""></img></div></div>&emsp;&emsp;
            </div>
            <div>
            </div><br></br><br></br><br></br>
        <YearSale/>
        <br></br><br></br><br></br>
        <WeekSale/><br></br><br></br><br></br>
        <NetProfit/><br></br><br></br>
        </div>
        </div><br></br><br></br><br></br><br></br>
        <Footer/>
        </>
    )
}
export default DashBoard;