"use client";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Menu from "./menu.-button";

const navLinks = [
  {
    name: "Payout",
    link: "#",
  },
  {
    name: "Wallet",
    link: "#",
  },
  {
    name: "Collections",
    link: "#",
  },
  {
    name: "Payment Links",
    link: "#",
  },
];

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <main className="w-full h-[72px] flex items-center bg-primary-2 sticky top-0 left-0 z-50">
      <div className="w-[85%] mx-auto flex items-center justify-between tab:w-[90%]">
        <div className="flex-1">
          <Logo />
        </div>
        <nav
          className={`flex gap-8 flex-[2] tab:flex-col tab:p-[32px_0_0_5vw] tab:fixed tab:top-[72px] tab:left-0 tab:h-screen tab:bg-primary-1 tab:w-full tab:-translate-x-[100%] transition-g ${
            openNav && "tab:translate-x-[0%]"
          }`}
        >
          {navLinks.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              onClick={() => setOpenNav(false)}
              className=" text-[14px] font-inter font-medium tab:w-fit tab:text-primary-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="">
          <Menu openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      </div>
    </main>
  );
};

export default Header;
