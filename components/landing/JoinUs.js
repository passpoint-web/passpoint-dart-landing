import React from "react";
import ButtonLink from "../ui/ButtonLink";

const JoinUs = () => {
  return (
    <div className="py-[73px] bg-primary-1 bg-[url(/pattern.svg)] bg-no-repeat bg-contain bg-[center_right_20%] mt-[250px] tab:mt-[150px]">
      <section
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="w-[90%] ml-auto md:mx-auto"
      >
        <h1 className="text-[2.5vw] w-[35%] leading-[135%] font-haken font-bold text-primary-2 md:w-[70%] md:text-[4vw] tab:text-[24px] tab:w-full">
          Join over 1000 people using Dart to grow their businesses{" "}
        </h1>
        <ButtonLink
          href="#"
          text="Sign Up for Free"
          className="bg-[#BFA110] w-[200px] max-w-[200px] text-primary-2 mt-8 sm:w-[180px]"
        />
      </section>
    </div>
  );
};

export default JoinUs;
