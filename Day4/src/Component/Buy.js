import React from "react";
import NavBar from "./Utils/NavBar";
import "../assets/css/Buy.css";

const Buy = () =>{
    return(
        <>
       <NavBar /><br></br><br></br><br></br><br></br><br></br><br></br>
       <div className="buy-text1">It’s More Than Paint and Some Brushes</div><br></br>
       <div style={{display: "inline-flex"}}>
        <div className="category-box"><img src="old.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;&emsp;Old Paintings</h3></div>
        <div className="category-box"><img src="contemp.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;Contemporary Art</h3></div>
        <div className="category-box"><img src="abstract.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;&emsp;Abstract Art</h3></div>
        <div className="category-box"><img src="sculpture.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;&emsp;&emsp;Sculpture</h3></div>
       </div>
        </>
    )
}
export default Buy;