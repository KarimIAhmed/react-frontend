import React, {Component,useEffect, useState} from 'react';
import SignedinHeader from "./SignedinHeader";
import logo from "./images/JooleLogo.png";
import './Header.css'
import profilePicture from "./images/img.png";
import fan from "./images/fan1.bmp"
import axios from "axios";
export default function ProductComponent() {
    let token=localStorage.getItem("token");
    const AuthStr = 'Bearer '.concat(token) ;

    const [product,setProduct]=useState([])
    const [fil,setFil] =useState(0);
    const [w,setW] =useState(0);
    const [dba,setDba]=useState(0);
    const [diameter,setDiameter]=useState(0);
    const [lowCFM,setLowCFM] = useState(Number.MAX_VALUE);
    const [lowW,setLowW] = useState(Number.MAX_VALUE);
    const [lowDBA,setLowDBA] = useState(Number.MAX_VALUE);
    const [lowDia,setLowDia] = useState(Number.MAX_VALUE);

    useEffect(()=> {
        axios.get('http://localhost:8080/JooleMarketplace/products', { headers: { Authorization: AuthStr } })
            .then(function (response) {
                //console.log(response.data)
                setProduct(response.data)
                //console.log(product[0].technicalDetails);
                for(let i=0;i<=product.length;i++){
                    setLowCFM(Math.min(lowCFM,product[i].technicalDetails.airflow))
                    setLowW(Math.min(lowW,product[i].technicalDetails.fanSpeed))
                    setLowDBA(Math.min(lowDBA,product[i].technicalDetails.operatingVoltage))
                    setLowDia(Math.min(lowDia,product[i].technicalDetails.power))
                    console.log(lowW);
                }

            }).catch(function (error) {
            //console.log(error)
        })
    },[]);
    return(
        <div>
            <img src={logo} alt="Logo" style={{width:200,position:"fixed",top:0,left:0}}/>
            <SignedinHeader/>
            <div className="sidePanel">
                <h5 style={{color:"black",backgroundColor:"lightgrey"}}>Product Type</h5>
                <h5 style={{color:"black",backgroundColor:"lightgrey"}}>Technical Specifications</h5>

                <p style={{color:"black",fontSize:10}}>Airflow(CFM)</p>
                <input type="range" min="0" max="400" className="slider" id="myRange" onChange={(e)=>setFil(e.target.value)}/>
                <p style={{color:"black",fontSize:20}}>Value: {fil}</p>

                <p style={{color:"black",fontSize:10}}>Max Power(W)</p>
                <input type="range" min="0" max="4000" className="slider" id="myRange" onChange={(e)=>setW(e.target.value)}/>
                <p style={{color:"black",fontSize:20}}>Value: {w}</p>

                <p style={{color:"black",fontSize:10}}>Sound at max speed(dBA)</p>
                <input type="range" min="0" max="1000" className="slider" id="myRange" onChange={(e)=>setDba(e.target.value)}/>
                <p style={{color:"black",fontSize:20}}>Value: {dba}</p>

                <p style={{color:"black",fontSize:10}}>Fan Sweep diameter (in)</p>
                <input type="range" min="0" max="1000" className="slider" id="myRange" onChange={(e)=>setDiameter(e.target.value)}/>
                <p style={{color:"black",fontSize:20}}>Value: {diameter}</p>


            </div>

                <div className="card">
                    {product.filter((val)=>{
                            if(val.technicalDetails.airflow<fil
                            && val.technicalDetails.fanSpeed<w
                            && val.technicalDetails.operatingVoltage<dba
                            && val.technicalDetails.power<diameter) return val;
                        })
                    .map((product,i)=>{
                    return (<div className="container">
                    <img src={fan} alt="Avatar" style={{width:'100%'}}/>
                    <h3 style={{color:"cadetblue"}}>{product.productBrand}</h3>
                    <div style={{backgroundColor:"lightgrey"}}>
                {product.technicalDetails.airflow} CFM <br/>
                {product.technicalDetails.fanSpeed} at max speed <br/>
                {product.technicalDetails.operatingVoltage} DBA at max sped<br/>
                {product.technicalDetails.power} fan sweep diameter
                    </div>
                    <p style={{color:"red"}}>Past specifications:<br/>10 firm/1492 global</p>
                    </div>)
                })}
                </div>


        </div>
    )
}
