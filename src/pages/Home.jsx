import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"

const Home = () => {
  const [title, setTitle] =useState("Hello the text change")
  const handleclick =()=>{
    setTitle('Hi it worked')
  }
  return (
    <div>
       <Navbar/>
        <h3>Change my text on click</h3>
      <button className="btn btn-dark my-3 mx-5" onClick={handleclick}>Click me</button>
    </div>
  )
}

export default Home  