import React, {useEffect, useState} from 'react';
import logo from "./images/JooleLogo.png";
import './Header.css';
import axios from "axios";
import Autocomplete from './searchfunction';
import SignedinHeader from "./SignedinHeader";
import {Link, useNavigate} from "react-router-dom";

export default function SearchComponent() {
    let navigate=useNavigate()
    let token=localStorage.getItem("token");
    const [brands,setBrands]=useState([]);
    useEffect(()=> {
        const AuthStr = 'Bearer '.concat(token);
        axios.get('http://localhost:8080/JooleMarketplace/products', { headers: { Authorization: AuthStr } })
            .then(function (response) {
                setBrands(response.data)
                for(let i=0;i<brands.length;i++){
                    brand.push((brands[i].productBrand));
                   // console.log(brand);
                }
            }).catch(function (error) {
            //console.log(error)
        })
    },[]);

    let brand= brands.map((b)=>{
        return b.productBrand;
    })

    ////////////////

    const[state,setState] =useState(false);
    const showDropdown=()=>{
        setState(true);
    }
    const hideDropdown=()=>{
        setState(false);
    }

    const [project,setProject]=useState([])
    useEffect(()=> {
        const AuthStr = 'Bearer '.concat(token);
        axios.get('http://localhost:8080/JooleMarketplace/projects', { headers: { Authorization: AuthStr } })
            .then(function (response) {
            //console.log(response.data)
            setProject(response.data)

        }).catch(function (error) {
            //console.log(error)
        })
    },[]);

    const handleChange=async (e)=> {
        if(token==null) navigate('/');
        const AuthStr = 'Bearer '.concat(token);
        axios.get('http://localhost:8080/JooleMarketplace/getproductsfromproject/' + e, {headers: {Authorization: AuthStr}})
            .then(function (response) {
                setBrands(response.data)
                brand = []
                for (let i = 0; i < brands.length; i++) {
                    brand.push((brands[i].productBrand));
                    // console.log(brand);
                }
            }).catch(function (error) {
            //console.log(error)
        })
    }
    const handleSubmit=(e)=>{
        <Link to={{pathname: '/products', state: {id: 1}}} >Here</Link>
        setTimeout(navigate('/products'),3000);
    }
    let arr2 = project.map((project,i)=>{
        if(project.projectId!=null) return (<option key={i}>{project.projectId}</option>)
    })


    //render() {
        return (
            <div>

                <SignedinHeader/>
                <div className="Search">
                    <img  className="Logo" src={logo} alt="Logo" />
                </div>

                <div className="select-form">
                <select className="dropdown-menu" onChange={event => handleChange(event.target.value)}>
                    <option></option>
                    {arr2}
                </select>
                <Autocomplete options={brand}
                              inputProps={{ className: "form-control" }}/>

                    <div className="submit-button" ><Link to={{pathname: '/products'}} ><button>submit</button></Link></div>
                </div>
            </div>
        );
   // }
}

//export default SearchComponent;