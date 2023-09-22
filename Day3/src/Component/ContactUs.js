import React from "react";
import '../assets/css/Styles.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Popup2 from "./Utils/Popup2";
import { login } from "./redux/UserSlice";

const ContactUs = () =>{

   const dispatch=useDispatch();
   const [formData, setFormData]=React.useState({
    name: '',
    email: '',
    phonenumber: '',
    message: ''
   });
   const [isPopupVisible, setPopupVisible] = React.useState(false);
   const [message, setMessage] = React.useState({
    type: '',
    content: ''
   });

   const eventHandler = (e) =>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
   }
   const handlePaste = (e) =>{
    e.preventDefault();
    setMessage({
        ...message,
        type: 'error',
        content: 'Restricted Action'
    })
    setPopupVisible(true);
   }
   const submitLoginForm = (e) =>{
    e.preventDefault();
    const formValues = Object.values(formData);
    if(!formValues.some(value => !value)){
        setMessage({
            type: 'success',
            content: 'Submitted Successfully'
        });
    } else{
        setMessage({
            type: 'error',
            content: 'Please fill in all the fields'
        });
    }
    setPopupVisible(true);
    // dispatch(login({
    //     name: formData.name
    //   }))
   }

    return(
        <>
        <div style={{ backgroundImage:`url("i7.jpg")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className="display">
            <div className="font-style1">&emsp;&emsp;PICASSO</div>
            <div style={{marginLeft: "750px", display: "inline-flex"}}>
            <Link style={{textDecoration: "none"}} to="/"><div style={{textIndent: "40px"}} className="font-style1">HOME</div></Link>
            <Link style={{textDecoration: "none"}} to="/buy"><div style={{textIndent: "40px"}} className="font-style1">BUY</div></Link>
            <Link style={{textDecoration: "none"}} to="/sell"><div style={{textIndent: "40px"}} className="font-style1">SELL</div></Link>
            <Link style={{textDecoration: "none"}} to="/login"><div style={{textIndent: "40px"}} className="font-style1">LOGIN</div></Link>
            <Link style={{textDecoration: "none"}} to="/signup"><div style={{textIndent: "40px"}} className="font-style1">SIGN UP</div></Link>
            <Link style={{textDecoration: "none"}} to="/admin-login"><div style={{textIndent: "40px"}} className="font-style1">ADMIN</div></Link>
            </div>  
        </div><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "235px"}}>
                <div className="cbox1">
                <div style={{marginTop: "70px"}} className="contactus-style">We'd love to hear from you</div><br></br>
                <div className="contactus-style2">Email Address: picasso@gmail.com<br></br>Mobile Number: 80755308993</div><br></br><br></br>
                <div style={{marginLeft: "-20px"}}>
                <img style={{marginLeft: "20px"}} alt="" src="fb.png" height="40px" width="40px"></img>  
                <img style={{marginLeft: "20px"}} alt="" src="insta.png" height="40px" width="40px"></img>  
                <img style={{marginLeft: "20px"}} alt="" src="youtube.png" height="40px" width="40px"></img>  
                <img style={{marginLeft: "20px"}} alt="" src="pinterest.png" height="40px" width="40px"></img>  
                <img style={{marginLeft: "20px"}} alt="" src="twitter.png" height="40px" width="40px"></img>  
                </div>
                </div>
                <div style={{marginLeft: "125px"}} className="cbox1">
                    <div className="contactus-style">Contact Us</div><br></br>
                <form onSubmit={submitLoginForm}>
                    <input className="contact-input" type="text" name="name" id="name" placeholder="Enter Your Name"  onChange={eventHandler}></input><br></br><br></br>
                    <input className="contact-input" type="text" name="email" id="email" placeholder="Enter your Email Address"  onChange={eventHandler}></input><br></br><br></br>
                    <input className="contact-input" type="text" name="phonenumber" id="phonenumber" placeholder="Enter Your Mobile Number"  onChange={eventHandler}></input><br></br><br></br>
                    <textarea className="textarea" type="text" name="message" id="message" placeholder="Enter Your Message"  onChange={eventHandler} onPaste={handlePaste}></textarea><br></br><br></br>
                    <button className="contact-btn">SUBMIT</button>
                </form></div>
            </div>
            {isPopupVisible && <Popup2 message={message} togglePopup={() => setPopupVisible(false)} />}
        </div>
        </>
    )
}
export default ContactUs;