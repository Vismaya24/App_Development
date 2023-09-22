import React from "react";
import NavBar from "./Utils/NavBar";
import "../assets/css/Sell.css";

const Sell = () => {
    return(
        <>
        <NavBar /><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="sell-text1">Crafting Masterpieces, Unleashing Emotions</div><br></br>
        <div style={{marginLeft: "600px"}}>
            <h2>Sell Your Art Work</h2>
            <form>
                <input className="sell-input" id="text"  name="artname" placeholder="Art Work Name"></input><br></br><br></br>
                <input className="sell-input" id="text"  name="price" placeholder="Price"></input><br></br><br></br>
                <input className="sell-input" id="text"  name="type" placeholder="Type"></input><br></br><br></br>
                <input className="sell-input" id="text"  name="year" placeholder="Year"></input><br></br><br></br>
                <input className="sell-input" id="text"  name="size" placeholder="Size"></input><br></br><br></br>
                <button className="sell-btn">Submit</button>
            </form>
        </div>
        </>
    )
}
export default Sell;