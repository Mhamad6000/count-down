import BottomHills from "@/app/components/BottomHills";
import Background from "@/app/components/Background";
import CountDownComponent from "@/app/components/CountDownComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 lg:pt-32 px-5 md:px-8 lg:px-12">
      <div className="w-full">
        {/* count down component */}
        <CountDownComponent />
        {/* background component */}
        <Background />
        {/* footer and socials */}
        <BottomHills />
      </div>
    </main>
  );
}
