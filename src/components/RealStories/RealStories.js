import React from 'react'
import invest from "../../assets/invest.svg"
import branding from "../../assets/branding.svg"
import piping from "../../assets/piping.svg"
function BannerFifth() {
    return (  
    <div className=" mt-[20px] ml-[90px]  ">
  <div className="w-96 h-96 relative">
    <div className="w-96 h-96 left-[64px] top-0 absolute">
      <div className="w-36 h-28 left-0 top-0 absolute opacity-30" />
      <div className="w-96 h-80 left-[570px] top-[104px] absolute bg-white rounded-lg shadow">
        <div className="left-[32px] top-[104px] absolute justify-start items-start gap-4 inline-flex">
          <div className="w-4 h-3.5 relative opacity-30" />
          <div className="">
            <div className="w-80 h-36 text-black text-base font-normal font-['Inter'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</div>
            <div className="h-12 flex-col justify-start items-start flex">
              <div className="text-zinc-900 text-lg font-bold font-['Inter'] leading-7">Jane Cooper</div>
              <div className="text-gray-400 text-sm font-medium font-['Inter'] leading-normal">CEO, JPNL</div>
            </div>
          </div>
        </div>
        <img className="w-20 h-12 left-[64px] top-[39px] absolute" src={piping} />
      </div>
      <div className="w-80 h-72 left-[570px] top-[476px] absolute bg-white rounded-lg shadow">
        <div className="left-[32px] top-[104px] absolute justify-start items-start gap-4 inline-flex">
          <div className="w-4 h-3.5 relative opacity-30" />
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-64 text-zinc-900 text-lg font-normal font-['Inter'] leading-loose">LemonWares saved our time in Hosting my company page.</div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-zinc-900 text-lg font-bold font-['Inter'] leading-7">Kristin Watson</div>
              <div className="text-gray-400 text-sm font-medium font-['Inter'] leading-normal">Co-Founder, LeeveOn Branding</div>
            </div>
          </div>
        </div>
        <img className="w-28 h-16 left-[55px] top-[41px] absolute" src={branding} />
      </div>
      <div className="w-80 h-96 left-[100px] top-[248px] absolute bg-white rounded-lg shadow">
        <div className="left-[32px] top-[104px] absolute justify-start items-start gap-4 inline-flex">
          <div className="w-4 h-3.5 relative opacity-30" />
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[254px] h-[192px] text-black text-base font-normal font-['Inter'] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-zinc-900 text-lg font-bold font-['Inter'] leading-7">Floyd Miles</div>
              <div className="text-gray-400 text-sm font-medium font-['Inter'] leading-normal">Vice President, CLI</div>
            </div>
          </div>
        </div>
        <img className="w-28 h-28 left-[64px] top-[7px] absolute" src={invest} />
      </div>
      <div className="  ">
          <div className="w-96 text-zinc-900 text-5xl mt-[100px] font-extrabold font-['Inter'] ">Real Stories from Real Customers</div>
        </div>
        <div className=" text-zinc-900 text-lg font-normal font-['Inter'] mt-[20px] mr-[135px] h-[32px]">Get inspired by these stories.</div>
      </div>
    </div>
  </div>

    )
}
    export default BannerFifth
    