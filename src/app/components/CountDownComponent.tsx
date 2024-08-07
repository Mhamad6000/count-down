import Image from "next/image";

export default function CountDownComponent() {
  return (
    <div className="relative flex w-full flex-col">
      <h1 className="text-custom-white uppercase text-xl md:text-2xl tracking-[0.3rem] text-center">
        We&apos;re launching soon
      </h1>
      <div className="">
        <div className="">
          <div className=""></div>
          <div className="bg-[#34364F] text-custom-soft-red text-8xl w-32 ">
            24
          </div>
        </div>
      </div>
    </div>
  );
}
