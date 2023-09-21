import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import ContactUs from './Component/ContactUs';
import Admin from './Component/Admin';
import AdminLogin from './Component/AdminLogin';
import Sell from './Component/Sell';
import Buy from './Component/Buy';
import Orders from './Component/Orders';
import Users from './Component/Users';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/sell" element={<Sell/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
