import React from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Works from "./components/Works"
import Resume from "./components/Resume"
import "./App.css"


export default function App(){
  return(
   <main>
    <Navbar/>
    <About/>
    <Works/>
    <Contact/>
    <Resume/>
    <Home/>
   </main>
  )
}
