import React from "react";
import { FiX, FiTrash2 } from "react-icons/fi";

const Cart = ({ isOpen, cartItems, setIsOpen, handleRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:bg-black/10 lg:bg-black/30 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-100 border-b p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-200 rounded-lg transition"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="overflow-y-auto h-[calc(100vh-250px)]">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 text-center">Your cart is empty</p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {item.name}
                    </h3>
                    <p className="text-orange-500 font-bold text-sm">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        Qty: {item.quantity}
                      </span>
                      <span className="text-xs text-gray-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition self-start"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-100 border-t p-4 space-y-3">
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span className="text-orange-500">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
