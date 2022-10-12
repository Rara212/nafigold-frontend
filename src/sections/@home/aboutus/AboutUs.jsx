import React from "react";

export default function AboutUs() {
    return (
        <div className="text-white mx-auto">
            {/*1. making the title*/}
            <h1 className="text-5xl font-title text-[#CEAE5E] px-32 py-10">PT. Nafi Gold</h1>
            {/*2. making contacts*/}
            <div className="px-32">
                <h3 className="text-2xl mt-15 font-title text-[#CEAE5E]">Hubungi Kami</h3>
                <div className="text-xl font-body text-[#959595] m-10">
                    <p>Jl. Raya Jatipadang III no 24b <br /> 
                    Pasar Minggu Jakarta Selatan  (12510)
                    <br />
                    <br />
                    (021) xxxx-xxxx , (021) xxxx-xxxx <br />
                    (021) xxxx-xxxx , (021) xxxx-xxxx <br />
                    (021) xxxx-xxxx
                    </p>
                </div>
            </div>
            {/*3. making operational hour*/}
            <div className="px-32">
                <h3 className="text-2xl mt-15 font-title text-[#CEAE5E]">Jam Operasional</h3>
                <div className="text-xl font-body text-[#959595] m-10">
                    <table>
                        <tr>
                            <td>Senin - Jumat</td>
                            <td>: 10:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Sabtu</td>
                            <td>: 10:00 - 18:00</td>
                        </tr>
                        <tr>
                            <td>Minggu</td>
                            <td>: Tutup</td>
                        </tr>
                        <tr>
                            <td>Hari Besar</td>
                            <td>: Silahkan Konfirmasi</td>
                        </tr>
                    </table>
                </div>
            </div>
            {/*4. making the map*/}
            <div></div>
            {/*4. making copyright*/}
            <div></div>
        </div>
    );
}