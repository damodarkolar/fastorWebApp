import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from '../components/ProductCard';

import { products as resProducts } from '../components/products';
import { fetchResData } from '../redux/getProducts/actionTypes';




export const Home = () => {


    const dispatch=useDispatch()

  React.useEffect(()=>{
    dispatch(fetchResData())
},[])

const { products }=useSelector((state)=>state);

const resdata=resProducts;



  return (
    <>
        <div style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
        {resdata?.map((ele)=><ProductCard ele={ele}/>)}
        </div>
    </>
    
  )
}
