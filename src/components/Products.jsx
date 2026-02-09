import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios.get("./foods.json").then((res) => setFoods(res.data));
  }, []);

  const categories = ["All", ...new Set(foods.map((food) => food.category))];

  const filterFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  const handleDeleteFood = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this food ${id}?`,
    );

    if (!confirmDelete) return;

    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
  };

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Foods</h1>
        <p className="text-gray-600 mb-8">Explore our delicious collection</p>

        <div className="flex flex-wrap items-center justify-center gap-6 py-4 mb-8 bg-white rounded-lg shadow">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 rounded-full transition font-medium cursor-pointer
        ${
          selectedCategory === category
            ? "bg-orange-500 text-white"
            : "hover:text-orange-500 text-gray-700"
        }
      `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterFoods.map((food) => (
            <Product
              key={food.id}
              food={food}
              handleDeleteFood={handleDeleteFood}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
