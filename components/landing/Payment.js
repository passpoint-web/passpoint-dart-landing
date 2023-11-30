import Image from "next/image";
import Hero from "../../public/payment-link.png";

const Payment = () => {
  return (
    <div className="h-[100vh] bg-[url(/payment-link.png)] bg-contain bg-no-repeat md:h-[70vh] md:bg-cover tab:bg-none tab:h-[200px] tab:pb-32 sm:h-0">
      <Image src={Hero} alt="dashboard" placeholder="blur" className="hidden tab:block object-contain w-full" />
    </div>
  );
};

export default Payment;
