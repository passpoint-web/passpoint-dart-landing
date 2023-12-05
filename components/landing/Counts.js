import Image from "next/image";
import Conut1 from "../../public/count-1.svg";
import Conut2 from "../../public/count-2.svg";
import Conut3 from "../../public/count-3.svg";
import Conut4 from "../../public/count-4.svg";

const countData = [
  {
    image: Conut1,
    title: "40+",
    subtitle: "Happy Businesses",
  },
  {
    image: Conut2,
    title: "540k+",
    subtitle: "Transaction Count",
  },
  {
    image: Conut3,
    title: "$300M+",
    subtitle: "Transaction Volume",
  },
  {
    image: Conut4,
    title: "98%",
    subtitle: "Transaction Success",
  },
];

const Counts = () => {
  return (
    <main className="min-h-[400px] custom-gradient grid place-items-center py-10 tab:py-[20px] tab:min-h-0">
      <div className="w-[80%] mx-auto py-8 bg-primary-2 rounded-[8px] shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] grid grid-cols-fluidMedium gap-8 md:w-[90%] tab:grid-cols-fluidSmall tab:gap-x-4 tab:gap-y-8">
        {countData.map((item, i) => (
          <div className="flex flex-col items-center justify-center" key={i}>
            <Image
              src={item.image}
              alt="icons"
              className="md:w-[40px] md:h-[40px]"
            />
            <h3 className="text-[3vw] leading-none text-primary-1 font-haken font-bold my-4 md:text-[3.5vw] tab:text-[20px] tab:my-2">
              {item.title}
            </h3>
            <p className="text-[20px] text-secondary-1 font-haken leading-none tab:text-[14px]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Counts;
