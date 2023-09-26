import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Popup from "./Utils/Popup";
const SignUp = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    username: '',
    phonenumber: '',
    email: '',
    password: '',
    confirm: ''
   });

  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const [message, setMessage] = React.useState({
        type: '',
        content: '',
        url: '',
        btn: ''
    });
    const eventHandler = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      })
  }
  const showMessage = (type, content, url = '', btn = 'Got it') => {
    setMessage({ type, content, url, btn });
    setPopupVisible(true);
};
  const handlePaste = (e) => {
    e.preventDefault();
    showMessage('error', 'Restricted action');
};
const handleGotItClick = () => {
  if (message.url) {
      navigate(message.url);
  }
  setPopupVisible(false);
};
const handleSubmit = (e) => {
  e.preventDefault();
  const formValues = Object.values(formData);
  if (!formValues.some(value => !value)) {
    showMessage('success', 'Sign Up Successful !', '/login', 'Login');
} else {
    showMessage('error', 'Please fill in all fields');
}
  }

    return(
      <div style={{ backgroundImage:`url("img1.jpg")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="flex">
      <div className="signup-box"><br></br><h1 style={{marginLeft:"95px"}}>Sign Up</h1>
      <form style={{marginLeft:"95px"}} onSubmit={handleSubmit}>
            <input placeholder="Name"className="signup-input" type="text" name="name" id="name" onChange={eventHandler} /><br></br>
            <input placeholder="User Name" className="signup-input" type="text" name="username" id="username" minLength={8} maxLength={12} onChange={eventHandler} /><br></br>
            <input placeholder="Mobile Number" className="signup-input" type="text" name="phonenumber" id="phonenumber" onChange={eventHandler}></input><br></br>
             <input placeholder="Email" className="signup-input" type="text" name="email" id="email" minLength={8} maxLength={30} onChange={eventHandler} /><br></br>
            <input placeholder="Password" className="signup-input" type="password" name="password" id="password" minLength={8} maxLength={12} onChange={eventHandler} onPaste={handlePaste}></input><br></br>
            <input placeholder="Confirm Password" className="signup-input" type="password" name="confirm" id="confirm" minLength={8} maxLength={12} onChange={eventHandler} onPaste={handlePaste}></input><br></br><br></br>
            <br></br>
            <button className="signup-button" type="submit">Sign Up</button>
        </form><br></br><div style={{textAlign: "center", marginLeft:"-5px"}}>OR</div><br></br>
         <div style={{marginLeft:"173px" }}>
          <Link to="https://accounts.google.com/v3/signin/identifier?hl=en-GB&ifkv=AYZoVhdkTnWTLTaJ7yqB3VUZmCy1yUa1BG3k7-PoEIBzWCYisC8NXwn-MqvivF97IzBuox3zc0sd7A&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1459164970%3A1694874678577928&theme=glif"><img className="icon" alt="" src="google.png" height="45px" width="45px"></img></Link>&emsp;&emsp;
          <Link to="https://www.instagram.com/"><img className="icon" alt="" src="insta.png" height="45px" width="45px"></img></Link>&emsp;&emsp;
          <Link to="https://www.facebook.com/"><img className="icon" alt="" src="fb.png" height="45px" width="45px"></img></Link>
         </div><br></br>
         <div style={{textAlign: "center", marginLeft:"-20px"}}>Already have an account ? <Link style={{textDecoration: "none", color:"black"}}to="/login">Login</Link></div>
      </div>&emsp;&emsp;
      &emsp;      
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
      </div>
    )
}
export default SignUp;
