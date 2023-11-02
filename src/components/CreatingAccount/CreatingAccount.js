
 import React from 'react';
 import photo from "../../assets/photo.svg";
 import element1 from "../../assets/element1.svg"
 import element2 from "../../assets/element2.svg"
import element3 from "../../assets/element3.svg"
function CreatingAccount() {
return (
  <div className="self-center w-full max-w-[1215px]  px-16 max-md:max-w-full mt-[50px]">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 ">
        <div className="flex flex-col max-md:max-w-full ">
          <div className="flex w-[245px] max-w-full items-start justify-between gap-4 max-md:justify-center ">
            <div className="text-red-700 text-base font-semibold font-['Poppins'] ">
              Hosting
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold font-['Poppins']">
              Domain
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold font-['Poppins']">
              SEO{" "}
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold font-['Poppins']">
              Email
            </div>
          </div>
          <div className="bg-neutral-200 flex w-[242px] max-w-full flex-col mt-1.5 pl-1 pr-5 font-['Poppins']">
            <div className="bg-red-700 flex w-[47px] h-px flex-col" />
          </div>
          <div className="text-zinc-800 text-5xl font-bold  mt-6   ">
           <h1 className="mr-[200px] font-bold">Premium Web </h1> 
           <h1 className="mr-[140px]">Hosting  For Your</h1>
           <h1 className="mr-[330px]">Website</h1>
          </div>
          <div className="mt-[70px] ">
            <h1 className="mr-[209px] w-94 text-zinc-500 text-base font-normal fon-inter ">Blazing fast web hosting for individuals   </h1> 
            <h1 className=" mr-[60px]  w-96 text-zinc-500 text-base font-normal font-inter "> and businesses of all sizes backed by 24x7x365 Support.</h1>
          </div>
          <div className="flex w-[320px] max-w-full items-start justify-between gap-5 mt-16 max-md:mt-10 mt-[46px]">
            <div className="text-white text-sm leading-[171.429%] w-[160px] h-[48px] self-stretch justify-center  font-poppins items-center shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] bg-red-700 flex-1 pl-3.5 pr-3.5 py-3 rounded-lg">
             <h1 className="w-[133px] h-[24px]">  Create an Account</h1>
            </div>
            <div className="text-black text-sm leading-[171.429%] self-stretch w-[160px] h-[48px] font-poppins justify-center items-center border border-[color:var(--base-black,#000)] flex-1 px-5 py-3 rounded-lg border-solid">
            <h1 className="w-[133px] h-[24px]">  Choose your plan </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[501px] h-[504px] ml-5 ">
        <img className="aspect-[1.1] object-cover object-center w-[1000px] h-95 relative grow mt-3 " src={photo} alt=''
        />
        <img className="w-[70px] h-[70px] absolute bottom-2 right-24 " src={element1} alt='element1'/>
        <img className="w-[40px] h-[40px] absolute bottom-2 right-[600px] " src={element2} alt='element1'/>
        <img className="w-[40px] h-[40px] absolute bottom-[360px] right-24 " src={element3} alt='element1'/>
      </div>
    </div>
  </div>
);
}
export default CreatingAccount






