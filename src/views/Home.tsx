import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Product from "../interfaces/products";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const text = useSelector((store) => store.products.text);
  

  
  
  useEffect(() => {
    axios.get("/products.json")
       .then((res) => {
        const filterData = res.data.filter(
          each=>each.title.toLowerCase().includes(text.toLowerCase()))
        setProducts(filterData)})
       .catch((err) => console.log(err));
  }, [text]);
  console.log(text)
 

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div className="w-[1080px] flex flex-wrap justify-between" id="products">
          {products.map((each: Product) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              colors={each.colors}
              images={each.images}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}


export default Home;