import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";

const CartItem = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: '❌',
          });
        }}
        className="absolute text-xl right-8 hover:text-red-500 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="Item Image" className="w-[50px] h-[50px]" />
      <div className="leading-7">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center absolute right-8 gap-3">
            <FiMinusSquare
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="hover:bg-red-500 hover:text-white transition-all text-xl cursor-pointer ease-linear"
            />
            <span>{qty}</span>
            <FaRegSquarePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="hover:bg-green-500 hover:text-white transition-all text-xl cursor-pointer ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
