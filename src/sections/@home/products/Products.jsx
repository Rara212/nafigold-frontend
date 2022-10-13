import { products } from "../../../assets/data";

export default function Products() {
  const emas = products.filter((item) => item.category === "emas");

  return (
    <div className="bg-white py-20">
      <div className="text-center">
        <h2 className="font-title text-[#CEAE5E] text-5xl">Our Products</h2>
        <h5 className="font-[Norican] text-[#959595] text-2xl">
          All the best item for you
        </h5>
      </div>
      <Box />
      <div className="flex w-full justify-start  flex-col">
        <div className="w-9/10 px-60 mx-auto flex flex-col  ">
          {/* All Kind of Products */}
          <div className="my-auto">
            <div>
              <h6 className="text-[14px] text-[#307185] font-medium">
                Buy What Makes You Happy
              </h6>
            </div>
            <div className="flex py-20 gap-20 justify-evenly">
              <div className="product">
                <img
                  className="all-products"
                  src="/assets/products/emas/minigold_.1_gram.png"
                  alt="minigold"
                />
                <p className="py-5">Mini Gold</p>
              </div>
              <div className="product">
                <img
                  className="all-products"
                  src="/assets/products/bucket-emas/Bucket1.jpg"
                  alt="bucket"
                />
                <p className="py-5">Figura</p>
              </div>
              <div className="product">
                <img
                  className="all-products"
                  src="/assets/products/figura/Figura1.jpg"
                  alt="figura"
                />
                <p className="py-5">Bucket Emas</p>
              </div>
            </div>
          </div>
          {/* Most Popular Around the World */}
          <div>
            <div className="flex justify-between">
              <h6 className="text-[14px] text-[#307185] font-medium">
                Most Popular Around the World
              </h6>
              <p className="text-[16px] text-[#F30000]">See All</p>
            </div>

            <div className="flex py-20 gap-20 justify-evenly">
              <div className="relative popular-product">
                <img
                  className=""
                  src="/assets/products/emas/minigold_.1_gram.png"
                  alt="minigold"
                />
                <div className="flex absolute  bg-white w-full h-1/2 -mt-[38%] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  <p className="m-auto">Rp. 997.000</p>
                </div>
              </div>

              <div className="relative popular-product">
                <img
                  className=""
                  src="/assets/products/emas/minigold_.1_gram.png"
                  alt="minigold"
                />
                <div className="flex absolute  bg-white w-full h-1/2 -mt-[38%] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  <p className="m-auto">Rp. 997.000</p>
                </div>
              </div>

              <div className="relative popular-product">
                <img
                  className=""
                  src="/assets/products/emas/minigold_.1_gram.png"
                  alt="minigold"
                />
                <div className="flex absolute  bg-white w-full h-1/2 -mt-[38%] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  <p className="m-auto">Rp. 997.000</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Product List */}
          <div>
            <div className="flex justify-between">
              <h6 className="text-[14px] text-[#307185] font-medium">
                Product List
              </h6>
              <p className="text-[16px] text-[#F30000]">See All</p>
            </div>
            <div className="flex  py-10 gap-20 justify-evenly">
              {emas.map((item) => (
                <div className="product ">
                  <img
                    className="w-[132px] h-[132px] rounded-[10px]"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Box = () => (
  <div className="flex mx-auto lg:my-10 bg-[#CEAE5E] w-3/6 py-10 rounded-lg">
    <div className="flex justify-start px-10 gap-20">
      <div className="flex flex-col justify-evenly divide-y-2 text-white">
        <div>
          <div>
            <p className="text-xl">Up To</p>
          </div>
          <div>
            <h2 className="text-5xl">70% OFF</h2>
            <h6 className="text-2xl">With Free Delivery</h6>
          </div>
          <br />
        </div>

        <div className="flex flex-col">
          <br />
          <div className="flex flex-row">
            <div className="text-6xl">#</div>
            <div>
              <p className="leading-tight text-xl">NafiGold</p>
              <p className="text-2xl">Terpercaya</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/assets/products/emas/antam_1_gram.png"
          className="w-[203px] h-[203px] rounded-md"
          alt="antam-1gram"
        />
      </div>
    </div>
  </div>
);

<div>
  <div className="flex py-10 gap-20 justify-evenly">
    <div className="relative popular-product">
      <img
        className=""
        src="/assets/products/emas/minigold_.1_gram.png"
        alt="minigold"
      />
      <div className="flex absolute  bg-white w-full h-1/2 -mt-[35%] ">
        <p className="m-auto">Rp. 997.000</p>
      </div>
    </div>
  </div>
</div>;
