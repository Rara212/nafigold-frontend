import React from "react";

const Price = () => {
    return (
        <div className="w-full my-32 text-black">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid md:grid-cols-2 gap-1 px-5 text-center">
                    <div className="border py-8 rounded-xl shadow-xl bg-white">
                        <p className="text-3xl mb-2"><h3>Harga Beli</h3></p>
                        <p className="text-6xl font-bold">Rp. XXX/gr</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl bg-white">
                        <p className="text-3xl mb-2"><h3>Harga Jual</h3></p>
                        <p className="text-6xl font-bold">Rp. XXX/gr</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Price