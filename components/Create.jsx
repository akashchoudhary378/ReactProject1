import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../authContext/Context";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Create = () => {
   const[product,Setproduct]= useContext(UserContext)
    const[title,Settitle]=useState('')
    const[image,Setimage]=useState('')
    const[category,Setcategory]=useState('')
    const[price,Setprice]=useState('')
    const [description, Setdescription] = useState('');
    const navigate=useNavigate()
    

  return (
    <div className="w-full h-screen p-10 ">
      <div >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if(
                title.trim().length<5 ||
                image.trim().length<5 ||
                price.trim().length<1 ||
                category.trim().length<5 ||
                description.trim().length<5) {
                alert("Each and every input must have atlest 4 character")
                return;
            }
            const products={
                id:nanoid(),
                title,
                image,
                category,
                price,
                description
            }
            Setproduct([...product,products])
            localStorage.setItem(
              "products",
              JSON.stringify([...product, products])
            );
            toast.success("Product Added Successfully")
            navigate('/')
           
          }}
          action=""
          className=" flex flex-col items-center gap-5 "
        >
          <h1 className="w-1/2 text-xl font-semibold">Add New Product</h1>
          <input
            onChange={(e) => {
              Setimage(e.target.value);
            }}
            value={image}
            type="url"
            placeholder="image-link"
            className=" w-1/2 px-5 py-2 bg-zinc-200 outline-none"
          />
          <input
            onChange={(e) => {
              Settitle(e.target.value);
            }}
            value={title}
            type="text"
            placeholder="Title"
            className=" w-1/2 px-5 py-2 bg-zinc-200 outline-none"
          />
          <div className="w-1/2 flex gap-5">
            <input
              onChange={(e) => {
                Setcategory(e.target.value);
              }}
              value={category}
              type="text"
              placeholder="Category"
              className=" w-1/2 px-5 py-2 bg-zinc-200 outline-none"
            />
            <input
              onChange={(e) => {
                Setprice(e.target.value);
              }}
              value={price}
              type="number"
              placeholder="Price"
              className=" w-1/2 px-5 py-2 bg-zinc-200 outline-none"
            />
          </div>
          <textarea
            onChange={(e) => {
              Setdescription(e.target.value);
            }}
            value={description}
            className="w-1/2 px-5 py-2 bg-zinc-200 outline-none h-50 resize-none"
            name=""
            id=""
            placeholder="Enter Product Description"
          ></textarea>
          <div className="w-1/2">
            <button 
              
              className="mb-5 border-blue-200 p-3 border-1 text-sm text-sky-400"
            >
              Add new Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
