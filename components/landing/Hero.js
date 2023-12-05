import Image from "next/image";
import HeroImage from "../../public/hero.png";
import ButtonLink from "../ui/ButtonLink";
import Logo from "../ui/Logo";

const Hero = () => {
  return (
    <main className='bg-[url("/blur.svg")] p-[30px_0_40px] bg-[#fffbdd5b] bg-cover bg-no-repeat bg-center tab:p-[30px_0_40px] tab:bg-[right_bottom_-5.5rem] overflow-hidden'>
      <div className="w-[85%] mx-auto mb-10 tab:w-[90%]">
        <Logo />
      </div>
      <section className="w-[55%] mx-auto text-center md:w-[70%] tab:w-[90%] ">
        <h1 className="text-[4.2vw] font-haken font-bold text-secondary-2 leading-[100%] tab:text-[26px] animate__animated animate__bounceInDown">
          Powering global payments for growing businesses.
        </h1>
        <p className="text-[20px] font-haken text-secondary-3 leading-[normal] my-4 tab:text-[16px] animate__animated animate__bounceInDown">
          The world is your stage. Dart empowers businesses to swiftly send,
          receive, and convert currencies globally
        </p>
        <div className="flex items-center justify-center gap-2 w-[65%] md:w-[80%] tab:w-full mx-auto">
          <ButtonLink
            href="#"
            text="Sign Up for Free"
            className="w-[200px] max-w-[200px] text-primary-2 bg-primary-1 whitespace-nowrap"
          />
          <ButtonLink
            href="#"
            text="Log In"
            className="w-[200px] max-w-[200px] bg-[#6f41834f] text-[#6F4183]"
          />
        </div>
      </section>
      <section className="w-[75%] mx-auto mt-[107px] tab:w-[90%] animate__animated animate__bounceInUp">
        <Image src={HeroImage} alt="dashboard" className="w-full" />
      </section>
    </main>
  );
};

export default Hero;
