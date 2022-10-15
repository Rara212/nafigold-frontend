import React from "react";

const Navbar = () => (
  <nav className="flex divide-y bg-[#1e1e1c] top-0 px-40 gap-60 py-6 w-full justify-center shadow-[0_4px_4px_3px_rgba(0,0,0,0.25)]">
    <div className="flex rounded-b-full absolute top-0 lg:left-80 z-10 justify-center bg-gradient-to-t from-[#CEAE5E] to-[#fff] w-[155px] h-[164px]">
      <img
        className="flex my-auto rounded-full w-[118px] h-[113px]"
        src="/assets/logo.png"
        alt="logo"
      />
    </div>

    <div className="border-t-white border-1">
      <ul className=" lg:ml-24 pt-3 gap-16 flex text-white ">
        <li>Beranda</li>
        <li>Transaksi Skema</li>
        <li>Produk Kami</li>
        <li>Layanan Kami</li>
        <li>Tentang Kami</li>
      </ul>
    </div>
    {/* <select>
      <option value="ID">ID</option>
      <option value="EN">EN</option>
    </select> */}
  </nav>
);
export default Navbar;
