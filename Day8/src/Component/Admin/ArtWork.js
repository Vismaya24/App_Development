import React from "react";
import '../../assets/css/Admin.css'; 
import SideBar from "../Utils/SideBar";

const ArtWork = () =>{
    return(
      <>
      <div style={{display: "flex"}}>
        <SideBar/>
        <div style={{marginLeft: "250px"}}>
        <div className="head-text">ArtWork</div><br></br>
        <div>
          <table>
          <tr>
          <th>ART ID</th>
          <th>Art Name</th>
          <th>Artist</th>
          <th>Type</th>
          <th>Year</th>
          <th>Size</th>
          <th>Starting Price</th>
          <th>Highest Bid</th>
          </tr><br></br>
          <tr>
            <td>A123</td>
            <td>Sunset Boulevard</td>
            <td>Aneta Kajzer</td>
            <td>Painitng</td>
            <td>2023</td>
            <td>200 × 150 cm</td>
            <td>1,00,000</td>
            <td>2,30,000</td>
          </tr><br></br>
          <tr>
            <td>A845</td>
            <td>Julia Marlowe as Barbara Frietchie in the Play</td>
            <td>Everett Shinn</td>
            <td>Painitng</td>
            <td>1899</td>
            <td>95.9 × 75.6 cm</td>
            <td>2,00,00,000</td>
            <td>4,00,00,000</td>
          </tr><br></br>
          <tr>
            <td>A123</td>
            <td>Sunset Boulevard</td>
            <td>Aneta Kajzer</td>
            <td>Painitng</td>
            <td>2023</td>
            <td>200 × 150 cm</td>
            <td>1,00,000</td>
            <td>2,30,000</td>
          </tr><br></br>
          <tr>
            <td>A231</td>
            <td>Woodland Cabin</td>
            <td>Ralph Albert Blakelock</td>
            <td>Painitng</td>
            <td>1864</td>
            <td>35.4 × 51 cm</td>
            <td>2,00,000</td>
            <td>3,00,000</td>
          </tr><br></br>
          <tr>
            <td>B142</td>
            <td>Yaure Wooden Ceremonial Dance Mask</td>
            <td>Unknown African</td>
            <td>Painitng</td>
            <td>2023</td>
            <td>42.4 × 18.4 cm</td>
            <td>50,000</td>
            <td>75,000</td>
          </tr>
          </table>
        </div>
        </div>
        </div>
      </>
    )
}
export default ArtWork;