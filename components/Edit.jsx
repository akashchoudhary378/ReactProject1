import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../authContext/Context";
import { nanoid } from "nanoid";

const Edit = () => {
  const [product, Setproduct] = useContext(UserContext);
  const [title, Settitle] = useState("");
  const [image, Setimage] = useState("");
  const [category, Setcategory] = useState("");
  const [price, Setprice] = useState("");
  const [description, Setdescription] = useState("");
  const navigate = useNavigate();
  const{id}=useParams()

  console.log(id)
  const data=product.filter((val)=> String(val.id) === id )[0]
  console.log(data)

  return (
    <div className="w-full h-screen p-10 ">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (
              title.trim().length < 5 ||
              image.trim().length < 5 ||
              price.trim().length < 1 ||
              category.trim().length < 5 ||
              description.trim().length < 5
            ) {
              alert("Each and every input must have atlest 4 character");
              return;
            }
            const products = {
              id: id,
              title,
              image,
              category,
              price,
              description,
            };

            const editproducts=product.map((val,index)=> val.id == id ? {...val , title:title, image:image ,category:category, price: price,description:description } : val )
            Setproduct(editproducts);
            localStorage.setItem(
              "products",
              JSON.stringify(editproducts)
            );
            navigate("/");
          }}
          action=""
          className=" flex flex-col items-center gap-5 "
        >
          <h1 className="w-1/2 text-xl font-semibold">Edit Product</h1>
          <input
            onChange={(e) => {
              Setimage(e.target.value);
            }}
            value={image}
            type="url"
            placeholder={data.image}
            className=" w-1/2 px-5 py-2 bg-zinc-200 outline-none"
          />
          <input
            onChange={(e) => {
              Settitle(e.target.value);
            }}
            value={title}
            type="text"
            placeholder={data.title}
            className=" w-1/2 px-5 py-2 bg-zinc-200 outline-none"
          />
          <div className="w-1/2 flex gap-5">
            <input
              onChange={(e) => {
                Setcategory(e.target.value);
              }}
              value={category}
              type="text"
              placeholder={data.category}
              className=" w-1/2 px-5 py-2 bg-zinc-200 outline-none"
            />
            <input
              onChange={(e) => {
                Setprice(e.target.value);
              }}
              value={price}
              type="number"
              placeholder={data.price}
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
            placeholder={data.description}
          ></textarea>
          <div className="w-1/2">
            <button className="mb-5 border-amber-400 p-3 border-1 text-sm text-amber-600">
              Edit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
