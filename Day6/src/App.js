import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import ContactUs from './Component/ContactUs';
import Admin from './Component/Admin/Admin';
import AdminLogin from './Component/Admin/AdminLogin';
import Sell from './Component/Sell';
import Buy from './Component/Buy';
import Orders from './Component/Admin/Orders';
import Users from './Component/Admin/Users';
import { UserProvider } from './Component/context/UserContext';
import Privacy from './Component/Legal/Privacy';
import Terms from './Component/Legal/Terms';
import FAQ from './Component/Legal/FAQ';
import Fun from './Component/Legal/Fun';
import DashBoard from './Component/Admin/DashBoard';
import Seller from './Component/Admin/Seller';
import ArtWork from './Component/Admin/ArtWork';
import ArtDetails from './Component/ArtDetails';

function App() {
  return (
    <div>
      <UserProvider>
      <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/sell" element={<Sell/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/fun" element={<Fun/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/fun" element={<Fun/>}></Route>
        <Route path="/seller" element={<Seller/>}></Route>
        <Route path="/artwork" element={<ArtWork/>}></Route>
        <Route path="/detail/:detailId" element={<ArtDetails/>}></Route>
      </Routes>
    </Router>
      </UserProvider>
    </div>
    
  );
}

export default App;
