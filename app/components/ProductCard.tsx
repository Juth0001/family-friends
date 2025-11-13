"use client";
import Image from "next/image";
import productsData from "./data/products.json"; 


export default function ProductList(){
    const products = productsData.products;

    return(
<section className="grid grid-cols-2 gap-4 justify-center "> 
{products.map((product) =>(
    <div key={product.id}
    className="shadow-md rounded-2xl overflow-hidden">
        <div className={` ${
  product.category === "beauty" ? "bg-pink-100" : "bg-gray-100"
  
}`}>
        <Image
            src={product.thumbnail}
            alt={product.title}
            width={339}
            height={360}
            className="rounded-xl mb-4"
          />
          </div>
          <div className="px-4 pb-4 flex justify-between"> 
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="font-light text-black-4">${product.price}</p>
          </div>
          
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
         
          {/* <button className="">
            <h5><strong>BUY</strong> {product.type}</h5>
          </button> */}
        </div>
       
))}
</section>
    );
}