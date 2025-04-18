import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../authContext/Context';
import Loading from './Loading';
import axios from 'axios';

const Home = () => {
    const[product,Setproduct]=useContext(UserContext)
    const{search}=useLocation()
    const category = decodeURIComponent(search.split("=")[1]);
    const[filterCategory,SetfilterCategory]=useState(null)
  

    const getproductscategory= async() =>
    {
      try{
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
      
       
          SetfilterCategory(data);
      }
      catch(error)
      {
        console.log(error)
      }
    }

    useEffect(()=>
    {
      if(!filterCategory || category == "undefined") SetfilterCategory(product);
      if(category != "undefined") 
      {
        SetfilterCategory(()=> product.filter((val,index)=> val.category == category   ) )
      }

    },[category,product])
    
    if(!filterCategory) return <div> Loading...</div>
    
  return (
    <>
      <Nav />

      <div className="w-[85%]  p-10 flex items-start gap-3 justify-start  flex-wrap overflow-x-hidden overflow-y-auto">
        {filterCategory && filterCategory.map((val, index) => {
          return (
            <>
              <Link
                key={index}
                to={`/details/${val.id}`}
                className=" flex flex-col w-[19%] h-[40%]  items-center justify-center gap-2 p-5 border-2  border-zinc-300"
              >
                <div className="w-40 h-40 overflow-hidden hover:scale-110 ">
                  <img
                    className="w-full h-full object-contain "
                    src={val.image}
                    alt=""
                  />
                </div>
                <h1 className="tracking-tighter text-sm  w-full  ">
                  {val.title}
                </h1>
                <h1 className='tracking-tight text-xs w-full '>$ {val.price}</h1>
              </Link>
            </>
          );
        })}
      </div>
    </>
  ) 
}

export default Home