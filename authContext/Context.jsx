import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const UserContext=createContext()

const Context = (props) => {
    const [product, Setproduct] = useState(
      JSON.parse(localStorage.getItem("products")) || null);

    // const getData = () => {
    //   axios("https://fakestoreapi.com/products")
    //     .then((products) => Setproduct(products.data))
    //     .catch((err) => console.log(err));
    // };
    // console.log(product)  

    // useEffect(() => {
    //   getData();
    // }, []);

  return (
    <div>
        <UserContext.Provider value={[product,Setproduct]}>
        {props.children}
        </UserContext.Provider>
    </div>

  )
}

export default Context