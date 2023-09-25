import React from "react";
import '../../assets/css/Admin.css'; 
import { useState } from "react";
import Footer from "../Utils/Footer";
import SideBar from "../Utils/SideBar";

const Admin = () =>{

    function ViewAdmin(){
        return(
            <>
              <table>
              <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USER NAME</th>
              <th>EMAIL ID</th>
              <th>MOBILE NUMBER</th>
              <th>PASSCODE</th>
              <th>ACTIONS</th>
              <th></th>
              </tr><br></br>
              <tr>
              <td>101</td>
              <td>Aarush</td>
              <td>Aarus101</td>
              <td>Aarush101@gmail.com</td>
              <td>8075530893</td>
              <td>aarush@505</td>
              <td><button className="action-btn">Update</button>&emsp;<button className="action-btn">Delete</button></td>
              </tr><br></br>
              <tr>
              <td>102</td>
              <td>Ameer</td>
              <td>Ameer102</td>
              <td>Ameer102@gmail.com</td>
              <td>8714566373</td>
              <td>ameer@745</td>
              <td><button className="action-btn">Update</button>&emsp;<button className="action-btn">Delete</button></td>
              </tr><br></br>
              <tr>
              <td>103</td>
              <td>Ayra</td>
              <td>Ayra103</td>
              <td>Ayra103@gmail.com</td>
              <td>7975466373</td>
              <td>ayra@5254</td>
              <td><button className="action-btn">Update</button>&emsp;<button className="action-btn">Delete</button></td>
              </tr><br></br>
              </table>
            </>
        )
    }
    function AddAdmin() {
        return(
            <>
            <div className="add-box"><br></br>
            <img src ="admin.jpg" height="400px" width="400px" alt="" ></img>
            <form><br></br><br></br>
            <input className="add-users" type="text" placeholder="Admin Name" id="name"></input>
            <input className="add-users" type="text" placeholder="Admin User Name" id="admin-username"></input>
            <input className="add-users" type="text" placeholder="Email ID" id="admin-email"></input>
            <input className="add-users" type="text" placeholder="Mobile Number" id="mobile-number"></input>
            <input className="add-users" type="text" placeholder="Passcode" id="admin-passcode"></input><br></br><br></br>
            <button className="submit-users">ADD</button>
            </form>
            </div>
            </>
        )
    }
    const [isAdminToggled, setAdminToggled] = useState(false);
    const handleAdmin = () =>{
        setAdminToggled(!isAdminToggled);
    }
    const [useAdminButton, setAdminButton] = useState(true);
     
    return(
        <>
        <div style={{display: "flex"}}>
        <SideBar/>
        <div style={{marginLeft: "250px"}}>
            <div className="head-text">ADMIN</div><br></br>
            <div><button className={useAdminButton ? 'add-btn' : 'view-btn'} onClick={handleAdmin}>{isAdminToggled ? 'View Admin' : 'Add Admin'}</button></div>
            {isAdminToggled ? <AddAdmin/> : <ViewAdmin/>}
        </div>
        </div>
        </>
    )
}
export default Admin;