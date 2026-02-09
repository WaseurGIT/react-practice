import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("./foods.json").then((res) => setFoods(res.data));
  }, []);

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Foods</h1>
        <p className="text-gray-600 mb-8">Explore our delicious collection</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foods.map((food) => (
            <Product key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
