import React from "react";
import Icon from "../Check";
import IconCheck from "../assets/images/check.png";

export const MainComponent = () => {
  const pricingPlans = [
    {
      name: "basic",
      title: "Starting Up",
      description:
        " Proin donec est sit nec nullam, non sollicitudin conubia tellus eu eget risus, venenatis iaculis, ex bibendum sed, in",
      image: "./public/1-crop.png",
      price: "D/240/mo",
      items: {
        domain: "1 Domain",
        support: "Email Support",
        storage: "200GB Cloud Space",
      },
    },
    {
      name: "standard",
      title: "Growing Business",
      description:
        " Proin donec est sit nec nullam, non sollicitudin conubia tellus eu eget risus, venenatis iaculis, ex bibendum sed, in",
      image: "./public/2-crops.png",
      price: "D/800/mo",
      items: {
        domain: "10 Domains",
        support: "Email and Phone Support",
        storage: "500GB Cloud Space",
      },
    },
    {
      name: "enterprise",
      title: "Enterprise",
      description:
        " Proin donec est sit nec nullam, non sollicitudin conubia tellus eu eget risus, venenatis iaculis, ex bibendum sed, in",
      image: "./public/3-crops.png",
      price: "D/3477/mo",
      items: {
        domain: "100 Domains",
        support: "24/7 Email and Phone Support",
        storage: "Unlimited cloud space",
      },
    },
  ];
  return (
    <main className="min-h-screen grid justify-center p-[20px] overflow-hidden">
      <div className="CartComponet w-full grid lg:grid-cols-2 items-center gap-7 md:grid-cols-2 xl:grid-cols-3 sm:w- ">
        {pricingPlans.map((pricingPlans, title) => (
          <div key={title} className="hover:translate-y-3 transition-transform">
            <div className="container bg-[#2f3133] md:w-[340px] overflow-hidden relative cursor-pointer ">
              <div
                className={`absolute inline-block text-white text-2xl w-[100%] p-2 rotate-[46deg] left-[7rem]  top-[2rem] font-bold text-center shadow-md shadow-slate-900 rounded-t-xl`}
                style={{
                  backgroundColor:
                    pricingPlans.name === "basic"
                      ? "#41a9f7"
                      : pricingPlans.name === "standard"
                      ? "#b26ffe"
                      : pricingPlans.name === "enterprise"
                      ? "#e45257"
                      : "",
                }}
              >
                <span>{pricingPlans.price}</span>
              </div>
              <div className="mt-12 ml-5">
                <img className="" src={pricingPlans.image} alt="" />
              </div>
              <div>
                <h2 className="text-[#facf4e] text-2xl font-bold uppercase ml-5 mt-[1.5rem]">
                  {pricingPlans.title}
                </h2>
                <p className="plan-description w-[90%] text-white ml-5 mt-4 pb-[2.25rem]">
                  {pricingPlans.description}
                </p>
              </div>
            </div>

            <div className="bg-[#232526] md:w-[340px] text-white p-6 cursor-pointer">
              <ul className="plan-items flex flex-col space-y-4">
                <li className="plan-item flex items-center">
                  <Icon Image={IconCheck} alt="check" />
                  <span>{pricingPlans.items.domain}</span>
                </li>

                <li className="plan-item flex items-center">
                  <Icon Image={IconCheck} alt="check" />
                  <span>{pricingPlans.items.support}</span>
                </li>

                <li className="plan-item flex items-center">
                  <Icon Image={IconCheck} alt="check" />
                  <span>{pricingPlans.items.storage}</span>
                </li>
              </ul>
              <div className="button-wrapper bg-[#1c1e1f] inline-block w-[100%] p-[1rem] mt-12 mb-2 text-center text-[#facf4e] text-2xl cursor-pointer border-1 rounded hover:shadow-md hover:shadow-[#facf4e] hover:border-2 border-[#facf4e]">
                <button className="">Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
