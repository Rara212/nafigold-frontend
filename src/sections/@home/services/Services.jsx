import React, { useState } from "react";

const tabsData = [
    {
      label: "NAFI SAVER MONEY",
      image: "/assets/savermoney.png",
      content:
        "Adalah program menabung selama 3 bulan dengan akad wadiah (jasa titip) untuk membantu orang-orang membangun kebiasaan menabung, Dalam program tim Nafi Gold akan di mereminder kamu untuk menabung, mencatat progres menabung, memberikan Edukasi finansial planner dan menjadi bagian komunitas cerdas finansial.",
    },
    {
      label: "NAFI BRANKAS",
      image: "/assets/savermoney.png",
      content:
        "Adalah layanan jasa penyimpanan emas untuk kamu yang takut menyimpan emas dalam bentuk fisik, Nafi Gold akan menyimpan emas kamu di tempat yang aman dan dapat kamu ambil kapan saja, akad penyimpanan ini di perbaharui setiap 6 bulan sekali.",
    },
    {
      label: "NAFI BRANKAS",
      image: "/assets/Courier.png",
      content:
        "Adalah layanan pengantaran emas langsung ke alamat rumah pembeli, kamu cukup melakukan pemesanan dan duduk manis di rumah, pihak Nafi Gold akan datang ke alamat kamu untuk melakukan transaksi yadan bi yadin, biaya layanan ini menyesuaikan dengan seberapa jauh jarak alamat toko ke rumah kamu.",
    },
  ];


export default function Services() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="text-white mt-24">
            <img className="flex w-1/12 ml-96" src="/assets/layanan.png" alt="layanan kami"/>
            <h1 className="text-5xl font-light font-title text-center -mt-20">
            <strong className="text-[#CEAE5E]">LAYANAN</strong> KAMI
            </h1>

            {/*making tabview*/}
            <div>
                <div className="flex space-x-3 mt-20 justify-center">
                    {/* Loop through tab data and render button for each. */}
                    {tabsData.map((tab, idx) => {
                    return (
                        <button
                        key={idx}
                        className={`rounded-full bg-[#CEAE5E] text-center p-2 font-title gap-10 ${
                            idx === activeTabIndex
                        }`}
                        // Change the active tab on click.
                        onClick={() => setActiveTabIndex(idx)}>
                        {tab.label}
                        </button>
                    );
                    })}
                </div>
                {/* Show active tab content. */}
                <div className="flex py-4 px-40 mt-24">
                    <img className="w-1/4" src={tabsData[activeTabIndex].image} alt="illustration"/>
                    <p className="text-2xl mx-auto px-28 py-[-25rem]">{tabsData[activeTabIndex].content}</p>
                </div>
            </div>

            {/*making notes*/}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-14 justify-center">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                    className="w-1/4" 
                    src="/assets/amanah.png" 
                    alt="amanah"/>
                    <h5 className="text-white font-bold text-center">Amanah dan Terpercaya</h5>
                    <p>Tabungan aman <strong className="text-[#CEAE5E]">sesuai syariat Islam</strong>, InsyaAllah lebih berkah.</p>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                    className="w-1/4" 
                    src="/assets/accountable.png" 
                    alt="amanah"/>
                    <h5 className="text-white font-bold text-center">Amanah dan Terpercaya</h5>
                    <p>Tabungan aman <strong className="text-[#CEAE5E]">sesuai syariat Islam</strong>, InsyaAllah lebih berkah.</p>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                    className="w-1/4" 
                    src="/assets/overview.png" 
                    alt="amanah"/>
                    <h5 className="text-white font-bold text-center">Amanah dan Terpercaya</h5>
                    <p>Tabungan aman <strong className="text-[#CEAE5E]">sesuai syariat Islam</strong>, InsyaAllah lebih berkah.</p>
                </div>
            </div>
            
            {/*making join button*/}
            <div className="max-w-[1240px] mx-auto justify-center mt-20 px-96">
                <button className="rounded-full bg-[#CEAE5E] text-center text-2xl p-2 font-title gap-10 ">
                    Gabung Sekarang
                </button>
            </div>  
        </div>
    );
}