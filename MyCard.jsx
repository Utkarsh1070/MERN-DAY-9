import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardNav from "./CardNav";
import CardFooter from "./CardFooter";

const MyCard = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    const productInfo = fetch("https://dummyjson.com/products")
        .then(result => result.json())
        .then((data) => {
            setProducts(data.products);
        });
        
}, []); 
  return (
    <>
    <CardNav/>
  
  <div className="d-flex justify-content-between flex-wrap">
         {products.map(product =>
        <Card
        key={product.id}
           title = {product.title}
           description = {product.description}
           price = {product.price}
           brand = {product.brand}
           thumbnail = {product.thumbnail}
           />)}
  </div> 
  <CardFooter/>
  </>
  )
};

export default MyCard;