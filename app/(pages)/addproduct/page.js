"use client"
 import {useActionState} from "react";
 import {submitProduct} from "@/app/action/action"

const addProduct = () => {
     const [state, postProduct] = useActionState(submitProduct, {error: {}});
    console.log(state);
  return (
  <div className="flex justify-center items-center h-lvh">
    {state.succes &&  (<p className="text-green-600">Tillykke din formular er sendt</p>)}
    <form action={postProduct}>
        {state.error?.productName &&  <p className="text-red-600">{state.error.productName}</p>}
        
       
      <input 
      type="text" 
      name="productname" 
      placeholder="Product name..." 
      defaultValue={state.productName}
      className="rounded-lg border border-gray-300 px-3 py-2 text-sm "></input>

{state.error?.productPrice &&  <p className="text-red-600">{state.error.productPrice}</p>}
<input 
      //type="number" 
      name="productprice" 
      placeholder="Product price..." 
      defaultValue={state.productPrice}
      className="rounded-lg border border-gray-300 px-3 py-2 text-sm "></input>

      <button type="submit">Submit product</button>
    </form>
    </div>
  );
};

export default addProduct;