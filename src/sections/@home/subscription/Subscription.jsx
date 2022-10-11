import React from "react";

export default function Subscription() {
    return (
        <div className="bg-[#515151] text-white font-title tracking-widest p-10">
            <img 
                className=" w-[127px] mx-96"
                src="/assets/subscription.png"
                alt="subscription"
            />
            <h1 className="text-xl text-center mt-[-80px]">BERLANGGANAN</h1>
            <h2 className="font-light text-center">Untuk mendapatkan berita & update</h2>
            <div className="justify-center mt-10">
                <input
                    className="rounded-full border border-white text-center text-black text-xl p-2 gap-10 font-body" 
                    type="text"
                    placeholder="Masukkan e-mail disini"
                />
            </div>
            <div>
                <button className="rounded-full bg-[#CEAE5E] text-center text-xl p-2 gap-10 m-4 text-black font-body">
                    Berlangganan
                </button>
            </div>
        </div>
    );
}