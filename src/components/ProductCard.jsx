import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = (props) => {
    const res=props.ele
    console.log(res)
  return (
    <>
    <Link to={`/res/${res.restaurant_id}`}>555
    <div style={{display:"flex", width:"400px"}}>
    <div>
        <img src={res.images[0].url}/>
    </div>
    <div>
        <div>
            <h1>{res.restaurant_name}</h1>
        </div>
        <div>
            {res.cuisines?.map((ele)=>{return (<h6>{ele.cuisines_name}</h6>)})}
        </div>
        <div>

        </div>
        <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
            <div>
                {
                    res.rating.restaurant_avg_rating
                } Popularity
            </div>
            <div>
                {
                    res.avg_cost_for_two
                } Cost for two
            </div>
        </div>
    </div>
    </div>
    </Link>
    </>
  )
}
