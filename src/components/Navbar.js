import { Link } from "react-router-dom"
import { useState } from "react"
export default function Navbar() {
  return(
    <ul className="nav">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link to={"/resume"}>Resume</Link>
      </li>
      <li>
        <Link to={"/portfolio"}>Portfolio</Link>
      </li>
    </ul>
  )
}