import React from "react";
import '../../assets/css/Admin.css'; 
import SideBar from "../Utils/SideBar";

const Orders =()=>{
    return(
        <>
        <div style={{display: "flex"}}>
        <SideBar/>
        <div style={{marginLeft: "250px"}}>
          <div style={{marginLeft: "180px"}} className="head-text">Order Details</div>
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