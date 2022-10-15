import React from "react";

export default function PurchaseForm() {
    return (
        <div className="bg-white w-full h-full py-24">
            <h1 className="font-title text-5xl font-normal text-[#CEAE5E] mx-10 py-10">Nafi Gold Store</h1>
            <form method="post" className="px-10 mt-[-1rem]">
            <fieldset className="border-2 border-black mb-6"> 
                <legend className="text-2xl">Form Pembelian</legend>
                <table className=" p-14 mt-5">
                    <tbody>
                        <tr> 
                            <td className="border-r-black"> 
                                <label>Nama: </label>
                            </td> 
                            <td> 
                                <input type="text" name="nama" className="border border-black" /> 
                            </td> 
                        </tr>
                        <tr> 
                            <td className="border-r-black"> 
                                <label>E-mail: </label>
                            </td> 
                            <td> 
                                <input type="text" name="email" className="border border-black" /> 
                            </td> 
                        </tr>  
                        <tr> 
                            <td> 
                                <label> Alamat: </label> 
                            </td> 
                            <br/> 
                            <td> 
                                <textarea className="border border-black ml-[-2rem]" name="alamat" rows="5" cols="100" id="form-entry"></textarea> 
                            </td>  
                        </tr>

                        <tr> 
                            <td> 
                                <label>Telepon: </label>
                            </td> 
                            <td> 
                                <input type="text" size="1" name="phonecode" className="border border-black" />
                                <label>-</label>
                                <input type="text" name="phonenumber" className="border border-black" /> 
                            </td> 
                        </tr>
                        
                        <tr> 
                            <td> 
                                <label>Produk yang dipesan: </label> 
                            </td> 
                            <td> 
                                <select name="jenisProduk" id="Produk" className="border border-black"> 
                                    <option>Mini Gold 0,025gr</option> 
                                    <option>Mini Gold 0,05gr</option>
                                    <option>Mini Gold 0,1gr</option> 
                                </select> 
                            </td> 
                        </tr>

                        <tr> 
                            <td> 
                                <label>Pilihan Transaksi: </label> 
                            </td> 
                            <td> 
                                <select name="pilihanTransaksi" id="transaksi" className="border border-black"> 
                                    <option>Wakalah</option> 
                                    <option>Cash on Delivery</option>
                                </select> 
                            </td> 
                        </tr>

                        <tr> 
                            <td> 
                                <label>Jenis Pembayaran</label> 
                            </td> 
                            <td> 
                                <select name="jenisPembayaran" id="Pembayaran" className="border border-black"> 
                                    <option>Cash</option> 
                                    <option>Transfer</option> 
                                </select> 
                            </td> 
                        </tr>

                        <tr>
                            <td className="bg-[#CEAE5E] border hover:shadow-sm rounded-md font-medium">
                                <input type="reset" value="reset" />
                            </td>
                            <td className="bg-[#CEAE5E] border hover:shadow-sm rounded-md font-medium">
                                <input type="submit" value="submit" /> 
                            </td>
                        </tr> 
                    </tbody>
                </table>  
            </fieldset>
            </form>
        </div>
    );
}