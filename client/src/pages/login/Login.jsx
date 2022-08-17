import "./login.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {

  const  userRef=useRef();
  const passwordRef=useRef();
  const {dispatch,isFetching} =useContext(Context)

  const handleSubmit= async(e) =>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try{
      const res=await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS",payload: res.data})
    }
    catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }
  // console.log(isFetching)

  return (
    <div className="login">
    
      <form  className="loginForm"  onSubmit={handleSubmit}>
      <span className="loginTitle">Login</span>
        <label >Username</label>
        <input 
        type="text" 
        className="loginInput" 
        placeholder="Enter your username..."
        ref={userRef}
        ></input>
        <label >Password</label>
        <input type="password"className="loginInput"  placeholder="Enter your password..." ref={passwordRef}></input>
      <button className="loginButton"  type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton">
      <Link to="/register" className="link">Register</Link></button>
      
      
    </div>
  )
}
