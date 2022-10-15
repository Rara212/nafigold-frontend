import React, { useState } from "react";

const TransactionSchemaData = [
  {
    label: "Skema Wakalah",
    label2: "Wakalah",
    image: "/assets/schemas/wakalah-schema.jpeg",
    content1:
      "Konsumen: menghubungi pihak nafi gold untuk melakukan pemesanan emas.",
    content2:
      "Nafi: Nafi menghubungi wakalah yang akan menjadi perantara akad",
    content3:
      "Konsumen transfer uang ke rekening wakalah sesuai harga emas pada hari itu + ongkir + fee Wakalah 10k.",
    content4:
      "Nafi gold dan wakalah melakukan transaksi jual beli akad yadan bi yadin.",
    content5:
      "Wakalah: Setelah emasnya di terima, pihak wakalah packing dan mengirim emas melalui jasa ekspedisi", 
    content6:
      "Ekspedisi: Mengantarkan emas sesuai alamat yang tertera",
    content7:
      "Konsumen:Emas sampai dengan selamat",
  },
  {
    label: "Skema COD",
    label2: "COD (Cash On Delivery)",
    image: "/assets/schemas/cod-schema.jpeg",
    content1:
      "Konsumen: menghubungi pihak nafi gold untuk melakukan pemesanan emas",
    content2:
      "Nafi: Nafi menghubungi wakalah yang akan menjadi perantara akad",
    content3:
      "Konsumen: menghubungi pihak nafi gold untuk melakukan pemesanan emas",
    content4:
      "Nafi: Nafi menghubungi wakalah yang akan menjadi perantara akad",
    content5:
      "Konsumen: menghubungi pihak nafi gold untuk melakukan pemesanan emas",
    content6:
      "Nafi: Nafi menghubungi wakalah yang akan menjadi perantara akad",
    content7: null,
  },

];

export default function TransactionSchema() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="bg-[#1E1E1C] py-8">
        <div>
          <h2 className="font-title text-[#CEAE5E]">Skema Transaksi</h2>
          <h6 className="text-white">
            Pembelian <span className="text-[#CEAE5E]">Emas</span> di{" "}
            <span className="text-[#CEAE5E]">Nafi&#39; Gold</span>
          </h6>
        </div>
        <div>
          <img
            className="w-32"
            src="/assets/schema-mascot.png"
            alt="schema-mascot"
          />
        </div>
        {/* 1. making wakalah schema and COD*/}
        <div>
        <div className="flex justify-center gap-16">
          {TransactionSchemaData.map((data, i) => (
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
            className="inline-block px-4 w-full "
            src={TransactionSchemaData[activeTabIndex].image}
            alt={TransactionSchemaData[activeTabIndex].label}
          />
          <p className="font-body px-8 my-auto">
            {" "}
            {TransactionSchemaData[activeTabIndex].content}{" "}
          </p>
        </div>
      </div>
        
      </div>
    </div>
  );
}
