
import React from 'react'
import piping from "../../assets/piping.svg"
import branding from "../../assets/branding.svg"
import glasses from "../../assets/glasses.svg"
import nadine from "../../assets/nadine.svg"
 import scents from "../../assets/scents.svg"
 import invest from "../../assets/invest.svg"
function Website() {
  return (
      <div className="mt-[450px] flex flex-row">
        <div className="ml-[142px] mt-[22px]">
        <div className="w-95 text-zinc-900 text-5xl font-extrabold font-['Inter'] leading-12 mr-[30px]">
          <h1>We serve over 100 </h1>
          <h1>Nigerian Websites</h1>
          </div>
        <h2 className="w-20px] text-zinc-900 text-lg font-normal font-['Inter'] mt-[20px] ">
          Connect LemonWares with your favourite tools that</h2>
          <h2 className="w-95 text-zinc-900 text-lg font-normal font-['Inter'] mr-[97px]">you use daily and keep things on track.</h2>
      </div>
<div className="ml-200px">
  <div className="flex ml-[80px]">
  <img src={piping} alt='' className='mr-[65px]'/>
  <img src={scents} alt=''className='mr-[65px]'/>
  <img src={nadine} alt=''/>
  </div>
    <div className="flex ml-[80px]">
  <img src={branding} alt=''className='mr-[65px]'/>
  <img src={glasses} alt=''className='mr-[65px]'/>
  <img src={invest} alt=''/>
  </div>
  
</div>
      </div>
  )
}

export default Website