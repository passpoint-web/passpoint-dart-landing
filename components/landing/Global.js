import Image from "next/image";
import Global1 from "../../public/global-1.svg";
import Global2 from "../../public/global-2.svg";
import Global3 from "../../public/global-3.svg";
import Global4 from "../../public/global-4.svg";

const globalData = [
  {
    image: Global1,
    title: "Virtual Accounts",
    data: "fade-right",
    subtitle:
      "Create Virtual Accounts in your desired currency  (EUR, GBP, CAD, NGN, KES, GHS etc) and seamlessly transact between currencies",
  },
  {
    image: Global2,
    title: "Global Settlements",
    data: "fade-left",
    subtitle:
      "Effortlessly settle funds worldwide within 24 hours and conduct global payments through SWIFT, Fedwire, Chaps, FPS, and other channels.",
  },
  {
    image: Global3,
    title: "Virtual cards",
    data: "fade-right",
    subtitle:
      "Issue virtual payment cards through a bespoke API to provide unmatched features",
  },
  {
    image: Global4,
    title: "Global Collections",
    data: "fade-left",
    subtitle:
      "Expand your market reach with our Global Collections API, enabling you to seamlessly accept both local and international payments, including cards and alternative payment methods, across diverse markets.",
  },
];

const Global = () => {
  return (
    <div className="w-[100%] relative py-[100px] my-[100px] overflow-hidden tab:my-[50px]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-[2.5vw] font-haken font-bold text-center md:text-[3vw] tab:text-[22px]">
          Navigate the Global Marketplace With The Ultimate Solutions
        </h1>
        <section className="w-[70%] mx-auto grid grid-cols-fluid gap-x-8 gap-y-14 mt-11 md:w-full md:grid-cols-fluidMedium tab:gap-y-9">
          {globalData.map((item, i) => (
            <div className="" key={i} data-aos={item.data}>
              <Image
                src={item.image}
                alt="icons"
                className="md:w-14 tab:w-10"
              />
              <h3 className="text-[24px] leading-none text-secondary-1 font-haken font-bold m-[30px_0_10px] md:text-[18px]">
                {item.title}
              </h3>
              <p className="text-[16px] text-secondary-1 font-haken leading-[162.5%] tab:text-[14px]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </section>
        <div className="w-[20%] h-[300px] absolute top-0 -left-[6%] opacity-[0.4] bg-primary-4 blur-[50px] rounded-[300px] tab:w-[100px] tab:h-[140px] tab:-left-[20%]"></div>
        <div className="w-[20%] h-[20%] absolute bottom-0 -right-[10%] opacity-[0.4] bg-[#FFCF96] blur-[50px] rounded-[300px] tab:w-[100px] tab:h-[140px] tab:-right-[10%]"></div>
      </div>
    </div>
  );
};

export default Global;
