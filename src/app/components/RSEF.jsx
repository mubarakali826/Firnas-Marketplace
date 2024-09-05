import React from "react";

const RSEF = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center p-10">
      <div className="RSEF text-center h-[20%]">
        <h1 className="relative text-[2rem] font-bold text-[#243A73] ">
          Research .Solution .Execution .Fulfillment
          <img
            src="/assets/images/arrowR.png"
            className="absolute top-2 left-10 w-[6rem]"
            alt="arrow"
          />
        </h1>
        <p className="text-[1.3rem] text-[#243A73] py-2">
          We are doing with technologies and expertise: Deliver satisfied
          business.
        </p>
        <p className="text-sm text-gray-500 w-[70%] m-auto">
          In-house customization of the most recent technology delivered our
          service for developing your business, along with our expertise,
          knowledge, and direct field execution.
        </p>
      </div>
      <div className="cards w-[80vw] flex h-[40%] gap-10">
        <div className="card1 flex-1 h-[50rem]">
          <div className="relative  innerCard h-[14rem] w-full shadow-2xl rounded-lg border border-gray-100 ">
            <img
              src="/assets/images/topper1.png"
              alt="image"
              className="absolute top-[-3rem] left-0 w-[9rem]"
            />
            <img src="/assets/images/dottedArrow.png" alt="" className="absolute -top-3 right-[-7.5rem] w-[7rem] "/>
            <div className="flex flex-col justify-end w-full h-full px-4 pb-6 gap-2">
              <h2 className="text-md text-[#010F52] font-bold uppercase">
                Unified Analytics
              </h2>
              <p className="text-[#4E4E4E] text-sm">
                wide angle collective data brings powerful reports for users
                business requirement like rawmaterial procurement, supply and
                marketing
              </p>
            </div>
          </div>
        </div>
        <div className="card2 flex-1 h-[50rem]">
          <div className="relative innerCard h-[14rem] w-full shadow-2xl rounded-lg border border-gray-100  mt-[6rem]">
            <img
              src="/assets/images/topper2.png"
              alt="image"
              className="absolute top-[-3rem] left-0 w-[9rem]"
            />
            <img src="/assets/images/dottedArrow.png" alt="" className="absolute -top-12 right-[-7.5rem] w-[7rem] "/>

            <div className="flex flex-col justify-end w-full h-full px-4 pb-6 gap-2">
              <h2 className="text-md text-[#010F52] font-bold uppercase">
                executions{" "}
              </h2>
              <p className="text-[#4E4E4E] text-sm">
                Direct field execution with trusted insights reports and experts
                increases the efficiency of procurement and supplies.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card3 flex-1 h-[50rem] ">
          <div className="relative innerCard h-[14rem] w-full shadow-2xl rounded-lg border border-gray-100  mt-[10rem]">
            <img
              src="/assets/images/topper3.png"
              alt="image"
              className="absolute top-[-3rem] left-0 w-[9rem]"
            />
            <img src="/assets/images/dottedArrow.png" alt="" className="absolute -top-12 right-[-7.5rem] w-[7rem] "/>

            <div className="flex flex-col justify-end w-full h-full px-4 pb-6 gap-2">
              <h2 className="text-md text-[#010F52] font-bold uppercase">
                Delivery{" "}
              </h2>
              <p className="text-[#4E4E4E] text-sm">
                AI sourcing technology and procurement expertise deliver
                rawmaterila or orders products to customers with befitical
                offers
              </p>
            </div>
          </div>
        </div>
        <div className="card4 flex-1 h-[50rem]">
          <div className="relative innerCard h-[14rem] w-full shadow-2xl rounded-lg border border-gray-100 mt-[14rem]">
            <img
              src="/assets/images/topper4.png"
              alt="image"
              className="absolute top-[-3rem] left-0 w-[9rem]"
            />
            <div className="flex flex-col justify-end w-full h-full px-4 pb-6 gap-2">
              <h2 className="text-[0.9rem] text-[#010F52] font-bold uppercase">
                Feedback and support
              </h2>
              <p className="text-[#4E4E4E] text-sm">
                AI sourcing technology and procurement expertise deliver
                rawmaterila or orders products to customers with befitical
                offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSEF;
