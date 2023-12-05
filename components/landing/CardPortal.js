import Image from "next/image";
import HeroImage from "../../public/card-portal.png";
import ButtonLink from "../ui/ButtonLink";

const CardPortal = () => {
  return (
    <main className="w-[95%] ml-auto flex items-center md:w-[90%] md:mx-auto tab:gap-10 tab:flex-col-reverse overflow-hidden">
      <section className="w-[40%] md:w-[50%] tab:w-[70%] sm:w-full" data-aos="flip-left" data-aos-delay="500">
        <Image src={HeroImage} alt="portal" />
      </section>
      <section className="w-[40%] md:w-[55%] tab:w-full" data-aos="fade-left">
        <h1 className="w-[80%] text-[2.5vw] text-secondary-4 font-haken font-bold leading-[100%] md:text-[3.5vw] tab:text-[24px]">
          With our all-in-one{" "}
          <span className="text-primary-1">Fintech platform</span>
        </h1>
        <p className="text-[20px] text-secondary-4 font-haken leading-[137.5%] my-6 tab:text-[16px] sm:text-[14px]">
          Streamline your financial operations with our intuitive wallets,
          secure payment links, and efficient collections and settlement
          processes. Effortlessly manage transactions, from payments to
          settlements.
        </p>
        <div className="flex">
          <ButtonLink
            href="#"
            text="Get Started"
            className="text-primary-2 bg-primary-1 w-[200px] max-w-[200px] sm:w-[180px]"
          />
        </div>
      </section>
    </main>
  );
};

export default CardPortal;
