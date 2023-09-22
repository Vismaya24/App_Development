import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Styles.css'; 

const Users= () =>{
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
        <h1>&emsp;&emsp;&emsp;&emsp;&emsp;User Details</h1>
        <table>
  <tr>
    <th>Firstname</th>
    <th>User Name</th>
    <th>Email</th>
    <th>Mobile Number</th>
  </tr><br></br>
  <tr>
    <td>Peter</td>
    <td>peter_12</td>
    <td>peter12@gmail.com</td>
    <td>8987466373</td>
  </tr><br></br>
  <tr>
    <td>griffin_33</td>
    <td>Griffin</td>
    <td>griffin33@gmail.com</td>
    <td>9873679474</td>
  </tr><br></br>
  <tr>
    <td>Joe</td>
    <td>Jo_oe</td>
    <td>jooee24@gmail.vcom</td>
    <td>6463536373</td>
  </tr><br></br>
  <tr>
    <td>John</td>
    <td>John_john</td>
    <td>john123@gmail.com</td>
    <td>7894677334</td>
  </tr>
  </table>
        </div>
        </div></>
    )
}
export default Users;