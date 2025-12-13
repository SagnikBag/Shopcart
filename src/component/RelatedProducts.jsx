import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

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
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
       {related.map((item,index)=>(
         <ProductItem
         key={index}
         id={item._id}
         name={item.name}
         price={item.price}
         image={item.image}
       />
       ))}
      </div>
    </div>
  );
}

export default RelatedProducts