//import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans max-w-xl">
      <main className=" mx-4  ">
      <ProductCard/>
      
      </main>
     
    </div>
  );
}
