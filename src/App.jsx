import "./App.css"
import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import AboutPage from "./Pages/About/About"
import Service from "./Pages/Service/Service"
import Home from "./Pages/Home/Home"


function App() {
  return (
    <>

    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/service"  element={<Service/>} />
    </Routes> 
       
    </>
  );
}

export default App;
