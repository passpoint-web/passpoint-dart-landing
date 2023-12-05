import Link from "next/link";
import Dart from "../../public/logo-2.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={Dart} alt="logo" width={118} className="tab:w-[80px]" />
    </Link>
  );
};

export default Logo;
