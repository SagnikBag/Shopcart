import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category,subCategory}) => {

const {products} =useContext(ShopContext)
const [related, setRelated] = useState([]);

useEffect(()=> {
    if (products && products.length > 0) {
        let productsCopy = products.slice();

        // Filter defensively: ignore items that are falsy and only apply a filter
        // when the corresponding prop (category / subCategory) is provided.
        productsCopy = productsCopy.filter((item) => {
            if (!item) return false;
            const itemCategory = item?.category ?? '';
            const itemSubCategory = item?.subCategory ?? item?.subcategory ?? '';

            if (category && itemCategory !== category) return false;
            if (subCategory && itemSubCategory !== subCategory) return false;
            return true;
        });

        const sliced = productsCopy.slice(0, 5);
        setRelated(sliced);

        console.log(sliced);
    }
}, [products, category, subCategory]);    


  return (
    <div>RelatedProducts</div>
  )
}

export default RelatedProducts