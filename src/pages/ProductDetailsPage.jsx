import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { products as resProducts } from '../components/products';

export const ProductDetailsPage = () => {
    const { products }=useSelector((state)=>state);

    const resdata=resProducts;
    const { id }=useParams()
    console.log(id)
  let res=""
    useEffect(()=>{
        res=resdata.filter(ele=>ele.restaurant_id==id)
    },[])
  
useEffect(()=>{
    console.log(res)
})
  return (
    <div>
        {console.log(res)}
    </div>
  )
}
