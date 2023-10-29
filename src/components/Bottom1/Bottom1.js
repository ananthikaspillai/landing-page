import React from 'react'
import piping from "../../assets/piping.svg"
import branding from "../../assets/branding.svg"
import glasses from "../../assets/glasses.svg"
import nadine from "../../assets/nadine.svg"
import scents from "../../assets/scents.svg"
import invest from "../../assets/invest.svg"
 function Bottom1() {
return (
    <div className="self-center flex w-full max-w-[1194px] items-start justify-between gap-5 mt-20 px-5 ">
      <div className="items-start self-center flex flex-col my-auto max-md:max-w-full">
        <div className="text-zinc-900 text-5xl font-extrabold leading-[133.333%]  mt-[280px] ml-[60px]">
          We serve over 100
          <br />
          Nigerian Websites
        </div>
        <div className="text-zinc-900 text-lg leading-[177.778%] mt-2 max-md:max-w-full ml-[30px]">
          Connect LemonWares with your favourite tools that you use daily and
          keep things on track.
        </div>
      </div>
      <div className="">
        <div className=" flex  ">
          <div className=" ">
            <div className="mt-[330px]  w-[110px] h-[120px] ">
              <img
               src={piping}
                className="mt-130px] w-[120px] m"
              />
              <img
                 src={branding}
                className=" mt-[20px] "
              />
            </div>
          </div>
          <div className="  w-[120px] h-[120px] ">
            <img
            src={scents}
              className="aspect-[0.52]  mt-[297px] ml-[90px]"
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <img
             src={glasses}
              className="aspect-[0.52] mt-[440px] ml-[20px] "
            />
          </div>
          <div className="">
            <img
             src={nadine}
              className="aspect-[0.52] mt-[330px] ml-[90px] w-[120px] h-[120px]"
            />
          </div>
          <div className=" mr-[100px] ">
            <img
             src={invest}
              className="aspect-[0.52] mt-[440px] ml-[10px] w-[120px] h-[120px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bottom1