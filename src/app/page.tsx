import Image from "next/image";
import BottomHills from "@/app/components/BottomHills";
import Background from "@/app/components/Background";
import CountDownComponent from "@/app/components/CountDownComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-4 md:px-8 lg:px-12">
      <div className="">
        <CountDownComponent />
        <Background />
        <BottomHills />
      </div>
    </main>
  );
}
