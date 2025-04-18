import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../authContext/Context';

const Details = () => {
    const [products,setproducts]=useContext(UserContext)
    const{id}=useParams()
    const navigate=useNavigate()
    const [product,setproduct]=useState(null)
    
    useEffect(() => {
      if (!product) {
        setproduct(products.filter((val) => val.id == id)[0]);
      }
    }, [products, id, product]);

    const handblack=()=>
    {
        navigate(-1)
    }
    if(!product) return <div className='p-10'> Loading ...</div>

    const productRemove=()=>
    {
      const FilterProducts=products.filter((val,index)=> val.id == id ? !index : index)
      setproducts(FilterProducts)
      localStorage.setItem("products",JSON.stringify(FilterProducts))
      navigate(-1)
    }
    
  return (
    <div className="w-full h-full bg-zinc-200">
      <div className="w-[70%] h-full m-auto p-[10%]">
        <div className="flex items-center justify-center w-full p-10 rounded-md gap-5 bg-white">
          <div className="w-50 h-50">
            <img
              className="w-full h-full object-contain "
              src={product.image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h1 className="text-xl">{product.title}</h1>
            <h1 className="text-sm text-zinc-500">{product.category}</h1>
            <h1>${product.price} </h1>
            <h1 className="text-xs tracking-tight">{product.description}</h1>
            <div className="flex gap-5 items-center">
              <button onClick={productRemove}  className="text-sm px-4 py-1 border-1 border-red-300 rounded-md text-red-400 ">
                Delete
              </button >
              <Link to={`/edit/${product.id}`} className="  border-1 border-orange-300 rounded-md text-orange-400 px-4 py-1 text-sm">
                Edit
              </Link>
            </div>
            <button
              onClick={handblack}
              className="px-5 py-1 bg-zinc-500 rounded-md text-zinc-200 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details