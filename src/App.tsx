import { Button } from "flowbite-react";
import "./App.css";
import { useEffect, useState } from "react";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";

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

  useEffect(() => {});
  return (
    <div className="h-screen flex flex-col justify-between text-center">
      
      <HeaderComponent />
      <main>
      https://fakestoreapi.com/docs
      </main>
      <FooterComponent/>
    </div>
  );
}

export default App;
