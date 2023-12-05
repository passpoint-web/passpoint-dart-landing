import CardPortal from "@/components/landing/CardPortal";
import Counts from "@/components/landing/Counts";
import Global from "@/components/landing/Global";
import Hero from "@/components/landing/Hero";
import JoinUs from "@/components/landing/JoinUs";
import Partner from "@/components/landing/Partner";
import Payment from "@/components/landing/Payment";
import Payout from "@/components/landing/Payout";

export default function Home() {
  return (
    <main className="bg-primary-2">
      <Hero />
      <Partner />
      <CardPortal />
      <Counts />
      <Payout />
      <Global />
      <Payment />
      <JoinUs />
    </main>
  );
}
