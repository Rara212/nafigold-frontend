import React from "react";

const Navbar = () => (
  <nav className="flex sticky bg-[#1e1e1c] top-0 px-56 gap-60 py-10 w-full justify-between shadow-[0_4px_4px_3px_rgba(0,0,0,0.25)]">
    <div className="flex rounded-b-full absolute top-0 lg:left-32 z-10 justify-center bg-gradient-to-t from-[#CEAE5E] to-[#fff] w-[155px] h-[164px]">
      <img
        className="flex my-auto rounded-full w-[118px] h-[113px]"
        src="/assets/logo.png"
        alt="logo"
      />
    </div>
    <br />
    <div className="border-x-indigo-500">
      <ul className=" lg:ml-24 pt-3 gap-16 flex text-white ">
        <li>Beranda</li>
        <li>Skema Transaksi</li>
        <li>Layanan Kami</li>
        <li>Tentang Kami</li>
      </ul>
    </div>
    <select>
      <option value="ID">ID</option>
      <option value="EN">EN</option>
    </select>
  </nav>
);
export default Navbar;
