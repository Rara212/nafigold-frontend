import React from "react";

function Hero() {
  return (
    <div className="wrapper text-white bg-[#1E1E1C] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
      {/* left side */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem] border-solid border-2 border-white mx-auto">
        <span className="text-[#CEAE5E] font-title">Kenapa Harus</span>
        <span>
          <b>Nafi' Gold</b>
        </span>
        <span className="text-[15px]">
          this is for more info
          <br />
          continue here
        </span>
        {/* order link use <a>? and put the symbol after the kw*/}
        <div>
          <span className="text-[13px]">Pesan Sekarang</span>
        </div>
      </div>
      {/* right side */}
      <div className="images relative w-[50%]">
        <img
          src="/assets/heroImage.png"
          alt="logo"
          className="absolute w-[486px] left-[-1rem] top-[-15rem]"
        />
      </div>
    </div>
  );
}

export default Hero;
