import React from "react";
import { CiSearch } from 'react-icons/ci';

const miniGoldReguler = [
    {
      label: "Mini Gold 0,025gr",
      image: "/assets/products/emas/minigold_.25_gram.png",
      content:
        "Reguler",
      price: "40.400",
      cashback: "10%",
    },
    {
        label: "Mini Gold 0,05gr",
        image: "/assets/products/emas/minigold_.05_gram.png",
        content:
          "Reguler",
        price: "70.400",
        cashback: "10%",
    },
    {
        label: "Mini Gold 0,1gr",
        image: "/assets/products/emas/minigold_.1_gram.png",
        content:
          "Reguler",
        price: "130.300",
        cashback: "10%",
    },
    {
        label: "Mini Gold 0,25gr",
        image: "/assets/products/emas/minigold_.25_gram.png",
        content:
          "Reguler",
        price: "297.800",
        cashback: "10%",
    },
    {
        label: "Mini Gold 1gr",
        image: "/assets/products/emas/minigold_.25_gram.png",
        content:
          "Reguler",
        price: "1.009.000",
        cashback: "10%",
    },
    {
        label: "Mini Gold 1,5gr",
        image: "/assets/products/emas/minigold_.25_gram.png",
        content:
          "Reguler",
        price: "1.510.500",
        cashback: "10%",
    },
  ];

  const antamGold = [
    {
        label: "Antam 0,5gr",
        image: "/assets/products/emas/antam_.5_gram.png",
        content:
          "Certicard",
        price: "555.000",
        cashback: "10%",
      },
      {
        label: "Antam 1gr",
        image: "/assets/products/emas/antam_1_gram.png",
        content:
          "Certicard",
        price: "997.000",
        cashback: "10%",
      },
      {
        label: "Antam 2gr",
        image: "/assets/products/emas/antam_2_gram.png",
        content:
          "Certicard",
        price: "1.931.000",
        cashback: "10%",
      },
      {
        label: "Antam 10gr",
        image: "/assets/products/emas/antam_10_gram.png",
        content:
          "Certicard",
        price: "9.389.000",
        cashback: "10%",
      },
  ];

  const bucket = [
    {
        label: "medium",
        image: "/assets/products/bucket-emas/Bucket2.jpg",
        content:
          "Pilihan warna: Brown; Peach; Blue",
        price: "100.000",
        cashback: "10%",
    },
    {
        label: "luxury",
        image: "/assets/products/bucket-emas/Bucket1.jpg",
        content:
          "Pilihan warna: Brown; Peach; Blue",
        price: "200.000",
        cashback: "10%",
    },
  ];

  const figures = [
    {
        label: "Hanging-Figure",
        image: "/assets/products/figura/Figura2.jpg",
        content:
          "Bahan: Kayu ringan",
        price: "100.000",
        cashback: "10%",
    },
    {
        label: "Standing-Figure",
        image: "/assets/products/figura/Figura1.jpg",
        content:
          "Bahan: Kayu ringan",
        price: "150.000",
        cashback: "10%",
    },
    {
        label: "Vertical-Figure",
        image: "/assets/products/figura/Figura3.jpg",
        content:
          "Bahan: Kayu ringan",
        price: "150.000",
        cashback: "10%",
    },
  ];

export default function Productdetails() {
    return (
        <div className="bg-white">
            {/* 1. making the headline tag: search bar and the store name */}
            <div className="border-b-1 border-[#CCCCCC]">
                <h1 className="font-title text-5xl font-normal text-[#CEAE5E]">Nafi Gold Store</h1>
                <p className="font-[Norican] text-[#959595] text-2xl">All the best item for you</p>
                <div>
                    <CiSearch className ="text-[#307185]" />
                    <input 
                        className="rounded-full border-1 border-[#8B9797] text-[#8B9797] text-3xl p-2 gap-10 font-body" 
                        type="text"
                        placeholder="find Nafi Gold Product"
                    />
                </div>
            </div>
            {/* 2. making varian mini gold */}
            <div className="border-b-1 border-[#CCCCCC]">
                <h2>Varian Mini Gold</h2>
                <div>
                    
                </div>

            </div>
            {/* 3. making varian figura */}
            {/* 4. making 3 banners */}
            {/* 5. making more products */}

        </div>
    );
}