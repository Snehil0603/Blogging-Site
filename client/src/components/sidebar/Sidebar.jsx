// 
import axios from "axios"
import "./sidebar.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function Sidebar() {
  const [cats,setCats]=useState([])

  useEffect(()=>{
    const getCats=async ()=>
  {
    const res= await axios.get("/categories")
    setCats(res.data)
  }
  getCats()
},[])
  return (
    <div className="sidebar">

     <div className="sidebarItem">
     <span className="sidebarTitle">FOLLOW US</span>
     <div className="sidebarSocial">
   <a href="https://www.facebook.com/profile.php?id=100076455288971"><i className="sidebarIcon fa-brands fa-facebook"></i></a> 
   <a href="https://www.linkedin.com/in/snehil-gupta-2b416622a/"><i className="sidebarIcon fa-brands fa-linkedin"></i></a>
   <a href="https://www.instagram.com/snehil_0603/"><i className="sidebarIcon fa-brands fa-instagram"></i></a>
   <a href="https://github.com/Snehil0603"><i className="sidebarIcon fa-brands fa-github"></i></a>
     </div>
     </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGRORIES</span>
      <ul className="sidebarList">
     <li><img className="sideImg" src="https://i.postimg.cc/fyknwX9t/Screenshot-143.png" /></li>
     <li><img className="sideImg" src="https://i.postimg.cc/DzctL5Q4/Screenshot-147.png" /></li>
     <li><img className="sideImg" src="https://i.postimg.cc/hvNwcYn6/Screenshot-145.png" /></li>
     <li><img className="sideImg" src="https://i.postimg.cc/9FqKJcth/Screenshot-148.png" /></li>
     <li><img className="sideImg" src="https://i.postimg.cc/FHyqXGBC/Screenshot-146.png" /></li>
     <li><img className="sideImg" src="https://i.postimg.cc/CKJQz5Yj/Screenshot-144.png" /></li>
     <li className="li-text">...and many more</li>
      </ul>
      </div>
     

     </div>
    
  )
}
