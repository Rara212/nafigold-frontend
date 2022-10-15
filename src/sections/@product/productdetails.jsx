import React from "react";
import { CiSearch } from 'react-icons/ci';

const miniGoldReguler = [
    {
      id: 1,
      label: "Mini Gold 0,025gr",
      image: "/assets/products/emas/minigold_.25_gram.png",
      content:
        "Reguler",
      price: "Rp.40.400",
      cashback: "10%",
    },
    {
      id: 2,
        label: "Mini Gold 0,05gr",
        image: "/assets/products/emas/minigold_.05_gram.png",
        content:
          "Reguler",
        price: "Rp.70.400",
        cashback: "10%",
    },
    {
      id: 3,
        label: "Mini Gold 0,1gr",
        image: "/assets/products/emas/minigold_.1_gram.png",
        content:
          "Reguler",
        price: "Rp.130.300",
        cashback: "10%",
    },
    {
      id: 4,
        label: "Mini Gold 0,25gr",
        image: "/assets/products/emas/minigold_.25_gram.png",
        content:
          "Reguler",
        price: "Rp.297.800",
        cashback: "10%",
    },
    {
      id: 5,
        label: "Mini Gold 1gr",
        image: "/assets/products/emas/minigold_.25_gram.png",
        content:
          "Reguler",
        price: "Rp.1.009.000",
        cashback: "10%",
    },
    {
      id: 6,
        label: "Mini Gold 1,5gr",
        image: "/assets/products/emas/minigold_.25_gram.png",
        content:
          "Reguler",
        price: "Rp.1.510.500",
        cashback: "10%",
    },
  ];

  const antamGold = [
    {
        label: "Antam 0,5gr",
        image: "/assets/products/emas/antam_.5_gram.png",
        content:
          "Certicard",
        price: "Rp.555.000",
        cashback: "10%",
      },
      {
        label: "Antam 1gr",
        image: "/assets/products/emas/antam_1_gram.png",
        content:
          "Certicard",
        price: "Rp.997.000",
        cashback: "10%",
      },
      {
        label: "Antam 2gr",
        image: "/assets/products/emas/antam_2_gram.png",
        content:
          "Certicard",
        price: "Rp.1.931.000",
        cashback: "10%",
      },
      {
        label: "Antam 10gr",
        image: "/assets/products/emas/antam_10_gram.png",
        content:
          "Certicard",
        price: "Rp.9.389.000",
        cashback: "10%",
      },
  ];

  const bucket = [
    {
        label: "medium",
        image: "/assets/products/bucket-emas/Bucket2.jpg",
        content:
          "Pilihan warna: Brown; Peach; Blue",
        price: "Rp.100.000",
        cashback: "10%",
    },
    {
        label: "luxury",
        image: "/assets/products/bucket-emas/Bucket1.jpg",
        content:
          "Pilihan warna: Brown; Peach; Blue",
        price: "Rp.200.000",
        cashback: "10%",
    },
  ];

  const figures = [
    {
        label: "Hanging-Figure",
        image: "/assets/products/figura/Figura2.jpg",
        content:
          "Bahan: Kayu ringan",
        price: "Rp.100.000",
        cashback: "10%",
    },
    {
        label: "Standing-Figure",
        image: "/assets/products/figura/Figura1.jpg",
        content:
          "Bahan: Kayu ringan",
        price: "Rp.150.000",
        cashback: "10%",
    },
    {
        label: "Vertical-Figure",
        image: "/assets/products/figura/Figura3.jpg",
        content:
          "Bahan: Kayu ringan",
        price: "Rp.150.000",
        cashback: "10%",
    },
  ];

export default function Productdetails() {
    return (
        <div className="bg-white mx-auto">
            {/* 1. making the headline tag: search bar and the store name */}
            <div className="border-b-2 border-[#CCCCCC] px-18 py-14 mx-36 ">
                <h1 className="font-title text-5xl font-normal text-[#CEAE5E]">Nafi Gold Store</h1>
                <p className="font-[Norican] text-[#959595] text-2xl">All the best item for you</p>
                <div className="flex justify-center mt-[-5rem]">
                    <div className="grid mx-[-1rem] mt-2">
                    <CiSearch className ="text-[#307185] text-5xl mx-5" />
                    </div>
                    <input 
                        className="rounded-full border  text-[#8B9797] text-3xl p-3 gap-10 font-body text-center" 
                        type="text"
                        placeholder="find Nafi Gold product..."
                    />
                </div>
            </div>
            {/* 2. making varian mini gold */}
            <div className="border-b-2 border-[#CCCCCC] px-18 py-14 mx-36">
                <h2 className="text-3xl font-body font-bold text-[#707070] ">Varian Mini Gold</h2>
                <div className="">
                  {/*making each of the product */}
                  <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 gap-5">
                    {miniGoldReguler.map((miniGoldReguler) => (
                    <div key={miniGoldReguler.id} className="w-full shadow-xl flex flex-col p-4 my-3 rounded-lg hover:scale-105 duration-300 border text-black text-xl text-center justify-center">
                      <img
                          className="grid px-4 mx-auto w-32 justify-center"
                          src={miniGoldReguler.image}
                          alt={miniGoldReguler.label}
                      />
                      <p className="font-body px-8 my-auto">
                        {" "}
                        {miniGoldReguler.label}{" "}
                      </p>

                      <p className="font-body px-8 my-auto">
                        {" "}
                        {miniGoldReguler.content}{" "}
                      </p>

                      <p>
                        {" "}
                        {miniGoldReguler.price}{" "}
                      </p>
                        
                      <a className='bg-[#CEAE5E] border hover:shadow-sm rounded-md font-medium my-1 mx-auto px-3 py-1' href="/purchaseform">Beli</a>
                        
                    </div>
                    ))}
                  </div>
                </div>
            </div>

            {/* 2. making varian antam gold */}
            <div className="border-b-2 border-[#CCCCCC] px-18 py-14 mx-36">
                <h2 className="text-3xl font-body font-bold text-[#707070] ">Varian Antam Gold</h2>
                <div className="">
                  {/*making each of the product */}
                  <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 gap-5">
                    {antamGold.map((antamGold) => (
                    <div key={antamGold.id} className="w-full shadow-xl flex flex-col p-4 my-3 rounded-lg hover:scale-105 duration-300 border text-black text-xl text-center justify-center">
                      <img
                          className="grid px-4 mx-auto w-32 justify-center"
                          src={antamGold.image}
                          alt={antamGold.label}
                      />
                      <p className="font-body px-8 my-auto">
                        {" "}
                        {antamGold.label}{" "}
                      </p>

                      <p className="font-body px-8 my-auto">
                        {" "}
                        {antamGold.content}{" "}
                      </p>

                      <p>
                        {" "}
                        {antamGold.price}{" "}
                      </p>

                      <a className='bg-[#CEAE5E] border hover:shadow-sm rounded-md font-medium my-1 mx-auto px-3 py-1' href="/purchaseform">Beli</a>
                    
                    </div>
                    ))}
                  </div>
                </div>
            </div>



            {/* 3. making varian figura */}
            <div className="border-b-2 border-[#CCCCCC] px-18 py-14 mx-36">
                <h2 className="text-3xl font-body font-bold text-[#707070] ">Varian Figura</h2>
                <div className="">
                  {/*making each of the product */}
                  <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-5">
                    {figures.map((figures) => (
                    <div key={figures.id} className="w-full shadow-xl flex flex-col mx-auto my-3 rounded-lg hover:scale-105 duration-300 border text-black text-xl text-center justify-center">
                      <img
                          className="grid px-4 mx-auto w-32 py-1 justify-center"
                          src={figures.image}
                          alt={figures.label}
                      />
                      <p className="font-body px-8 my-auto">
                        {" "}
                        {figures.label}{" "}
                      </p>

                      <p className="font-body px-8 my-auto">
                        {" "}
                        {figures.content}{" "}
                      </p>

                      <p>
                        {" "}
                        {figures.price}{" "}
                      </p>

                      <a className='bg-[#CEAE5E] border hover:shadow-sm rounded-md font-medium my-1 mx-auto px-3 py-1' href="/purchaseform">Beli</a>
                    
                    </div>
                    ))}
                  </div>
                </div>
            </div>
            {/* 4. making 3 banners */}
            {/* 5. making more products */}
            <div className="border-b-2 border-[#CCCCCC] px-18 py-14 mx-36">
                <h2 className="text-3xl font-body font-bold text-[#707070] ">Buket Emas</h2>
                <div className="">
                  {/*making each of the product */}
                  <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-5">
                    {bucket.map((bucket) => (
                    <div key={bucket.id} className="w-full shadow-xl flex flex-col mx-auto my-3 rounded-lg hover:scale-105 duration-300 border text-black text-xl text-center justify-center">
                      <img
                          className="grid px-4 mx-auto w-32 py-1 justify-center"
                          src={bucket.image}
                          alt={bucket.label}
                      />
                      <p className="font-body px-8 my-auto">
                        {" "}
                        {bucket.label}{" "}
                      </p>

                      <p className="font-body px-8 my-auto">
                        {" "}
                        {bucket.content}{" "}
                      </p>

                      <p>
                        {" "}
                        {bucket.price}{" "}
                      </p>

                      <a className='bg-[#CEAE5E] border hover:shadow-sm rounded-md font-medium my-1 mx-auto px-3 py-1' href="/purchaseform">Beli</a>
                    
                    </div>
                    ))}
                  </div>
                </div>
            </div>

        </div>
    );
}