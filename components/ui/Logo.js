import Link from "next/link";
import Dart from "../../public/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={Dart} alt="logo" className="tab:w-[80px]" />
    </Link>
  );
};

export default Logo;
