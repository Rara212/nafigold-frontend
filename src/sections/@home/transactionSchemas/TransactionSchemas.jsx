const TransactionSchemaData = [
  {
    title: "Skema Wakalah",
    "01": [
      {
        label: "Konsumen",
        content: "Menghubungi pihak Nafi Gold untuk melakukan pemesanan",
      },
      {
        label: "Nafi",
        content: "Nafi menghubungi wakalah yang akan menjadi perantara akad",
      },
    ],
    "02": [
      {
        label: "Konsume",
        content:
          " Konsumen transfer uang ke rekening wakalah sesuai harga emas pada hari itu + ongkir + fee Wakalah 10k",
      },
    ],
    "03": [
      {
        label: "",
        content:
          "Nafi gold dan wakalah melakukan transaksi jual beli akad yadan bi yadin",
      },
    ],
    "04": [
      {
        label: "Wakalah",
        content:
          "Setelah emasnya diterima, pihak wakalah packing dan mengirim emas melalui jasa ekspedisi",
      },
      {
        label: "Ekspedisi",
        content: "Mengantarkan emas sesuai alamat yang tertera",
      },
      {
        label: "Konsumen",
        content: "Emas sampai dengan selamat",
      },
    ],
  },

  {
    title: "Skema COD (cash on Delivery)",
    "01": [
      {
        label: "Konsumen",
        content: "Menghubungi pihak nafi gold untuk melakukan pemesanan emas",
      },
    ],
    "02": [
      {
        label: "Memilih Opsi COD",
        content: [
          {
            labelContent: "Layanan Nafi Kurir",
            description:
              "Pihak Nafi gold akan datang ke alamat untuk melakukan transaksi yadan bi yadin. Konsumen tinggal duduk manis di rumah (ongkir sesuai jarak lokasi toko ke alamatn konsumen)",
          },
          {
            labelContent: "Datang ke alamat Nafi Gold",
            description:
              "Datang ke alamat Nafi Gold di Jl. Raya Jatipadang III No. 24b Pasar Minggu, Jakarta Selatan",
          },
        ],
      },
    ],
    "03": [
      {
        label: "",
        content: "Nafi Gold dan pembeli melakukan transaksi yadan bi yadin",
      },
    ],
  },
];

export default function TransactionSchema() {
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
        {TransactionSchemaData.map((data, i) => (
          <div></div>
        ))}
      </div>
    </div>
  );
}
