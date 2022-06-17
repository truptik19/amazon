import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { products } from "./productdata";
export default function Filter() {
    
    const [items,setItem]= useState('Filter by Category');

    const handleOnChange = (e) =>{
        setItem(e.target.value);
        
    };

const renderResult =() =>{
    let result;
    items==='Select category' ? (result='Filter by Category'):(result=(items));
    return result;
};

    

return (
        <>
        <h2>{renderResult()}</h2>

            <select value={items}  onChange={handleOnChange}>
                <option value='Filter by Category '>Select category</option>
                <option value='All Products'>All Products</option>
                <option value='Electronics'>Electronics</option>
                <option value='Mobiles'>Mobiles</option>
                <option value='Health & Fitness'>Health & Fitness</option>
                <option value='Home & Kitchen'>Home & Kitchen</option>
                <option value='Accessories'>Accessories</option>
            </select>

           
        </>
)
        
        if(items==='All Products'){
            fetch('/getproducts').then((response)=>{
            return response.json()
             } )
        }
}

               
             
            
            