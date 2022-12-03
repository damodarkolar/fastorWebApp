import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import { ProductCard } from '../components/ProductCard';

import { products } from '../components/products';




export const Home = () => {

const { resData, setResData }=useState([]);

const productsRes=products;
const fetchResData=()=>{
    const resDataApi=`https://staging.fastor.in/v1/m/restaurant?city_id=118&&`
    fetch(resDataApi,{
        method:"POST",
        body:{},
        headers:{
            Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInBob25lIjoiOTgxODk3OTQ1MCIsImRpYWxfY29kZSI6Iis5MSIsImxhc3RfcGFzc3dvcmRfdXBkYXRlIjoiMjAyMi0wMS0yNVQxMTo1NTo0Ny4wMDBaIiwiaWF0IjoxNjcwMDg0NjYwLCJleHAiOjE2NzczNDIyNjB9.01CTYmib1V8mG2ikrrLdKU7ep4qVwOyPEA_71aXV9xg"
        }
    })
    .then(res=>res.json())
    .then((data)=>{console.log(data)})
    .catch((err)=>{})
}

useEffect(()=>{
    fetchResData()
},[])


  return (
    <>
        <div>
        {productsRes?.map((ele)=><ProductCard ele={ele}/>)}
        </div>
    </>
    
  )
}
