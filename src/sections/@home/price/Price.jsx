const Price = () => (
  <div className="flex p-5 justify-center">
    <div className="grid grid-cols-2 text-center py-8 divide-x text-black rounded-lg   bg-white w-1/3">
      <div>
        <h3 className="price-header">Harga Beli Emas</h3>
        <p className="price">Rp. 997.000</p>
      </div>
      <div>
        <h3 className="price-header">Harga Jual Emas</h3>
        <p className="price">Rp. 919.000</p>
      </div>
    </div>
  </div>
);

export default Price;
