import React, { useContext } from 'react'
import { UserContext } from '../authContext/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
  const[product,Setproduct]=useContext(UserContext)
  let distinct_category=product && product.reduce((acc,cv)=>[...acc,cv.category],[]);
  distinct_category=[...new Set(distinct_category)];
  

  return (
    <>
      <nav className="h-full w-[15%] bg-zinc-100 flex flex-col items-center pt-5 ">
        <Link
          to="/create"
          className="mb-5 border-blue-200 p-3 border-1 text-sm text-sky-400"
        >
          Add new Product
        </Link>
        <hr className="w-[80%] opacity-10" />
        <h1 className="w-[80%] text-2xl mb-3">Category</h1>
        <ul className="w-[80%]">
          {distinct_category.map((val, index) => {
            return (
              <>
                <Link
                  key={index}
                  to={`/?category=${val}`}
                  className="  mb-3  flex items-center gap-3"
                >
                  {" "}
                  <span className=" h-5 w-5 rounded-full bg-blue-200"></span>{" "}
                  {val}
                </Link>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Nav