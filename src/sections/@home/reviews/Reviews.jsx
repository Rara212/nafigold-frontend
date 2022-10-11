import React from "react";

export default function Reviews() {
    return (
        <div className="bg-white h-50px w-317px py-10 px-80">
            <h1 className="text-5xl font-title text-[#959595]">Testimonial</h1>
            {/*making testimonials squares*/}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-14">
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <h3>Menggunakan transaksi <strong className="text-[#CEAE5E]">syariah</strong></h3>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <h3><strong className="text-[#CEAE5E]">Amanah</strong> dan terpercaya</h3>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <h3><strong className="text-[#CEAE5E]">Mudah</strong> dalam bertransaksi emas</h3>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <h3>Memberikan edukasi <strong className="text-[#CEAE5E]">perencanaan keuangan</strong> dan <strong className="text-[#CEAE5E]">fiqh muamalah</strong></h3>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <h3>Memiliki berbagai <strong className="text-[#CEAE5E]">layanan keuangan</strong> untuk membantumu membangun kebiasaan menabung</h3>
                    </div>
                </div>
                <div className="py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <h3>Tersedia <strong className="text-[#CEAE5E]">berbagai macam produk</strong> gift series untuk menghadiahkan orang tercinta </h3>
                    </div>
                </div>
            </div>

        </div>
    );
}