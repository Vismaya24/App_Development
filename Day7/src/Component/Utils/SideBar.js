import React from "react";
import { Link } from "react-router-dom";

const SideBar = () =>{
    return(
        <>
        <div style={{backgroundImage: `url(".jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="admin-nav">
        <div className="admin-text1"><br></br>ADMIN</div><hr color="ffffffcf" width="190px" size="1"></hr>
        <br></br><br></br><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/dashboard" ><button className="admin-textbox">DASHBOARD</button></Link>&emsp;<img alt="" src="dashboard.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/admin" ><button className="admin-textbox">ADMIN</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><button className="admin-textbox">USERS</button></Link>&emsp;<img alt="" src="group.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><button className="admin-textbox">ORDERS</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/seller" ><button className="admin-textbox">SELLER</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/artwork" ><button className="admin-textbox">ART WORK</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link></div>
        </div>
        </>
    )
}
export default SideBar;