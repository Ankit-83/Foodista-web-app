import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalItems = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate()

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[24vw] p-5 bg-white h-full ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between my-4">
          <span className="text-xl font-bold text-gray-600">My Order</span>
          <FaRegWindowClose
            onClick={() => setActiveCart(!activeCart)}
            className="text-gray-500 hover:text-red-600 size-10 cursor-pointer "
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <CartItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-xl text-center my-10 font-bold text-gray-800">
            Your Cart is Empty
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <div className="justify-between flex">
            <h3 className="text-xl font-semibold text-gray-800">Items: </h3>
            <span className="text-2xl font-bold font-serif text-red-500">
              {totalItems}
            </span>
          </div>
          <div className="justify-between flex">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Amount :{" "}
            </h3>
            <span className="text-2xl font-bold font-serif text-red-500">
              ₹ {totalPrice}
            </span>
          </div>
          <hr className="w-[90vw] lg:w-[22vw] my-2" />
          <button onClick={() => navigate("/success")} className="bg-green-500 font-bold px-3 text-white py-2 hover:bg-green-800 rounded-lg w-[90vw] lg:w-[21.5vw] my-4 mb-5">
            Checkout
          </button>
        </div>
      </div>
      <BsCart3
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-xl bg-blue-400 shadow-md text-5xl p-3 fixed bottom-5 right-3 ${
          totalItems > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;
