import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Styles.css'; 

const Orders =()=>{
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
          <h1>&emsp;&emsp;&emsp;&emsp;&emsp;Order Details</h1>
        <table>
  <tr>
    <th>Order ID</th>
    <th>User ID</th>
    <th>User Name</th>
    <th>Time</th>
    <th>Date</th>
    <th>Art Work ID</th>
  </tr><br></br>
  <tr>
    <td>C1256</td>
    <td>11425</td>
    <td>peter_12</td>
    <td>8:49</td>
    <td>12-04-2023</td>
    <td>ART 112</td>
  </tr><br></br>
  <tr>
    <td>C1796</td>
    <td>1655</td>
    <td>griffin33</td>
    <td>3:19</td>
    <td>15-04-2023</td>
    <td>ART 101</td>
  </tr><br></br>
  <tr>
    <td>C1711</td>
    <td>1445</td>
    <td>jooee24</td>
    <td>10:02</td>
    <td>16-04-2023</td>
    <td>ART 201</td>
  </tr><br></br>
  <tr>
    <td>C1514</td>
    <td>2011</td>
    <td>john123</td>
    <td>11:22</td>
    <td>17-04-2023</td>
    <td>ART 201</td>
  </tr>
  </table>
        </div>
        </div></>
    )
}
export default Orders;