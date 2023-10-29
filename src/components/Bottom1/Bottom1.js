import React from 'react'
import piping from "../../assets/piping.svg"
import branding from "../../assets/branding.svg"
import glasses from "../../assets/glasses.svg"
import nadine from "../../assets/nadine.svg"
import scents from "../../assets/scents.svg"
 function Bottom1() {
return (
    <div className="self-center flex w-full max-w-[1194px] items-start justify-between gap-5 mt-20 px-5 ">
      <div className="items-start self-center flex flex-col my-auto max-md:max-w-full">
        <div className="text-zinc-900 text-5xl font-extrabold leading-[133.333%]  mt-[280px]">
          We serve over 100
          <br />
          Nigerian Websites
        </div>
        <div className="text-zinc-900 text-lg leading-[177.778%] mt-2 max-md:max-w-full">
          Connect LemonWares with your favourite tools that you use daily and
          keep things on track.
        </div>
      </div>
      <div className="">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="mt-[250px] flex-col ">
              <img
               src={piping}
                className="mt-[100px]"
              />
              <img
                 src={branding}
                className=""
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <img
            src={scents}
              className="aspect-[0.52]  mt-[297px] "
            />
          </div>
          <div className="flex flex-col ">
            <img
             src={glasses}
              className="aspect-[0.52] mt-[416px] ml-[20px] "
            />
          </div>
        </div>
      </div>
    </div>

    // <div className="mt-[100px]">
    //    <div className="w-96 h-48 left-0 top-[3301px] absolute ">
    //      <div className=" mt-[200px]">
    //       <div className="w-96 text-zinc-900 text-5xl font-extrabold font-['Inter'] ">We serve over 100<br/>Nigerian Websites</div>
    //     </div>
    //    <div className=" text-zinc-900 text-lg font-normal font-['Inter']  mt-[300px]">Connect LemonWares with your favourite tools that you use daily and keep things on track.</div>
    //   </div>
    //   <div className="mt-[200px]">
    //   <img className="w-28 h-28 left-[1074px] top-[120px] absolute" src="https://via.placeholder.com/120x120" />
    //   <img className="w-28 h-28 left-[889px] top-[120px] absolute" src="https://via.placeholder.com/120x120" />
    //   <img className="w-28 h-28 left-[889px] top-[10px] absolute" src="https://via.placeholder.com/120x120" />
    //   <img className="w-28 h-28 left-[704px] top-[120px] absolute" src="https://via.placeholder.com/120x120" />
    //   <img className="w-28 h-28 left-[1074px] top-[9px] absolute" src="https://via.placeholder.com/120x120" />
    //  <img className="w-28 h-28 left-[704px] top-0 absolute" src="https://via.placeholder.com/120x120" />
    //  </div>
    //  </div>
  );
}
export default Bottom1