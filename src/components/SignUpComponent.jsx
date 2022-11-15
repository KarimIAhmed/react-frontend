import React, {Component, useState} from 'react';
import HeaderComponent from "./HeaderComponent";
import logo from "./images/JooleLogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Header.css';

export default function SignUpComponent(){
     let navigate=useNavigate()

const[username,setUserName]=useState('');
const[password,setPassword]=useState('');

const handleSubmit=async (e)=>{
    if(username==='' || username==null || password==='' || password==null) {
        alert("Name and password must be filled out!");
        e.preventDefault();
        return false;
    }
 e.preventDefault();
 axios.post('http://localhost:8080/JooleMarketplace/users/createUser',{},{
    params: {
        userName:username,
        userPassword:password
    }
 }).then(function (response){
   console.log(response)
     setTimeout(navigate('/'),3000);
 }).catch(function (error){
     alert("email already in use, please try logging in!");
     console.log(error)
 });
}


return (
    <div className="SignUp">
        <HeaderComponent/>
        <div className="form">
        <a href="/">
        <img  className="Logo" src={logo} alt="Logo" />
        </a>
        <form onSubmit={handleSubmit}>
            <div>
                <input className="username"
                       type="email"
                       placeholder="Enter your e-mail"
                       value={username}
                       onChange={(e)=>setUserName(e.target.value)}
                       //onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div>
                <input className="password"
                       type="password"
                       placeholder="Enter your password"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       //onChange={(e)=>onInputChange(e)}
                />
            </div>
            <button className="LoginButton" type="submit">Register</button>
        </form>
        </div>
    </div>
);
}
//}

//export default SignUpComponent;