
import React, {Component, useState} from 'react';
import {NavLink, Redirect, useNavigate} from 'react-router-dom';

import logo from './JooleLogo.png'
import HeaderComponent from "./HeaderComponent";

import axios from "axios";

 export default function LoginComponent() {
    let navigate=useNavigate();

    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    //const[token,setToken]=useState('')
    const handleSubmit=async (e)=>{
        if(UserName==='' || UserName==null || Password==='' || Password==null) {
            alert("Missing name or email!");
            return false;
        }

        e.preventDefault()
        axios.post('http://localhost:8080/JooleMarketplace/users/authenticate',{},{
            params: {
                username:UserName,
                password:Password
            }
        }).then(function (response){
            console.log(response.data)
            localStorage.setItem('token',response.data)
        }).catch(function (error){
            console.log(error)
        });
        setTimeout(navigate('/search'),3000);
    }
    return (
        <div className="Login">
            <HeaderComponent/>
            <img  className="Logo" src={logo} alt="Logo" />
            <form onSubmit={handleSubmit}>
            <div>
                <input className="username"
                       type="text" size="25"
                       placeholder="Username or Email"
                       value={UserName}
                       onChange={(e)=>setUserName(e.target.value)}/>
            </div>

            <div>
            <input className="password"
                   type="password" size="25"
                   placeholder="Password"
                   value={Password}
                   onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className="LoginButton" type="submit">Login</button>

            </form>
        </div>
    );
    //}
 }

 //export default LoginComponent;
