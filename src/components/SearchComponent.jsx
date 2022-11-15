import React, {useEffect, useState} from 'react';
import logo from "./images/JooleLogo.png";
import './Header.css';
import axios from "axios";
import Autocomplete from './searchfunction';
import SignedinHeader from "./SignedinHeader";

export default function SearchComponent() {
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
            console.log(response.data)
            setProject(response.data)

        }).catch(function (error) {
            //console.log(error)
        })
    },[]);

    const temp=["ab","cd","de","faodso"]
    const arr2 = project.map((project,i)=>{
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
                <select className="dropdown-menu">
                    {/*{arr2}*/}
                    <option>temp</option>
                    <option>temp2</option>
                </select>

                <Autocomplete options={temp}//brand}
                              inputProps={{ className: "form-control" }}/>

                 <button>submit</button>
                </div>
            </div>
        );
   // }
}

//export default SearchComponent;