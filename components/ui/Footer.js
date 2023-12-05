import Image from "next/image";
import Instagram from "../../public/ig.svg";
import Twitter from "../../public/twitter.svg";
import Fb from "../../public/fb.svg";
import Logo from "../../public/logo-2.svg";
import Message from "../../public/message.svg";
import Location from "../../public/location.svg";
import Phone from "../../public/phone.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary-5 p-[90px_0_24px] font-haken bg-[url(/footer.png)] bg-no-repeat bg-contain bg-right tab:py-[50px]">
      <div className="w-[80%] mx-auto flex justify-between flex-wrap gap-10 md:w-[90%]">
        <section className="tab:order-3">
          <Link
            href="/"
            className="[&>:first-child]:mb-[24px] tab:[&>:first-child]:mb-4"
          >
            <Image src={Logo} alt="passpoint logo" />
          </Link>
          <ul className="flex flex-col gap-5 text-[14px] sm:text-[13px] text-secondary-6">
            <li className="w-[55%] tab:w-full">
              Dart is a product of Passpoint Technologies Inc company
              registration number 7127499.
            </li>
            <li className="inline-flex gap-[24px] items-center tab:gap-[16px]">
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src={Fb} alt="passpoint facebook" />
              </a> */}
              <a
                href="https://instagram.com/darttech_?igshid=NzZlODBkYWE4Ng=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="passpoint instagram" />
              </a>
              <a
                href="https://twitter.com/darttech_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Twitter} alt="twitter" className="text-primary" />
              </a>
            </li>
          </ul>
        </section>
        <section className="flex-1">
          <h3 className="text-[20px] font-semibold text-secondary-1 tab:text-[16px]">
            Quick Links
          </h3>
          <nav className="grid gap-3 mt-6 text-secondary-6 text-[14px] tab:mt-4">
            <Link href="#">Sign In</Link>
            <Link href="#">API documentation</Link>
            <Link href="#">Payment Links</Link>
          </nav>
        </section>
        <section>
          <h3 className="text-[20px] font-semibold text-secondary-1 tab:text-[16px]">
            Reach Us
          </h3>
          <ul className="grid gap-6 mt-6 text-[14px] text-secondary-6 tab:gap-4 tab:mt-4">
            <li className="inline-flex gap-2 items-center">
              <Image src={Message} alt="icon" />
              <a href="mailto:dart@mypasspoint.com">dart@mypasspoint.com</a>
            </li>
            {/* <li className="inline-flex gap-2 items-center">
              <Image src={Phone} alt="icon" />
              <a href="tel:+2349876543210">+234 98765 43210</a>
            </li> */}
            <li className="inline-flex gap-2 items-center">
              <Image src={Location} alt="icon" />8 The Green STE R, Dover, DE
              19901
            </li>
          </ul>
        </section>
      </div>
      <div className="w-[80%] mx-auto flex flex-wrap gap-10 justify-between mt-20 text-[14px] text-secondary-1 md:w-[90%] tab:mt-10 tab:flex-col-reverse tab:gap-5">
        <p>
          © 2023 Dart is licensed as a money service business (M23708578) All
          rights reserved
        </p>
        <article>
          <a
            href="https://mypasspoint.com/terms_and_conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a
            href="https://mypasspoint.com/privacy_policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
