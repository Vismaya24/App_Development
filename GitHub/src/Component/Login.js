import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import Popup from "./Utils/Popup";
import { login } from "./redux/UserSlice";
import { useDispatch } from 'react-redux' 
const Login = () => {
    
    const dispatch = useDispatch();
    const[formData, setFormData]=React.useState({
      username:'',
      password:''
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
  const navigate = useNavigate();
    const submitLoginForm = (e) =>{
      e.preventDefault();
      const formValues = Object.values(formData);
      if(!formValues.some(value => !value)){
        setMessage({
          type: 'success',
          content: 'Login Successful !'
        });
        setTimeout(() => {
          navigate('/');
      }, 2000);
      } else {
        setMessage({
          type: 'error',
          content: 'Please fill in all the fields'
        });
      }
      setPopupVisible(true);
      dispatch(login({
        username: formData.username
      }))
    }
    // const handleChange = (e) =>{
    //   setUser({
    //     ...user,[e.target.name]:e.target.value
    //   });
    // }
    // const submitForm = (e) => {
    //     e.preventDefault();
    // }
    return(
        <div style={{ backgroundImage:`url("img7.jpg")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div>
      <div className="flex">
      <div className="login-box"><br></br><br></br><br></br>
        <h1 style={{marginLeft:"95px"}}>Login</h1><br></br>
      <form style={{marginLeft:"95px"}} onSubmit={submitLoginForm}>
            <input className="login-input" placeholder="Username" type="text" name="username" id="username" onChange={eventHandler} /><br></br><br></br>
            <input className="login-input" placeholder="Password" type="password" name="password" id="password" onChange={eventHandler} onPaste={handlePaste}></input><br></br><br></br>
            <br></br>
              <button  className="login-button" type="submit">Login</button>
        </form>
        <br></br><div style={{textAlign: "center", marginLeft:"-5px"}}>OR</div><br></br>
        <div style={{marginLeft:"173px"}}>
          <Link to="https://accounts.google.com/v3/signin/identifier?hl=en-GB&ifkv=AYZoVhdkTnWTLTaJ7yqB3VUZmCy1yUa1BG3k7-PoEIBzWCYisC8NXwn-MqvivF97IzBuox3zc0sd7A&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1459164970%3A1694874678577928&theme=glif"><img className="icon" src="google.png" height="45px" width="45px"></img></Link>&emsp;&emsp;
          <Link to="https://www.instagram.com/"><img className="icon" alt="" src="insta.png" height="45px" width="45px"></img></Link>&emsp;&emsp;
          <Link to="https://www.facebook.com/"><img className="icon" alt="" src="fb.png" height="45px" width="45px"></img></Link>
         </div><br></br>
         <div style={{textAlign: "center", marginLeft:"-20px"}}>Doesn't have an account ? <Link style={{textDecoration: "none", color:"black"}}to="/signup">Sign Up</Link></div>
     
        </div>
      &emsp;&emsp;&emsp;
      </div>
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} />}
      </div>
          )
        }
export default Login;