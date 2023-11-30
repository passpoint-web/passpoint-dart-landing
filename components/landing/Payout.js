import Image from "next/image";
import HeroImage from "../../public/payout.png";

const Payout = () => {
  return (
    <div className="w-[80%] mx-auto my-20 md:w-[90%]">
      <section className="flex justify-between gap-[30px] font-haken tab:flex-col tab:gap-5">
        <h1 className="w-[35%] text-[3vw] text-secondary-1 font-bold leading-[135%] md:w-[45%] md:text-[4vw] tab:w-[70%] tab:text-[24px] sm:w-full">
          Get Paid Faster with Our{" "}
          <span className="text-primary-4">Payout</span> Services
        </h1>
        <p className="w-[50%] text-[20px] text-secondary-1 leading-[160%] tab:w-full tab:text-[16px] sm:text-[14px]">
          Experience the speed and security of our advanced payout
          solutions. Effortlessly handle payouts with our user-friendly
          platform.From settlements to your account in seconds – discover the
          power of swift payouts
        </p>
      </section>
      <section className="mt-[48px]">
        <Image src={HeroImage} alt="dashboard" className="w-full" />
      </section>
    </div>
  );
};

export default Payout;
