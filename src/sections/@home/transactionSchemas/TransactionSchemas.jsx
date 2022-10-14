import { useState } from "react";

export default function TransactionSchema() {
  const [wakalahSchema, setWakalahSchema] = useState(true);

  return (
    <div>
      <div className="flex justify-center gap-10 bg-[#1E1E1C] py-8">
        <div className="my-auto">
          <h2 className="font-title text-[#CEAE5E] text-[40px]">
            Transaksi Skema
          </h2>
          <h6 className="text-white text-body text-2xl">
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
      </div>

      <div className="bg-[#515151] py-10">
        {wakalahSchema ? <WakalahSchema /> : <CodSchema />}
        <div className="flex justify-center py-7">
          <div className="flex gap-5">
            <button
              onClick={() => setWakalahSchema(!wakalahSchema)}
              className={`my-auto ${
                wakalahSchema
                  ? "rounded-full bg-[#C2C2C2] w-5 h-5 "
                  : "bg-[#CEAE5E] w-10 h-4 rounded-full"
              }`}
            />

            <button
              onClick={() => setWakalahSchema(!wakalahSchema)}
              className={` my-auto ${
                wakalahSchema
                  ? "bg-[#CEAE5E] w-10 h-4 rounded-full"
                  : "rounded-full bg-[#C2C2C2] w-5 h-5 "
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const WakalahSchema = () => (
  <div className="flex justify-center gap-16">
    <div className="flex">
      <img
        className="inline-block my-auto"
        src="/assets/schemas/wakalah-schema.png"
        alt="skema wakalah"
      />
    </div>
    <div className="flex flex-col  w-1/3 flex-wrap">
      <div>
        <h2 className="text-white text-[40px] font-title">
          Skema <span className="text-[#CEAE5E]">Wakalah</span>
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        {/* 01 */}
        <div className="flex text-lg text-white font-body gap-10">
          <div>
            <h3 className="schema-number">01</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h6 className="text-[#CEAE5E] font-bold ">(Konsumen)</h6>
              <p className="font-medium">
                Menguhubungi pihak Nafi Gold untuk melakukan pemesanan emas
              </p>
            </div>
            <div>
              <h6 className="text-[#CEAE5E] font-bold">(Nafi)</h6>
              <p className="font-medium">
                Nafi menghubungi wakalah yang akan menjadi perantara akad
              </p>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="flex text-lg text-white font-body gap-10">
          <div>
            <h3 className="schema-number">02</h3>
          </div>
          <div className="flex flex-col gap-">
            <div>
              <h6 className="text-[#CEAE5E] font-bold ">(Konsumen)</h6>
              <p className="font-medium">
                Konsumen transfer uang ke rekening wakalah sesuai harga emas
                pada hari itu + ongkir + fee Wakalah 10k
              </p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="flex text-lg text-white font-body gap-10">
          <div>
            <h3 className="schema-number">03</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-medium">
                Nafi gold dan wakalah melakukan transaksi jual beli akad yadan
                bi yadin
              </p>
            </div>
          </div>
        </div>

        {/* 04 */}

        <div className="flex text-lg text-white font-body gap-10">
          <div>
            <h3 className="schema-number">04</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h6 className="text-[#CEAE5E] font-bold ">(Wakalah)</h6>
              <p className="font-medium">
                Setelah emasnya di terima, pihak wakalah packing dan mengirim
                emas melalui jasa ekspedisi
              </p>
            </div>
            <div>
              <h6 className="text-[#CEAE5E] font-bold">(Ekspedisi)</h6>
              <p className="font-medium">
                Mengantarkan emas sesuai alamat yang tertera
              </p>
            </div>
            <div>
              <h6 className="text-[#CEAE5E] font-bold">(Konsumen)</h6>
              <p className="font-medium">Emas sampai dengan selamat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CodSchema = () => (
  <div className="flex flex-row-reverse justify-center gap-16">
    <div className="flex">
      <img
        className="inline-block my-auto"
        src="/assets/schemas/cod-schema.png"
        alt="skema wakalah"
      />
    </div>
    <div className="flex flex-col  w-1/3 flex-wrap">
      <div>
        <h2 className="text-white text-[40px] font-title">
          Skema <span className="text-[#CEAE5E]">COD (Cash On Delivery)</span>
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        {/* 01 */}
        <div className="flex text-lg text-white font-body gap-10">
          <div>
            <h3 className="schema-number">01</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h6 className="text-[#CEAE5E] font-bold ">(Konsumen)</h6>
              <p className="font-medium">
                Menghubungi pihak nafi gold untuk melakukan pemesanan emas
              </p>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="flex text-lg text-white font-body gap-10">
          <div>
            <h3 className="schema-number">02</h3>
          </div>
          <div className="flex flex-col gap-6 font-medium">
            <div className="flex flex-col gap-5">
              <h6 className=" font-medium ">Memilih opsi COD:</h6>
              <div>
                <div className="flex gap-5 ">
                  <h5>1.</h5>
                  <h6>
                    Layanan <span className="text-[#CEAE5E]">Nafi Kurir</span>
                  </h6>
                </div>
                <p>
                  Pihak nafi gold akan datang ke alamat konsumen untuk melakukan
                  transaksi yadan bi yadin. Konsumen tinggal duduk manis di
                  rumah.
                </p>
                <br />
                <p>(ongkir sesuai jarak lokasi toko ke alamat konsumen)</p>
              </div>

              <div>
                <div className="flex gap-5">
                  <h5>2.</h5>
                  <h6>Datang ke alamat Nafi Gold</h6>
                </div>
                <p>
                  Datang ke alamat Nafi Gold di jln. Raya Jatipadang III no 24b
                  Pasar Minggu Jakarta Selatan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="flex text-lg text-white font-body gap-10">
          <div>
            <h3 className="schema-number">03</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-medium">
                Nafi Gold dan Pembeli melakukan transaksi yadan bi yadin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// className="schema-number"
