import "./topBar.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";



export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF="http://localhost:5000/images/"
  const handleLogout =() =>{
    dispatch({type:"LOGOUT"})
  }
  return (
   
    <div className="top">
    <div className="topLeft">
    <nav >
  <a className="navbar-brand" href="#">
    <img src="https://i.postimg.cc/3JBK7Nhj/Screenshot-142.png" style={{width :"100px" ,height:"90px", marginTop:"10px"}} alt="" />
  </a>
</nav>
    <span className="brand-label">WeBlog</span> 
    </div>
    <div className="topCenter">
        <ul className="topList">
                <li className="topListItem">
                <Link to="/" style={{textDecoration:"none",color:"inherit"}}>HOME</Link>
                </li>
                <li className="topListItem">
                <Link to="/about" className="link" style={{textDecoration:"none",color:"inherit"}}>ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link to="/contact"  className="link" style={{textDecoration:"none",color:"inherit"}}>CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link to="/write" style={{textDecoration:"none",color:"inherit"}}>WRITE</Link>
                </li>
                <li className="topListItem" onClick={handleLogout} >
                {user && "LOGOUT"}
                </li>
                
        </ul>
    </div>
    <div className="topRight">
    
    {
      user ? (
        <Link to="/settings">
        <img className="topImg" src={PF+user.profilePic} alt="" />
        </Link>

      ) :(
        <ul className="topList">
        <li className="topListItem">
        <Link className="link" to="/login">
        LOGIN
        </Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/register">
        REGISTER
        </Link>
        </li>
       
       
        </ul>
      )
    }
    
    <i className="topSearch fa fa-user"></i>
    </div>
      
    </div>
  )
}
