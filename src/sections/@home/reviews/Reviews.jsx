import React from "react";

export default function Reviews() {
    return (
        <div className="bg-white h-50px w-317px py-10 px-80">
            <h1 className="text-5xl font-title text-[#959595]">Testimonial</h1>
            {/*making testimonials squares*/}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-14">
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <p>"Pelayanan cepat dan memuaskan!"</p>
                        <p><em>Muhammad Wazir Ghifari-Jakarta</em></p>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <p>"Aman dan halal."</p>
                        <p><em>Zikra Afdal-Jakarta</em></p>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <p>"Sejauh ini Alhamdulillah amanah."</p>
                        <p><em>Sulis fartia-Jakarta</em></p>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <p>"Nyaman banget belanja di NafiGold!"</p>
                        <p><em>Miftahus Sholihah-Jakarta</em></p>
                    </div>
                </div>
                <div className="flex py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <p>"Aman dan amanah."</p>
                        <p><em>sheima maimouna-Jakarta</em></p>
                    </div>
                </div>
                <div className="py-5 font-body font-medium border-2 rounded-2xl border-[#CEAE5E]">
                    <div className="px-5 py-5">
                        <p>"Gak bisa beli emas langsung, eh ada Nafi Saver Money. Alhamdulillah, emas kebeli sekarang!^^ "</p>
                        <p><em>Inura Bislah Djohar-Jakarta</em></p>
                    </div>
                </div>
            </div>

        </div>
    );
}