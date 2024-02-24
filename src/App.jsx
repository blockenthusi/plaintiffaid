import "./App.css"
import {Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import AboutPage from "./Pages/About/About"
import Service from "./Pages/Service/Service"
import Home from "./Pages/Home/Home"
import Contact from "./Pages/Contact/Contact"
import Signup from "./Pages/SignUp/Signup"
import Pricing from './Pages/Pricing/Pricing'
import Login from './Pages/Auth/Login/Login'
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword"
import Demo from "./Pages/Demo/Demo"

function App() {
  return (
    <>

    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/service"  element={<Service/>} />
      <Route path="/about"  element={<AboutPage/>} />
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/signup"  element={<Signup/>} />
      <Route path="/pricing"  element={<Pricing/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/signup"  element={<Signup/>} />
      <Route path="/forgotpassword"  element={<ForgotPassword/>}/>
      <Route path="/request"  element={<Demo/>} />
    </Routes> 
       
    </>
  );
}

export default App;
