import React from "react";
import Nav from "../components/Nav";
import Home from "../components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "../components/Details";
import Create from "../components/Create";
import Edit from "../components/Edit"

const App = () => {
  const{search,pathname}=useLocation()
  
  return (
    <div className=" w-full h-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-sky-700 absolute left-[17%] top-[1%]">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default App;












// import React from 'react'

// const App = () => {
//   const handleClick=()=>
//   {
//     fetch("https://fakestoreapi.com/products").then(raw=> raw.json()).then(products=> console.log(products))
//     .catch(err=> console.log(err))
//   }
//   return (
//     <div>
//       <button onClick={handleClick} className='px-5 py-2 bg-emerald-600 '> get data</button>
//     </div>
//   )
// }

// export default App