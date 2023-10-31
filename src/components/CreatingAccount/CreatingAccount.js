
 import React from 'react';
 import photo from "../../assets/photo.svg";
function CreatingAccount() {
return (
  <div className="self-center w-full max-w-[1215px]  px-16 max-md:max-w-full mt-[50px]">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 ">
        <div className="flex flex-col max-md:max-w-full ">
          <div className="flex w-[245px] max-w-full items-start justify-between gap-4 max-md:justify-center ">
            <div className="text-red-700 text-base font-semibold ">
              Hosting
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold">
              Domain
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold">
              SEO{" "}
            </div>
            <div className="text-neutral-300 text-opacity-90 text-base font-semibold">
              Email
            </div>
          </div>
          <div className="bg-neutral-200 flex w-[242px] max-w-full flex-col mt-1.5 pl-1 pr-5">
            <div className="bg-red-700 flex w-[47px] h-px flex-col" />
          </div>
          <div className="text-zinc-800 text-5xl font-bold  mt-6  ">
           <h1 className="mr-[200px]">Premium Web </h1> 
           <h1 className="mr-[140px]">Hosting  For Your</h1>
           <h1 className="mr-[330px]">Website</h1>
          </div>
          <div className="w-95  mt-[40px] text-zinc-500 text-base font-normal font-['Inter']  ">
            <h1 className="mr-[209px] w-94 text-zinc-400 text-base font-normal font-['Inter'] ">Blazing fast web hosting for individuals   </h1> 
            <h1 className=" mr-[60px]  w-96 text-zinc-400 text-base font-normal font-['Inter'] "> and businesses of all sizes backed by 24x7x365 Support.</h1>
          </div>
          <div className="flex w-[320px] max-w-full items-start justify-between gap-5 mt-16 max-md:mt-10 mt-[46px]">
            <div className="text-white text-sm leading-[171.429%] self-stretch justify-center items-center shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] bg-red-700 flex-1 pl-3.5 pr-3.5 py-3 rounded-lg">
              Create an Account
            </div>
            <div className="text-black text-sm leading-[171.429%] self-stretch justify-center items-center border border-[color:var(--base-black,#000)] flex-1 px-5 py-3 rounded-lg border-solid">
              Choose your plan
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
        <img className="aspect-[1.1] object-cover object-center w-[1000px] h-95 overflow-hidden grow mt-3 max-md:max-w-full max-md:mt-10" src={photo}
        />
      </div>
    </div>
  </div>
);
}
export default CreatingAccount






