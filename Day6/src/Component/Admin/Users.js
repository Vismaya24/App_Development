import React, { useState } from "react";
import { Link} from "react-router-dom";
import '../../assets/css/Admin.css'; 
import SideBar from "../Utils/SideBar";

const Users= () =>{
  function ViewUsers(){
    return(
        <div>
          <table>
  <tr>
    <th>Name</th>
    <th>User Name</th>
    <th>Email</th>
    <th>Mobile Number</th>
    <th>Actions</th>
    <th></th>
  </tr><br></br>
  <tr>
    <td>Peter</td>
    <td>peter_12</td>
    <td>peter12@gmail.com</td>
    <td>8987466373</td>
    <td><button className="action-btn">Update</button>&emsp;<button className="action-btn">Delete</button></td>
  </tr><br></br>
  <tr>
    <td>griffin_33</td>
    <td>Griffin</td>
    <td>griffin33@gmail.com</td>
    <td>9873679474</td>
    <td><button className="action-btn">Update</button>&emsp;<button className="action-btn">Delete</button></td>
  </tr><br></br>
  <tr>
    <td>Joe</td>
    <td>Jo_oe</td>
    <td>jooee24@gmail.vcom</td>
    <td>6463536373</td>
    <td><button className="action-btn">Update</button>&emsp;<button className="action-btn" >Delete</button></td>
  </tr><br></br>
  <tr>
    <td>John</td>
    <td>John_john</td>
    <td>john123@gmail.com</td>
    <td>7894677334</td>
    <td><button className="action-btn">Update</button>&emsp;<button className="action-btn">Delete</button></td>
  </tr>
  </table>
        </div>
    );
}
function AddUsers() {
  return(
    <div>
      <div className="add-box"><br></br>
      <img src ="add-users.jpg" height="400px" width="400px" alt="" ></img>
      <form><br></br><br></br>
        <input className="add-users" type="text" placeholder="Name" id="Name"></input>
        <input className="add-users" type="text" placeholder="User Name" id="name"></input>
        <input className="add-users" type="text" placeholder="Email ID" id="email"></input>
        <input className="add-users" type="text" placeholder="Phone Number" id="Phone Number"></input><br></br><br></br>
        <button className="submit-users">ADD</button>
      </form>
      </div>
    </div>
  );
}
const [isToggled, setToggled] = useState(false);
const handleToggle = () =>{
  setToggled(!isToggled);
}
const [useButtonStyle, setButtonStyle] = useState(true);
const toggleButtonStyle = () =>{
  setButtonStyle(!toggleButtonStyle);
}
    return(
        <>
        <div style={{display: "flex"}}>
        <SideBar/>
        <div style={{marginLeft: "250px"}}>
        <div style={{marginLeft: "130px"}} className="head-text">User Details</div>
        <div onClick={toggleButtonStyle}>
        <button className={useButtonStyle ? 'add-btn' : 'view-btn'} onClick={handleToggle}>{isToggled ? 'View Users' : 'Add Users'}</button>
        </div>
        {isToggled ? <AddUsers /> : <ViewUsers />}
        </div>
        </div></>
    )
}
export default Users;