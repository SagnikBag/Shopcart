import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category,subCategory}) => {

const {products} =useContext(ShopContext)
const[related,setRelated] = useState([]

useEffect(()=>{
    if(products.length>0){
        let productsCopy = products.slice();
        productsCopy =productsCopy.filter((item)=> category === item.category);
        productsCopy = productsCopy.filter(()=>subCategory === item.subCategory);

        console.log(productsCopy.slice(0,5));
        
    }
},[products])    

)

  return (
    <div>RelatedProducts</div>
  )
}

export default RelatedProducts