import React from "react";
import { FiShoppingCart, FiEdit2, FiTrash2 } from "react-icons/fi";

const Product = ({ food, handleAddToCart, handleDeleteFood }) => {
  const handleAddToCartClick = () => {
    handleAddToCart(food);
  };

  const handleUpdate = () => {
    alert(`Updating: ${food.name}`);
  };

  const handleDelete = (id) => {
    handleDeleteFood(id);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden ease-in-out hover:scale-105 transform hover:transition-all">
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {food.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
          {food.name}
        </h3>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-semibold text-gray-700">
              {food.rating}
            </span>
          </div>
          <span className="text-lg font-bold text-green-600">
            ${food.price}
          </span>
        </div>

        <div className="flex justify-around items-center border-t pt-3">
          <button
            onClick={handleAddToCartClick}
            className="flex items-center justify-center gap-2 px-4 py-2 text-orange-600 hover:bg-orange-100 rounded-lg transition-colors duration-200"
            title="Add to Cart"
          >
            <FiShoppingCart size={20} />
            <span className="text-xs font-medium">Cart</span>
          </button>
          <button
            onClick={handleUpdate}
            className="flex items-center justify-center gap-2 px-4 py-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-200"
            title="Update"
          >
            <FiEdit2 size={20} />
            <span className="text-xs font-medium">Edit</span>
          </button>
          <button
            onClick={() => handleDelete(food.id)}
            className="flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
            title="Delete"
          >
            <FiTrash2 size={20} />
            <span className="text-xs font-medium">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
