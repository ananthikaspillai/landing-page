import React from 'react'
import invest from "../../assets/invest.svg"
import branding from "../../assets/branding.svg"
import piping from "../../assets/piping.svg"
import quote from "../../assets/quote.svg"
import smallquote from "../../assets/smallquote.svg"
function BannerFifth() {
    return (  
    <div className=" mt-[20px] ml-[90px]  ">
  <div className="w-96 h-96 relative">
    <div className="w-96 h-96 left-[64px] top-0 absolute">
      <div className="w-36 h-28 left-0 top-0 absolute opacity-30" />
      <div className="w-[445px] h-[340px] left-[470px] top-[80px] absolute bg-white rounded-lg shadow">
        <div className="left-[32px] top-[104px] absolute justify-start items-start gap-4 inline-flex">
          <div className="w-4 h-3.5 relative opacity-30" />
          <div className=" ">
            <div className="w-80 h-36 text-black text-base font-normal font-['Inter'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</div>
            <div className="h-12 flex-col justify-start items-start flex">
              <div className="text-zinc-900 text-lg font-bold font-['Inter'] leading-7">Jane Cooper</div>
              <img className="w-[16px] h-[16px] left-[10px] top-[0px] absolute" src={smallquote} alt='' />
              <div className="text-gray-400 text-sm font-medium font-['Inter'] leading-normal">CEO, JPNL</div>
            </div>
          </div>
        </div>
        <img className="w-[78px] h-[70px] right-[300px] top-[20px] absolute" src={piping} alt='' />
        <img className="w-20 h-12 right-[859px] mt-[0px] absolute" src={quote} alt='' />
    
      </div>
      <div className="w-80 h-72 left-[470px] top-[476px] absolute bg-white rounded-lg shadow mb-0">
        <div className="left-[32px] top-[104px] absolute justify-start items-start gap-4 inline-flex">
          <div className="w-4 h-3.5 relative opacity-30" />
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-64 text-zinc-900 text-lg font-normal font-['Inter'] leading-loose">LemonWares saved our time in Hosting my company page.</div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-zinc-900 text-lg font-bold font-['Inter'] leading-7 ">Kristin Watson</div>
              <img className="w-[16px] h-[16px] left-[12px] top-[0px] absolute" src={smallquote} alt='' />
              <div className="text-gray-400 text-sm font-medium font-['Inter'] leading-normal">Co-Founder, LeeveOn Branding</div>
            </div>
          </div>
        </div>
        <img className="w-28 h-16 left-[55px] top-[41px] absolute" src={branding} alt='' />
      </div>
      <div className="w-[350px] h-[468px] left-[100px] top-[279px] absolute bg-white rounded-lg shadow mb-0">
        <div className="left-[32px] top-[109px] absolute justify-start items-start gap-4 inline-flex">
          <div className="w-4 h-3.5 relative opacity-30" />
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[254px] h-[192px] text-black text-base font-normal font-['Inter'] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-zinc-900 text-lg font-bold font-['Inter'] leading-7">Floyd Miles</div>
              <img className="w-[16px] h-[16px] left-[20px] top-[0px] absolute" src={smallquote}  alt=''/>
              <div className="text-gray-400 text-sm font-medium font-['Inter'] leading-normal ">Vice President, CLI</div>
            </div>
          </div>
        </div>
        <img className="w-28 h-28 left-[64px] top-[7px] absolute" src={invest} alt='icon' />
      </div>
      <div className="  ">
        
          <div className="w-[400px] h-[130px] text-zinc-900 text-5xl mt-[105px]  ml-[13px] font-extrabold font-['Inter']   ">Real Stories from Real Customers</div>
        </div>
        <div className=" text-zinc-900  font-normal font-['Inter'] mr-[135px] h-[32px]">Get inspired by these stories.</div>
      </div>
    </div>
  </div>
  
    )
}
    export default BannerFifth
    