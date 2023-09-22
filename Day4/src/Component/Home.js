import React from "react";
import '../assets/css/Home.css'
import { Link } from "react-router-dom";
const Home = () =>{

    return(
        <div>
        <div style={{ backgroundImage:`url("i2.jpg")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}> 
        <div className="display">
            <div className="font-style1">&emsp;&emsp;PICASSO</div>
            <div style={{marginLeft: "830px", display: "inline-flex"}}>
            <Link style={{textDecoration: "none"}} to="/"><div style={{textIndent: "40px"}} className="font-style1">LOGIN</div></Link>
            <Link style={{textDecoration: "none"}} to="/signup"><div style={{textIndent: "40px"}} className="font-style1">SIGN UP</div></Link>
            <Link style={{textDecoration: "none"}} to="/contactUs"><div style={{textIndent: "40px"}} className="font-style1">CONTACT US</div></Link>
            <Link style={{textDecoration: "none"}} to="/admin"><div style={{textIndent: "40px"}} className="font-style1">ADMIN</div></Link>
            </div>  
        </div>
        <div className="font-style2">I do not evolve, I am. There is, in art, neither past, nor future. <br></br>Art that is not in the present will never be.</div>
        <div className="font-style3">- Pablo Picasso</div>
        <div style={{marginLeft: "208px", marginTop: "45px"}}>
        <Link to="/buy"><button className="button1">BUY</button></Link>&emsp;&emsp;
        <Link to="/sell"><button className="button2">SELL</button></Link>
        </div>
        </div><br></br><br></br>
        {/* <div className="font-style4"></div>
        <div className="buynow-display">
        <div className="buy-box"><img alt="" src="i3.jpg" height="250px" width="400px"></img><br></br><br></br><div className="font-style5">₹ 4000</div><button className="buynow-btn">BUY NOW</button>&emsp;<button className="buynow-btn">BID NOW</button></div>
        <div className="buy-box"><img alt="" src="i1.jpg" height="250px" width="400px"></img></div>
        <div className="buy-box"><img alt="" src="i4.jpg" height="250px" width="400px"></img></div>
        </div><br></br><br></br><br></br><br></br> */}
        </div>
    )
}
export default Home;