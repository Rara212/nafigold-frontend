export default function Products() {
  return (
    <div className="bg-white py-20">
      <div className="text-center">
        <h2 className="font-title text-[#CEAE5E] text-5xl">Our Products</h2>
        <h5 className="font-[Norican] text-[#959595] text-2xl">
          All the best item for you
        </h5>
      </div>
      <Box />
      <div>
        <div>
          <h6>Buy What Makes You Happy</h6>
          <div>
            <div>
              <img
                src="/assets/products/emas/minigold_.1_gram.png"
                alt="minigold"
              />
            </div>
            <div>
              <img
                src="/assets/products/bucket-emas/Bucket1.jpg"
                alt="bucket"
              />
            </div>
            <div>
              <img src="/assets/products/figura/Figura1.jpg" alt="figura" />
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
          <div className="">
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
