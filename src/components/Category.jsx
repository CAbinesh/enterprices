import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate=useNavigate()
  const categories = [
     {name:'Toys',offers:'25-50% off',image:"small17.png"},
    {name:'KidsWear',offers:'flat 35% off',image:'small18.png'},
    { name: "Electronics",offers:"50-80% off", image: "/small1.png" },
    { name: "Clothes",offers:"45-70% off", image: "/small2.png" },
    { name: "Makeup",offers:"50-80% off", image: "/small3.png" },
    { name: "Cellphone",offers:"20-50% off", image: "small4.png" },
    { name: "Fan",offers:"20-60% off", image: "small5.png" },
    { name: "Books",offers:"50-80% off", image: "small6.png" },
    { name:"shoes",offers:"50-55% off",image:"small7.png"},
    {name:"Belts",offers:"50-80% off",image:"small8.png"},
    {name:"Women footwear",offers:"5-15% off",image:'small9.png'},
    {name:"Wallet",offers:"60-80% off",image:'small10.png'},
    {name:"Handbags",offers:"5-15% off",image:'small11.png'},
    {name:"Bags",offers:'25-45% off',image:'small12.png'},
    {name:"Sunglass",offers:"50-70% off",image:'small13.png'},
    {name:"Western",offers:"flat50% off",image:'small14.png'},
    {name:"Perfumes",offers:"upto80% off",image:'small15.png'},
    {name:"watches",offers:"40-80% off",image:'small16.png'}
   
  ];
  return (
    <div className="category-container">
      <h2>SHOP BY CATEGORY</h2>
      <div className="category-grid">
      {categories.map((cat,indx)=>(
        <div className="category-card" key={indx}>
            <img src={cat.image} alt="images" />
            <p style={{fontWeight:'bolder'}}>{cat.name}</p>
            <p style={{fontWeight:'bolder'}}>{cat.offers}</p>
            <button onClick={()=>navigate(`/category/${encodeURIComponent(cat.name)}`)} >Shop now</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Category;
