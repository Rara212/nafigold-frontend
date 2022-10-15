import React, { useState } from "react";

const tabsData = [
  {
    label: "NAFI SAVER MONEY",
    image: "/assets/savermoney.png",
    content:
      "Adalah program menabung selama 3 bulan dengan akad wadiah (jasa titip) untuk membantu orang-orang membangun kebiasaan menabung, Dalam program tim Nafi Gold akan mengingatkan kamu untuk menabung, mencatat progres menabung, memberikan Edukasi finansial planner dan menjadi bagian komunitas cerdas finansial.",
    icons: [
      {
        label: "Amanah dan Terpercaya",
        img: "/assets/amanah.png",
      },
      {
        label: "Dapat Dipantau Kapanpun",
        img: "/assets/accountable.png",
      },
      {
        label: "Pencatatan Transparan",
        img: "/assets/overview.png",
      },
    ],
  },
  {
    label: "NAFI BRANKAS",
    image: "/assets/nafi_brankas.png",
    content:
      "Adalah layanan jasa penyimpanan emas untuk kamu yang takut menyimpan emas dalam bentuk fisik, Nafi Gold akan menyimpan emas kamu di tempat yang aman dan dapat kamu ambil kapan saja, akad penyimpanan ini di perbaharui setiap 6 bulan sekali.",
    icons: [
      {
        label: "Amanah dan Terpercaya",
        img: "/assets/amanah.png",
      },
      {
        label: "Dapat Dipantau Kapanpun",
        img: "/assets/accountable.png",
      },
      {
        label: "Dapat Diambil Kapanpun",
        img: "/assets/dapat_diambil_kapan_saja.png",
      },
    ],
  },
  {
    label: "NAFI Kurir",
    image: "/assets/Courier.png",
    content:
      "Adalah layanan pengantaran emas langsung ke alamat rumah pembeli, kamu cukup melakukan pemesanan dan duduk manis di rumah, pihak Nafi Gold akan datang ke alamat kamu untuk melakukan transaksi yadan bi yadin, biaya layanan ini menyesuaikan dengan seberapa jauh jarak alamat toko ke rumah kamu.",
    icons: [
      {
        label: "Amanah dan Terpercaya",
        img: "/assets/amanah.png",
      },
      {
        label: "Mudah dan Praktis",
        img: "/assets/mudah_dan_praktis.png",
      },
      {
        label: "Yadan bi Yadin",
        img: "/assets/yadan_bi_yadin.png",
      },
    ],
  },
];

export default function Services() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col py-28 gap-16">
      <div className="flex justify-center gap-10">
        <img
          className="w-[127px] h-[127px] inline-block "
          src="/assets/layanan.png"
          alt=""
        />
        <h1 className="my-auto text-5xl font-title text-[#CEAE5E]">
          <span className="text-white">Layanan</span> Kami
        </h1>
      </div>

      {/* Tabview */}
      <div>
        <div className="flex justify-center gap-16">
          {tabsData.map((data, i) => (
            <button
              key={i}
              className={`rounded-[50px] px-5 py-2 text-center font-title uppercase ${
                i === activeTabIndex
                  ? "bg-[#CEAE5E] text-white"
                  : "bg-[#353531] text-[#717171]"
              }`}
              onClick={() => setActiveTabIndex(i)}
            >
              {data.label}
            </button>
          ))}
        </div>

        <div className="flex divide-x-2 justify-center py-8 w-3/5 text-white mx-auto gap-10">
          <img
            className="inline-block px-4 w-32 "
            src={tabsData[activeTabIndex].image}
            alt={tabsData[activeTabIndex].label}
          />
          <p className="font-body px-8 my-auto">
            {" "}
            {tabsData[activeTabIndex].content}{" "}
          </p>
        </div>

        <div className="flex justify-center py-5">
          <div className="flex justify-center gap-32 w-4/6 ">
            {tabsData[activeTabIndex].icons.map((icon) => (
              <div className="flex flex-col text-white h-full justify-end my-auto">
                <img className="w-20 mx-auto " src={icon.img} alt={icon.img} />
                <p className="py-5">{icon.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#CEAE5E] px-[69px] py-5 rounded-full">
          Berlangganan
        </button>
      </div>
    </div>
  );
}
