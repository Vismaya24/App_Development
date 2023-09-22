import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Styles.css'; 


const Admin = () =>{
    return(
        <>
        <div style={{display: "flex"}}>
        <div style={{backgroundImage: `url("adminbg1.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="admin-nav">
            <div className="admin-text1"><br></br>ADMIN</div><hr color="ffffffcf" width="190px" size="1"></hr>
            <br></br><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/admin" ><button className="admin-textbox">DASHBOARD</button></Link>&emsp;<img alt="" src="dashboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><button className="admin-textbox">USERS</button></Link>&emsp;<img alt="" src="group.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><button className="admin-textbox">ORDERS</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link></div>
        </div>
        <div style={{marginLeft: "250px"}}>
            <h1>&emsp;DASHBOARD</h1>
            <div style={{display: "inline-flex"}}>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Products Sold<br></br>1421<br></br><img style={{marginLeft: "180px", marginTop: "20px"}} src="shopping-cart.png" height="40px" width="40px" alt=""></img></div></div>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Net Profit<br></br>₹ 20,00,505<br></br><img style={{marginLeft: "180px", marginTop: "20px"}} src="rupee.png" height="40px" width="40px" alt=""></img></div></div>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Customer Satisfaction<br></br>93 %<br></br><img style={{marginLeft: "180px", marginTop: "20px"}} src="heart.png" height="40px" width="40px" alt=""></img></div></div>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">New Customer<br></br>4576<br></br><img style={{marginLeft: "180px", marginTop: "20px"}} src="customer.png" height="40px" width="40px" alt=""></img></div></div>&emsp;&emsp;
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Admin;