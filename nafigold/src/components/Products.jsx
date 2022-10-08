import React from "react";
import Product1 from "../assets/product1gr.jpeg";


const Products = () => {
    return (
        <div className="w-full py-[5rem] px-4 bg-white text-center">
            <h2 className="text-5xl text-[#CEAE5E] font-title">Our Products</h2>
            <p className="">All the finest for you</p>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                    className="mx-auto bg-white" 
                    src={require(Product1)} 
                    alt="antam 1gr"
                    />
                    <h2 className="text-2xl font-bold text-center py-5">Antam</h2>
                    <p className="text-center text-4xl font-bold">Emas 1gr</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-2">Rp.1.000.000</p>
                    </div>
                    <button className="bg-orange-400 w-[200px] rounded-md font-medium mx-auto px-6 py-3">Beli</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                    className="mx-auto bg-white" 
                    src={require(Product1)} 
                    alt="antam 1gr"
                    />
                    <h2 className="text-2xl font-bold text-center py-5">Antam</h2>
                    <p className="text-center text-4xl font-bold">Emas 1gr</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-2">Rp.1.000.000</p>
                    </div>
                    <button className="bg-orange-400 w-[200px] rounded-md font-medium mx-auto px-6 py-3">Beli</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                    className="mx-auto bg-white" 
                    src={require(Product1)} 
                    alt="antam 1gr"
                    />
                    <h2 className="text-2xl font-bold text-center py-5">Antam</h2>
                    <p className="text-center text-4xl font-bold">Emas 1gr</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-2">Rp.1.000.000</p>
                    </div>
                    <button className="bg-orange-400 w-[200px] rounded-md font-medium mx-auto px-6 py-3">Beli</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                    className="mx-auto bg-white" 
                    src={require(Product1)} 
                    alt="antam 1gr"
                    />
                    <h2 className="text-2xl font-bold text-center py-5">Antam</h2>
                    <p className="text-center text-4xl font-bold">Emas 1gr</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-2">Rp.1.000.000</p>
                    </div>
                    <button className="bg-orange-400 w-[200px] rounded-md font-medium mx-auto px-6 py-3">Beli</button>
                </div>
            </div>

        </div>
    )
}

export default Products