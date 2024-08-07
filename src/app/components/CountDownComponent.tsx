"use client";
import Image from "next/image";
import Countdown from "react-countdown";
import Card from "./Card";
import { Red_Hat_Text } from "next/font/google";
const redHat = Red_Hat_Text({ subsets: ["latin"], weight: "700" });
export default function CountDownComponent() {
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
    days,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
    days: number;
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      return (
        <div className={`flex items-center gap-5 z-40 ${redHat}`}>
          <Card number={days} type="days" />
          <Card number={hours} type="hours" />
          <Card number={minutes} type="minutes" />
          <Card number={seconds} type="seconds" />
        </div>
      );
    }
  };

  return (
    <div className="relative flex w-full flex-col">
      <h1 className="text-custom-white uppercase text-xl md:text-2xl tracking-[0.3rem] text-center">
        We&apos;re launching soon
      </h1>
      <Countdown date={Date.now() + 500000} renderer={renderer} />,
    </div>
  );
}
