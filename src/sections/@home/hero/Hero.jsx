import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex mt-[-4rem] gap-32 lg:flex-row  lg:px-32 ">
      <div className="my-auto w-1/2  ">
        <h1 className="font-title text-5xl text-white">
          Kenapa Harus{" "}
          <span className="text-[#CEAE5E] block">NAFI&#39; GOLD</span>
        </h1>
        <br />
        <p className="font-body text-2xl text-white ">
          Nafi&#39; Gold adalah platform jual beli emas dengan sistem syariah.
          Ditengah merebaknya transaksi yang bercampur RIBA di masyarakat, Insya
          Allah emas sudah membuktikan kekuatannya dalam inflasi.
        </p>
        <br />
        <p className="font-body text-2xl text-white ">
          Kami juga memberikan layanan menabung kepada para konsumen untuk
          merencanakan keuangan yang lebih baik untuk memulai habits menabung.
          Serta meredam pola hidup flexing dan terhindar dari pinjaman riba.
          Untuk masa depan yang lebih baik. Berkah dunia akhirat pun dapat.
        </p>
        <button className="font-body block mr-0 ml-auto text-2xl text-white font-bold">
          ORDER NOW
        </button>
      </div>
      <div className="bg-[#CEAE5E] h-[311px] absolute z-[-2] w-[311px] left-1/4 bottom-1/4 rounded-full mt-52"></div>
      <div className="lg:w-1/3 my-auto">
        <img src="/assets/heroImage.png" alt="hero" />
      </div>
    </div>
  );
}
