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
    </Routes> 
       
    </>
  );
}

export default App;
