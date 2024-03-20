import { Button } from "flowbite-react";
import "./App.css";
import { useEffect, useState } from "react";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import CardComponent from "./component/CardComponent";

type Status = "idle" | "loading" | "success" | "error";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function App() {
  const [status, setStatus] = useState<Status>("idle");
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    setStatus("loading");
    fetch("https://fakestoreapi.com/products").then((response) =>
      response
        .json()
        .then((data) => {
          setProduct(data);
          setStatus("success");
        })
        .catch(() => {
          setStatus("error");
        })
    );
  }, []);

  useEffect(() => {});
  return (
    <div className="h-screen flex flex-col justify-between text-center">
      <HeaderComponent />
      <main className="container mx-auto">
        <h1 className="py-5 text-4xl font-bold">ALL Product</h1>
        <hr />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row gap-6 mx-auto max-w-screen-xl my-5">
          {product.map((product) => (
            <CardComponent
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
