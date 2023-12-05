import Image from "next/image";
import Logo1 from "../../public/partner-1.png";
import Logo2 from "../../public/partner-2.png";

const images = [Logo1, Logo2];
const Partner = () => {
  return (
    <main className="bg-primary-3 py-10 m-[80px_0_100px] tab:m-[50px_0_60px]">
      <h1 className="w-[90%] mx-auto text-center text-[2.5vw] leading-normal text-secondary-1 font-haken font-bold md:text-[3.5vw] tab:text-[24px]">
        Trusted By Leading Brands
      </h1>
      <section className="w-[50%] mx-auto flex flex-wrap justify-center gap-4 mt-6 tab:w-[90%]">
        {images.map((item, i) => (
          <Image src={item} width={170} height={96} key={i} alt="partner images" />
        ))}
      </section>
    </main>
  );
};

export default Partner;
