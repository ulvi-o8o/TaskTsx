import CardPantera from "@/components/Card";
import Card from "@/components/Card";
import CardCrypto from "@/components/Card/cardCrypto";
import CardDevil from "@/components/Card/cardDevil";
import CardSonic from "@/components/Card/cardSonic";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-black w-full h-full flex justify-center items center">
        <CardPantera />
        <CardDevil />
        <CardSonic />
        <CardCrypto />
      </div>
    </main>
  );
}
