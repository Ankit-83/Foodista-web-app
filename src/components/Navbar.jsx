import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-10 mb-10">
      <div>
        <h3 className="mb-3 text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <div className="flex gap-2">
          <h1 className="text-4xl font-bold p-2 bg-green-500 rounded-3xl text-white">OIZOMITE</h1>
          <h2 className="mt-6 dancing-script font-bold text-3xl text-green-500">Foodista-Bar</h2>
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-950 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
