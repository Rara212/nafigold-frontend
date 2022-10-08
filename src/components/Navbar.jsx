import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4">
      <nav className="images relative w-[25%]">
        <div className=""></div>
        <img
          src="/assets/logo.png"
          alt="logo"
          className="absolute w-[20rem] top-[-7rem] rounded-full"
        />
      </nav>
      <ul className=" flex w-full">
        <li className="p-4">Beranda</li>
        <li className="p-4">Skema Transaksi</li>
        <li className="p-4">Layanan Kami</li>
        <li className="p-4">Tentang Kami</li>
      </ul>
      <div>
        <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow rounded focus:ring-1 ring-gray-200 group">
          <p className="text-[#CEAE5E] px-2">ID</p>
          <span className="border-l hover:bg-gray-100">
            <RiArrowDropDownLine className="text-[#CEAE5E]" size={30} />
          </span>
          <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
            <ul className="text-left border rounded">
              <li className="py-1 hover-bg-gray-100 border-b text-[#CEAE5E] px-2">
                English
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}
