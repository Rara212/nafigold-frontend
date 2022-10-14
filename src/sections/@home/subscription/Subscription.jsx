import React from "react";

export default function Subscription() {
  return (
    <div className="bg-[#515151] py-14 flex justify-center gap-10">
      <div className="my-auto">
        <img
          className="inline-block w-32 "
          src="/assets/newsletter.png"
          alt="newsletter-mascot"
        />
      </div>
      <div className="flex flex-col text-center gap-6 justify-around">
        <div className="text-white flex flex-col gap-1">
          <h2 className="font-title text-xl">Berlangganan</h2>
          <p className="font-body text-xl">
            Untuk mendapatkan berita dan update
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <input
            className="bg-transparent text-center border-white border-2 rounded-full text-xl py-1"
            placeholder="Masukan Email Anda"
          />
          <button className="bg-[#CEAE5E] border-white border-2 text-xl font-body rounded-full py-1">
            Belangganan
          </button>
        </div>
      </div>
    </div>
  );
}
