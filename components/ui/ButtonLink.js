import Link from "next/link";
import React from "react";

const ButtonLink = ({ href, text, className }) => {
  return (
    <Link
      href={href}
      className={`w-fit block rounded-[100px] py-[17px] px-6 text-[20px] text-center font-semibold font-haken tab:text-[16px] sm:text-[14px] tab:px-4 ${className}`}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
