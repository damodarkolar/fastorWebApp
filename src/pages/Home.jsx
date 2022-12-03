import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from '../components/ProductCard';

import { products } from '../components/products';
import { fetchResData } from '../redux/getProducts/actionTypes';




export const Home = () => {


    const dispatch=useDispatch()

  React.useEffect(()=>{
    dispatch(fetchResData())
},[])
const { resData, setResData }=useState([]);

const { products }=useSelector((state)=>state);





  return (
    <>
        <div>
        {products.resData?.map((ele)=><ProductCard ele={ele}/>)}
        </div>
    </>
    
  )
}
