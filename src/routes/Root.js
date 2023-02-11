import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


export default function Root(){
  return(
    <div>
      <h1>Root Element</h1>
      <Navbar />
      < Outlet />
    </div>
  )
}